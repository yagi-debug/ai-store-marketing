/**
 * AI Store Marketing - TikTok Content Posting Frontend
 *
 * TikTok Content Posting API のフロントエンドロジック。
 * バックエンド (tiktok_server.py) と連携してOAuth認証・動画投稿を行う。
 */

// --- Configuration ---
// バックエンドAPIのベースURL
// ローカル実行時: '' (同一オリジン)
// GitHub Pages: localStorage.getItem('api_base_url') に設定
const API_BASE = localStorage.getItem('api_base_url') || '';

// --- State ---
let selectedFile = null;
let creatorInfo = null;

// ============================================================
// Initialization
// ============================================================

document.addEventListener('DOMContentLoaded', async () => {
  // Check URL params for token (from server-side redirect after OAuth)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('access_token')) {
    sessionStorage.setItem('tiktok_access_token', urlParams.get('access_token'));
    if (urlParams.get('open_id')) sessionStorage.setItem('tiktok_open_id', urlParams.get('open_id'));
    // Clean URL (remove token from address bar)
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  const token = sessionStorage.getItem('tiktok_access_token');

  if (token) {
    // Already logged in - show post section
    showPostSection();
    await fetchCreatorInfo(token);
  }

  // Setup event listeners
  setupVideoUpload();
  setupFormValidation();
});

// ============================================================
// OAuth Login
// ============================================================

async function startLogin() {
  const btn = document.getElementById('login-btn');
  btn.disabled = true;
  btn.textContent = 'リダイレクト中...';

  try {
    const resp = await fetch(API_BASE + '/api/auth/url');
    const data = await resp.json();

    if (data.url) {
      // Save state for CSRF verification
      if (data.state) {
        sessionStorage.setItem('tiktok_oauth_state', data.state);
      }
      // Redirect to TikTok OAuth
      window.location.href = data.url;
    } else {
      throw new Error('OAuth URL を取得できませんでした');
    }
  } catch (err) {
    btn.disabled = false;
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .55.04.8.1v-3.5a6.37 6.37 0 0 0-.8-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.83a8.28 8.28 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.24z"/></svg> TikTokでログイン';
    showStatus('error', 'バックエンドサーバーに接続できません。サーバーが起動しているか確認してください。');
  }
}

function logout() {
  sessionStorage.removeItem('tiktok_access_token');
  sessionStorage.removeItem('tiktok_refresh_token');
  sessionStorage.removeItem('tiktok_open_id');
  sessionStorage.removeItem('tiktok_oauth_state');
  window.location.reload();
}

// ============================================================
// UI State
// ============================================================

function showPostSection() {
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('post-section').style.display = 'block';
}

function showStatus(type, message) {
  const el = document.getElementById('status');
  el.className = 'status ' + type;
  el.textContent = message;
  el.style.display = 'block';
}

function hideStatus() {
  document.getElementById('status').style.display = 'none';
}

// ============================================================
// Creator Info
// ============================================================

async function fetchCreatorInfo(accessToken) {
  try {
    const resp = await fetch(API_BASE + '/api/creator/info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_token: accessToken }),
    });
    const data = await resp.json();

    if (data.data) {
      creatorInfo = data.data;
      displayCreatorInfo(creatorInfo);
      populatePrivacyOptions(creatorInfo.privacy_level_options || []);
      applyCreatorDefaults(creatorInfo);
    } else {
      console.error('Creator info error:', data);
      showStatus('error', 'クリエイター情報の取得に失敗しました。再ログインしてください。');
    }
  } catch (err) {
    console.error('Creator info fetch error:', err);
    showStatus('error', 'バックエンドに接続できません: ' + err.message);
  }
}

function displayCreatorInfo(info) {
  const card = document.getElementById('creator-card');
  const avatar = document.getElementById('creator-avatar');
  const nickname = document.getElementById('creator-nickname');
  const username = document.getElementById('creator-username');

  if (info.creator_avatar_url) {
    avatar.src = info.creator_avatar_url;
  } else {
    avatar.style.display = 'none';
  }
  nickname.textContent = info.creator_nickname || 'TikTok User';
  username.textContent = info.creator_username ? '@' + info.creator_username : '';
  card.style.display = 'flex';
}

function populatePrivacyOptions(options) {
  const select = document.getElementById('privacy-level');
  // Clear existing options except the placeholder
  while (select.options.length > 1) {
    select.remove(1);
  }

  const labels = {
    'PUBLIC_TO_EVERYONE': '全員に公開',
    'MUTUAL_FOLLOW_FRIENDS': '相互フォロー',
    'FOLLOWER_OF_CREATOR': 'フォロワーのみ',
    'SELF_ONLY': '自分のみ',
  };

  options.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    option.textContent = labels[opt] || opt;
    select.appendChild(option);
  });
}

function applyCreatorDefaults(info) {
  // Apply creator's default settings for toggles
  // Note: TikTok requires these to be user-selectable, so we show them as defaults
  if (info.comment_disabled !== undefined) {
    document.getElementById('allow-comment').checked = !info.comment_disabled;
  }
  if (info.duet_disabled !== undefined) {
    document.getElementById('allow-duet').checked = !info.duet_disabled;
  }
  if (info.stitch_disabled !== undefined) {
    document.getElementById('allow-stitch').checked = !info.stitch_disabled;
  }
}

// ============================================================
// Video Upload
// ============================================================

function setupVideoUpload() {
  const area = document.getElementById('upload-area');
  const input = document.getElementById('video-input');

  // Drag & Drop
  area.addEventListener('dragover', (e) => {
    e.preventDefault();
    area.classList.add('dragover');
  });
  area.addEventListener('dragleave', () => {
    area.classList.remove('dragover');
  });
  area.addEventListener('drop', (e) => {
    e.preventDefault();
    area.classList.remove('dragover');
    if (e.dataTransfer.files.length > 0) {
      handleVideoFile(e.dataTransfer.files[0]);
    }
  });

  // File input change
  input.addEventListener('change', () => {
    if (input.files.length > 0) {
      handleVideoFile(input.files[0]);
    }
  });
}

function handleVideoFile(file) {
  // Validate file type
  const validTypes = ['video/mp4', 'video/quicktime', 'video/webm'];
  if (!validTypes.includes(file.type) && !file.name.match(/\.(mp4|mov|webm)$/i)) {
    showStatus('error', '対応していないファイル形式です。MP4, MOV, WebM のいずれかを選択してください。');
    return;
  }

  // Validate file size (max 4GB)
  if (file.size > 4 * 1024 * 1024 * 1024) {
    showStatus('error', 'ファイルサイズが大きすぎます（最大4GB）。');
    return;
  }

  selectedFile = file;
  hideStatus();

  // Show preview
  const preview = document.getElementById('video-preview');
  const uploadArea = document.getElementById('upload-area');
  const infoEl = document.getElementById('video-info');

  preview.src = URL.createObjectURL(file);
  preview.style.display = 'block';
  uploadArea.style.display = 'none';

  // Show file info
  const sizeMB = (file.size / 1024 / 1024).toFixed(1);
  infoEl.textContent = `${file.name} (${sizeMB} MB)`;
  infoEl.style.display = 'block';
  infoEl.innerHTML += ' <a href="#" onclick="resetVideo(); return false;" style="color:#6c47ff;">変更</a>';

  validateForm();
}

function resetVideo() {
  selectedFile = null;
  const preview = document.getElementById('video-preview');
  const uploadArea = document.getElementById('upload-area');
  const infoEl = document.getElementById('video-info');

  preview.style.display = 'none';
  preview.src = '';
  uploadArea.style.display = 'block';
  infoEl.style.display = 'none';

  // Reset file input
  document.getElementById('video-input').value = '';
  validateForm();
}

// ============================================================
// Form Validation
// ============================================================

function setupFormValidation() {
  // Caption character count
  const caption = document.getElementById('caption');
  const charCount = document.getElementById('char-count');
  caption.addEventListener('input', () => {
    charCount.textContent = caption.value.length;
    validateForm();
  });

  // Privacy level change
  document.getElementById('privacy-level').addEventListener('change', validateForm);

  // Consent checkbox
  document.getElementById('consent-check').addEventListener('change', validateForm);
}

function validateForm() {
  const btn = document.getElementById('post-btn');
  const hasVideo = selectedFile !== null;
  const hasPrivacy = document.getElementById('privacy-level').value !== '';
  const hasConsent = document.getElementById('consent-check').checked;

  btn.disabled = !(hasVideo && hasPrivacy && hasConsent);
}

// ============================================================
// Submit Post
// ============================================================

async function submitPost() {
  const token = sessionStorage.getItem('tiktok_access_token');
  if (!token) {
    showStatus('error', 'ログインが必要です。');
    return;
  }

  if (!selectedFile) {
    showStatus('error', '動画ファイルを選択してください。');
    return;
  }

  const privacyLevel = document.getElementById('privacy-level').value;
  if (!privacyLevel) {
    showStatus('error', '公開範囲を選択してください。');
    return;
  }

  if (!document.getElementById('consent-check').checked) {
    showStatus('error', '投稿に同意してください。');
    return;
  }

  // Disable button and show loading
  const btn = document.getElementById('post-btn');
  btn.disabled = true;
  btn.textContent = '投稿中...';
  showStatus('loading', '動画をアップロードしています... しばらくお待ちください。');

  try {
    const formData = new FormData();
    formData.append('access_token', token);
    formData.append('video', selectedFile);
    formData.append('title', document.getElementById('caption').value);
    formData.append('privacy_level', privacyLevel);
    formData.append('disable_comment', !document.getElementById('allow-comment').checked);
    formData.append('disable_duet', !document.getElementById('allow-duet').checked);
    formData.append('disable_stitch', !document.getElementById('allow-stitch').checked);
    formData.append('brand_content_toggle', document.getElementById('brand-content').checked);
    formData.append('brand_organic_toggle', document.getElementById('brand-organic').checked);

    const resp = await fetch(API_BASE + '/api/video/post', {
      method: 'POST',
      body: formData,
    });

    const data = await resp.json();

    if (data.success) {
      showStatus('success',
        '✅ TikTokへの投稿が完了しました！ (Publish ID: ' + (data.publish_id || '-') + ')' +
        '\nTikTokアプリのマイページで確認してください。'
      );
      btn.textContent = '投稿完了';
    } else {
      throw new Error(data.error || data.message || 'Unknown error');
    }
  } catch (err) {
    showStatus('error', '投稿に失敗しました: ' + err.message);
    btn.disabled = false;
    btn.textContent = '投稿する';
  }
}
