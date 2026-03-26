# GEO対策 実装ガイド（2026-03-21作成）

## 成果物一覧

```
geo-optimization/
├── README-実装ガイド.md    ← このファイル
├── relumi/                 ← 美容整体ReLUMI (hp.relumi.jp)
│   ├── llms.txt            → サイトルートに設置
│   ├── sitemap.xml         → 既存のsitemap.xmlを差し替え
│   ├── meta-tags.html      → 各ページの<head>に追加
│   ├── schema-jsonld.html  → トップページの<head>に追加
│   └── staff-profile-template.html → 新規ページ staff.html として作成
└── rehada/                 ← 肌質改善Labo Re肌 (rehada.relumi.jp)
    ├── llms.txt            → サイトルートに設置
    ├── meta-tags.html      → 各ページの<head>に追加
    ├── schema-jsonld.html  → トップページの<head>に追加
    └── staff-profile-template.html → 新規ページ staff.html として作成
```

---

## 実装手順

### STEP 1: llms.txt設置（5分）
1. `relumi/llms.txt` を `https://hp.relumi.jp/llms.txt` にアップロード
2. `rehada/llms.txt` を `https://rehada.relumi.jp/llms.txt` にアップロード
3. ブラウザで `https://hp.relumi.jp/llms.txt` にアクセスして表示確認

### STEP 2: サイトマップ修正（ReLUMIのみ、5分）
1. `relumi/sitemap.xml` で既存の `sitemap.xml` を差し替え
2. 修正内容:
   - `story.html` → `manga.html` に修正
   - `before-after.html` → `voice.html` に修正
   - `first.html` → `first_visit.html` に修正
   - `concept.html` を追加
   - `lastmod` を最新日付に更新

### STEP 3: メタタグ追加（各ページ、30分）
1. `meta-tags.html` 内のコメントを参考に、各ページの `<head>` に追加
2. 最低限必要なもの:
   - `<html lang="ja">`
   - `<meta name="description" content="...">`
   - `<link rel="canonical" href="...">`
   - OGタグ（`og:title`, `og:description`, `og:image`, `og:url`）

### STEP 4: 構造化データ追加（15分）
1. `schema-jsonld.html` の `<script type="application/ld+json">` ブロックを
   各サイトのトップページ `<head>` 内に追加
2. Service schema → メニューページにも追加
3. 設置後 https://validator.schema.org/ で検証

### STEP 5: 施術者プロフィールページ作成（要情報提供）
1. `staff-profile-template.html` 内の【】部分を実際の情報に差し替え
2. 必要な情報:
   - 院長・施術者の名前
   - 保有資格（柔道整復師等）
   - 経歴・施術実績
   - 顔写真
   - メッセージ
3. `staff.html` としてサイトに追加
4. ナビゲーションにリンク追加
5. サイトマップにURL追加

---

## GEOスコア改善見込み

| 対策 | ReLUMI | Re肌 |
|------|--------|------|
| 現在のスコア | 58/100 | 71/100 |
| STEP1-4実装後 | 70/100 (+12) | 80/100 (+9) |
| STEP5まで完了 | 78/100 (+20) | 85/100 (+14) |
| ブログ充実後 | 85+/100 | 90+/100 |

---

## 次のフェーズ（ブログ・コンテンツ強化）

### ReLUMI 推奨ブログ記事
1. 「骨膜リリースとは？筋膜リリースとの違いを解説」（1,500語）
2. 「骨膜リリース vs 骨盤矯正 - どちらを選ぶべき？」（1,200語）
3. 「天王寺で整体を探している方へ - 失敗しないサロン選び」（1,000語）
4. 「自律神経の乱れと姿勢の関係」（1,200語）
5. 「小顔矯正は本当に効果がある？仕組みを解説」（1,000語）

### Re肌 推奨ブログ記事
1. 「ララピールとは？従来のピーリングとの違い」（1,500語）
2. 「エステに通っても肌が変わらない理由 - 体の内側からのアプローチ」（1,200語）
3. 「肌質改善に整体が効く理由 - 腸と肌の関係」（1,200語）
4. 「敏感肌でもできるピーリング - Re肌の3STEPメソッド」（1,000語）
5. 「天王寺の肌質改善サロン比較 - Re肌が選ばれる理由」（1,000語）
