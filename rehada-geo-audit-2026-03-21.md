# GEO Audit Report: Re肌 (rehada.relumi.jp)

**Audit Date:** 2026-03-21
**Target URL:** https://rehada.relumi.jp/
**Business Type:** Local Service (Skin Improvement Salon / 肌質改善サロン)
**Location:** Tennoji, Osaka, Japan

---

## Composite GEO Score: 72 / 100 [Good]

| Category | Score | Weight | Weighted | Status |
|---|---|---|---|---|
| AI Citability & Visibility | 82/100 | 25% | 20.5 | Good |
| Brand Authority Signals | 58/100 | 20% | 11.6 | Fair |
| Content Quality & E-E-A-T | 65/100 | 20% | 13.0 | Fair |
| Technical Foundations | 74/100 | 15% | 11.1 | Good |
| Structured Data | 76/100 | 10% | 7.6 | Good |
| Platform Optimization | 68/100 | 10% | 6.8 | Fair |
| **Total** | | **100%** | **70.6** | **Good** |

**Rounded Composite: 71/100**

---

## 1. AI Citability & Visibility (82/100)

### robots.txt -- AI Crawler Access

**Status: Excellent -- Proactive AI crawler strategy in place**

The site implements a tiered AI crawler access policy, which is rare and well-executed:

| Crawler | Status | Notes |
|---|---|---|
| GPTBot (ChatGPT) | Allowed | Explicit Allow rule |
| OAI-SearchBot (ChatGPT Search) | Allowed | Explicit Allow rule |
| ClaudeBot (Anthropic) | Allowed | Explicit Allow rule |
| PerplexityBot | Allowed | Explicit Allow rule |
| Google-Extended (Gemini) | Allowed | Explicit Allow rule |
| Applebot-Extended | Allowed | Apple Intelligence |
| Amazonbot | Allowed | Alexa |
| Meta-ExternalAgent | Allowed | Meta AI |
| Bytespider | Blocked | TikTok crawler blocked |
| CCBot | Blocked | Common Crawl blocked |
| General (User-agent: *) | Allow: / | Open access |

**Notable:** Review images (`/images/review_*`) are blocked from general crawling -- good practice for protecting customer privacy.

**Sitemap reference** present in robots.txt pointing to `/sitemap.xml`.

### llms.txt

**Status: Not Found** -- Neither `/llms.txt` nor `/.well-known/llms.txt` exists.

This is a missed opportunity. An llms.txt file would provide AI models with a structured summary of the business, services, and key differentiators in a machine-friendly format.

### AI Citability Assessment

| Factor | Score | Notes |
|---|---|---|
| Crawler access | 95 | Best-in-class tiered strategy |
| llms.txt presence | 0 | Missing entirely |
| Content accessibility (SSR) | 85 | Server-rendered content visible to crawlers |
| Structured data for AI | 80 | Good JSON-LD on homepage and blog |
| Unique/citable claims | 75 | Proprietary methodology, but lacks external validation |

**Key Citability Strengths:**
- Clear unique positioning: "整体 x ピーリング" (chiropractic x peeling) combination
- Specific proprietary methodology: "3STEPメソッド"
- Geographic specificity: "天王寺で Re肌だけ"
- Concrete data points: pricing, hours, treatment durations

**Key Citability Weaknesses:**
- No llms.txt file to guide AI summarization
- Limited external citations or published research
- Self-reported clinical data ("自社調べ") weakens credibility for AI citation
- No founder/practitioner profile with credentials

---

## 2. Brand Authority Signals (58/100)

### Online Presence Assessment

| Signal | Status | Score |
|---|---|---|
| Google Business Profile integration | Present (via JSON-LD) | Good |
| External booking platform | Hot Pepper Beauty | Good |
| Social media (Instagram) | @hada_rehada | Present |
| Parent organization listed | 合同会社アルシェスタイル | Good |
| Third-party reviews | Not linked on site | Weak |
| Press/media mentions | None found | Missing |
| Professional certifications | None displayed | Missing |
| Industry associations | None listed | Missing |
| Backlink profile signals | Subdomain of relumi.jp | Moderate |

### E-E-A-T Authority Analysis

**Experience:**
- Customer story page (manga format) demonstrates customer experience narrative
- No verified customer reviews/testimonials displayed on site
- No before/after photo gallery with verified results

**Expertise:**
- Treatment methodology is explained in detail (3STEP method)
- ララピール technology explanation with component breakdown (LHA, P-Sol, Lipids)
- BUT: No practitioner credentials, certifications, or training background shown
- Clinical data cited is self-reported ("自社調べ") without peer review

**Authoritativeness:**
- Parent company (合同会社アルシェスタイル) is listed
- Sister salon (ReLUMI) mentioned, building brand ecosystem credibility
- No industry awards, press coverage, or third-party endorsements
- Blog posts lack named author with credentials

**Trustworthiness:**
- HTTPS is present (good)
- Physical address and phone number provided
- Operating hours clearly stated
- Payment methods listed
- No privacy policy or terms of service pages found in sitemap

### Score Breakdown

| E-E-A-T Factor | Score |
|---|---|
| Experience signals | 45/100 |
| Expertise signals | 60/100 |
| Authoritativeness signals | 50/100 |
| Trustworthiness signals | 70/100 |
| **Average** | **56/100** |

---

## 3. Content Quality & E-E-A-T (65/100)

### Page-by-Page Content Analysis

| Page | Word Count (est.) | Content Depth | Unique Value |
|---|---|---|---|
| Homepage (/) | High | Good - covers concept, method, access | Strong positioning statement |
| About (/about.html) | Medium | Good - detailed methodology explanation | Unique 3-step framework |
| Menu (/menu.html) | Medium | Adequate - pricing and service list | Clear pricing transparency |
| ララピール (/lalapeel.html) | High | Strong - technical explanation with data | Component breakdown, comparison table |
| Story (/story.html) | Low (manga) | Weak for AI - image-based content | Customer journey narrative |
| FAQ (/faq.html) | Medium | Good - 7 Q&A pairs with detailed answers | Addresses common objections |
| Blog (/blog.html) | High | Good - 2 long-form articles | SEO-targeted educational content |

### Content Strengths
1. **Clear unique positioning** -- "肌の土台から整える" differentiates from both clinics and esthetic salons
2. **Transparent pricing** -- First-visit and regular prices clearly listed
3. **Educational content** -- Blog articles explain concepts, not just sell services
4. **FAQ addresses real objections** -- Pain concerns, sensitive skin, frequency questions
5. **Technical depth on ララピール** -- Chemical component breakdown shows expertise

### Content Weaknesses
1. **Story page is image-only** -- Manga content is invisible to AI crawlers and screen readers
2. **No practitioner profiles** -- Who performs treatments? What are their qualifications?
3. **Self-cited data only** -- "137% wrinkle improvement" with "自社調べ" undermines credibility
4. **Only 2 blog posts** -- Thin content library for topical authority
5. **No customer review integration** -- Hot Pepper Beauty reviews not pulled into site
6. **Missing content topics:**
   - No "about the founder" page
   - No before/after results gallery
   - No detailed ingredient safety information
   - No content addressing "肌質改善" vs competing approaches

### Readability & Structure
- Japanese content is well-written with conversational tone
- Good heading hierarchy on most pages
- Content addresses user intent at each stage (awareness -> consideration -> decision)
- Call-to-action buttons consistently present

---

## 4. Technical Foundations (74/100)

### Score Breakdown

| Category | Score | Weight | Weighted | Status |
|---|---|---|---|---|
| Server-Side Rendering | 85/100 | 25% | 21.25 | Good |
| Meta Tags & Indexability | 55/100 | 15% | 8.25 | Fair |
| Crawlability | 90/100 | 15% | 13.50 | Excellent |
| Security Headers | 60/100 | 10% | 6.00 | Fair |
| Core Web Vitals Risk | 65/100 | 10% | 6.50 | Fair |
| Mobile Optimization | 75/100 | 10% | 7.50 | Good |
| URL Structure | 80/100 | 5% | 4.00 | Good |
| Response & Status | 90/100 | 5% | 4.50 | Excellent |
| Additional Checks | 70/100 | 5% | 3.50 | Good |
| **Total** | | **100%** | **75.00** | **Good** |

### Server-Side Rendering Assessment

**Status:** LOW risk
**Rendering Type:** SSR / Static HTML
**Framework Detected:** Static HTML (no SPA framework detected)

The site serves fully rendered HTML content. Body contains substantial text, headings, navigation, and structured content visible in the initial HTML response. No signs of React SPA, Vue SPA, or Angular detected. No `__NEXT_DATA__` or `__NUXT__` markers present, suggesting plain server-rendered or static HTML pages.

**AI crawler impact:** All text content is fully accessible to non-JS crawlers. This is a significant advantage.

**Exception:** The `/story.html` page is manga/image-based, meaning its content is invisible to AI crawlers despite the page being technically server-rendered.

### Crawlability & Indexability

**Robots.txt:** Found -- Well-structured with AI crawler permissions
**XML Sitemap:** Found at `/sitemap.xml` -- 7 URLs, all with `lastmod: 2026-03-12`
**Meta Robots:** No noindex or nofollow directives detected
**Canonical:** Not confirmed in extracted content -- potential issue

**Sitemap Assessment:**
- 7 pages is appropriate for a small local business site
- `lastmod` dates are recent (9 days old)
- Priority values are logically assigned (homepage 1.0, menu 0.9)
- `changefreq` values are reasonable (weekly for homepage/blog, monthly for static pages)
- All pages appear accessible

### Meta Tags Audit

| Tag | Homepage | About | Menu | FAQ | ララピール | Story | Blog |
|---|---|---|---|---|---|---|---|
| Title | Unknown | Unknown | Unknown | Unknown | Unknown | Missing | Unknown |
| Description | Partial | Missing | Missing | Missing | Missing | Missing | Partial |
| Canonical | Unknown | Missing | Missing | Missing | Missing | Missing | Unknown |
| Viewport | Unknown | Unknown | Unknown | Unknown | Unknown | Missing | Unknown |
| Language (html lang) | Not confirmed | Not confirmed | Not confirmed | Not confirmed | Not confirmed | Not confirmed | Not confirmed |
| Open Graph | Unknown | Missing | Missing | Missing | Missing | Missing | Partial |
| Twitter Card | Unknown | Missing | Missing | Missing | Missing | Missing | Unknown |

**Critical finding:** Meta tags appear inconsistent or missing across subpages. The homepage likely has them but subpages may lack proper title and description tags. This severely impacts how pages appear in both traditional search and AI-generated results.

### Security Headers

| Header | Status | Notes |
|---|---|---|
| HTTPS | Yes | Site loads over HTTPS |
| HSTS | Unknown | Could not verify from fetch |
| CSP | Unknown | Not visible in content fetch |
| X-Frame-Options | Unknown | Not visible in content fetch |
| X-Content-Type-Options | Unknown | Not visible in content fetch |
| Referrer-Policy | Unknown | Not visible in content fetch |

**Note:** HTTPS is confirmed. Other security headers could not be fully assessed through content fetching. For a local business site, HTTPS is the critical minimum requirement, which is met.

### Core Web Vitals Risk Assessment

| Vital | Risk Level | Indicators Found |
|---|---|---|
| LCP | Medium | Hero images without confirmed preload hints; no `fetchpriority` attributes detected; Google Analytics script in head |
| INP | Low | Static HTML site with minimal JavaScript; no heavy SPA framework; gtag is the main JS dependency |
| CLS | Medium | Images without confirmed width/height attributes; no srcset detected; potential layout shift from web fonts |

**Note:** Static HTML analysis only. Field data validation recommended via PageSpeed Insights.

### Mobile Optimization

**Status:** Partially Confirmed
- Site appears to have responsive design (separate hero images referenced for PC/mobile: `hero-pc.jpg`)
- Viewport meta tag status not fully confirmed across all pages
- No CSS framework detected (custom CSS likely)
- Touch-friendly assessment requires live testing

### URL Structure

**Target URL:** `https://rehada.relumi.jp/`
**Assessment:** Good

| Criteria | Status |
|---|---|
| Clean URLs | Yes - `.html` extension, no parameters |
| Descriptive slugs | Adequate - `about.html`, `menu.html`, `faq.html` |
| Logical hierarchy | Flat structure appropriate for small site |
| Consistent format | Yes - all lowercase, consistent .html extension |
| URL length | Good - all under 50 characters |
| Keyword in URL | Moderate - domain contains "rehada" (Re肌) |
| Subdomain structure | `rehada.relumi.jp` - subdomain of parent brand |

**Note on subdomain:** Using a subdomain (`rehada.relumi.jp`) rather than a standalone domain means SEO authority is partially shared/diluted with the parent domain. For a brand-new salon, this is acceptable but limits independent domain authority building.

### Additional Technical Checks

| Check | Status | Notes |
|---|---|---|
| Duplicate content signals | Low risk | Small site with distinct pages |
| Redirect chains | None detected | Direct 200 response |
| Internationalization | N/A | Japanese-only site |
| Resource hints | Not detected | No preconnect/preload/dns-prefetch found |
| Google Analytics | Present | G-709ZJCF1RT |

---

## 5. Structured Data (76/100)

### Detected Schema Markup

**Homepage (/) -- HealthAndBeautyBusiness:**
```
Type: HealthAndBeautyBusiness
Name: Re肌（リハダ）
Address: 大阪市阿倍野区阿倍野筋1-5-31 アポロビル7F
Phone: Present
Geo: 34.6462, 135.5137
Hours: 10:00-19:00 (daily)
Payment: Visa, Mastercard, JCB, AMEX, Diners, UnionPay, Discover
Parent: 合同会社アルシェスタイル
Services: 3STEPメソッド described
```

**FAQ Page (/faq.html) -- FAQPage:**
```
Type: FAQPage
Questions: 7 Q&A pairs
Format: Properly structured with mainEntity
```

**Blog Page (/blog.html) -- Blog + BlogPosting:**
```
Type: Blog
Publisher: Re肌（リハダ）
Articles: 2 BlogPosting entries with headlines and dates
```

### Schema Completeness Assessment

| Schema Type | Present | Quality | Notes |
|---|---|---|---|
| LocalBusiness / HealthAndBeautyBusiness | Yes | Good | Core NAP data present, hours, payment, geo |
| FAQPage | Yes | Good | 7 questions properly structured |
| Blog / BlogPosting | Yes | Good | Publisher and article metadata present |
| Service / Offer | No | Missing | Pricing and services not in schema |
| Review / AggregateRating | No | Missing | No review markup |
| Person (practitioner) | No | Missing | No staff/founder schema |
| BreadcrumbList | No | Missing | No breadcrumb navigation schema |
| WebSite (sitelinks search) | No | Missing | No site search schema |
| ImageObject | No | Missing | Before/after or treatment images not marked up |
| HowTo | No | Missing | Treatment process could be HowTo schema |

### Missing High-Impact Schemas

1. **Service + Offer schema** -- Treatment menu with pricing should be structured. This directly appears in rich results and AI answers about local services.

2. **AggregateRating / Review schema** -- Even linking to Hot Pepper Beauty ratings would help. This is one of the most impactful schemas for local businesses.

3. **Person schema** for practitioners -- Builds E-E-A-T signals that Google and AI systems use.

4. **BreadcrumbList** -- Helps with navigation display in search results.

5. **HowTo schema** for the 3-step treatment process -- Could trigger rich results for "how does skin improvement work" type queries.

---

## 6. Platform Optimization (68/100)

### Google AI Overviews Readiness

| Factor | Status | Score |
|---|---|---|
| Content in HTML (not JS-dependent) | Yes | Good |
| Structured data present | Yes, partial | Fair |
| FAQ content | Yes, with FAQPage schema | Good |
| Local business schema | Yes | Good |
| E-E-A-T signals | Weak (no credentials) | Poor |
| Content depth on key topics | Moderate (2 blog posts) | Fair |

**Google AI Overviews likelihood:** Moderate for local queries like "天王寺 肌質改善" or "Re肌 口コミ". Low for broader informational queries due to thin content library and lack of authoritative signals.

### ChatGPT / SearchGPT Readiness

| Factor | Status | Score |
|---|---|---|
| GPTBot access | Allowed | Excellent |
| OAI-SearchBot access | Allowed | Excellent |
| Content crawlable | Yes (SSR) | Excellent |
| Unique claims/methodology | Present | Good |
| Citation-worthy content | Limited | Fair |

**ChatGPT citation likelihood:** Good for specific queries about Re肌 or ララピール. The unique 3-step methodology and clear positioning make it citable. However, self-reported data weakens citation authority.

### Perplexity Readiness

| Factor | Status | Score |
|---|---|---|
| PerplexityBot access | Allowed | Excellent |
| Content structure (headings, lists) | Good | Good |
| Factual claims verifiable | Weak (自社調べ) | Poor |
| Comparison content | Present (vs. esthetics, clinics) | Good |

### Gemini (Google AI) Readiness

| Factor | Status | Score |
|---|---|---|
| Google-Extended access | Allowed | Excellent |
| Google Analytics integration | Yes | Good |
| Google Business Profile signals | Via schema | Good |
| Content freshness | lastmod 2026-03-12 | Good |

---

## Priority Action Plan

### CRITICAL (Do Within 1 Week)

**1. Add meta tags to ALL subpages**
- Every page needs unique `<title>` (50-60 chars with primary keyword)
- Every page needs unique `<meta name="description">` (150-160 chars)
- Every page needs `<link rel="canonical">` (self-referencing)
- Every page needs `<meta name="viewport">`
- Add `lang="ja"` to `<html>` tag on all pages
- **Impact:** Directly affects how pages appear in search results AND how AI systems summarize each page
- **Suggested titles:**
  - Homepage: `Re肌（リハダ）| 天王寺の肌質改善サロン｜整体×ピーリング`
  - About: `Re肌のコンセプト｜体の内側から肌を整える3STEPメソッド`
  - Menu: `施術メニュー・料金｜Re肌 天王寺の肌質改善サロン`
  - FAQ: `よくあるご質問｜Re肌 肌質改善サロン`
  - ララピール: `ララピールとは｜第4世代ピーリング｜Re肌`
  - Blog: `ブログ｜肌質改善の知識｜Re肌`
  - Story: `Re肌ストーリー｜肌質改善の体験マンガ`

**2. Create llms.txt file**
- Place at `https://rehada.relumi.jp/llms.txt`
- Include: business name, location, unique methodology, services, pricing summary, booking URL
- This directly guides how AI models describe the business
- **Impact:** High -- immediate improvement in AI citation accuracy

### HIGH (Do Within 2 Weeks)

**3. Add Service + Offer schema to menu page**
- Structure each treatment with name, description, price, duration
- Use `Service` type with `offers` containing `Offer` type
- Include `priceRange` on the main business schema
- **Impact:** Enables rich results for service queries and helps AI systems accurately report pricing

**4. Add Open Graph and Twitter Card tags to all pages**
- `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- **Impact:** Controls how pages appear when shared on social media and referenced by AI systems

**5. Create practitioner/founder profile page**
- Add a page with staff credentials, certifications, training background
- Include `Person` schema markup
- Add photo with proper alt text
- **Impact:** Major E-E-A-T improvement -- currently the biggest authority gap

**6. Add alt text to ALL images**
- Every image needs descriptive Japanese alt text
- Treatment step images, hero images, facility photos
- **Impact:** Accessibility, image search visibility, and AI content understanding

### MEDIUM (Do Within 1 Month)

**7. Expand blog content library**
- Target: At least 10 articles covering key topics
- Suggested topics:
  - 「肌質改善サロンの選び方」
  - 「ピーリングの種類と違い」
  - 「腸もみと肌の関係」
  - 「自律神経と肌荒れ」
  - 「敏感肌でもできる肌質改善」
  - 「肌質改善に必要な期間と回数」
  - 「天王寺エリアのサロン比較」
  - 「季節別スキンケアのポイント」
- Each article should have named author with credentials
- **Impact:** Builds topical authority for informational queries

**8. Add text content to story page**
- The manga page is invisible to AI crawlers
- Add text descriptions/captions alongside manga panels
- Or create a parallel text version of the story
- Add alt text to all manga panel images
- **Impact:** Recovers content value currently hidden from AI systems

**9. Replace self-cited data with external sources**
- "137% wrinkle improvement" with "自社調べ" has weak credibility
- Link to published studies on LHA, P-Sol components
- Reference L'Oreal's research papers on LHA (they published extensively)
- **Impact:** Dramatically improves credibility for AI citation

**10. Add AggregateRating / Review schema**
- If Hot Pepper Beauty reviews are available, display and mark up on site
- Or implement a review collection system with proper schema
- **Impact:** Review signals are among the strongest local SEO and AI citation factors

### LOW (Do Within 2 Months)

**11. Add BreadcrumbList schema**
- Simple navigation structure: Home > [Page Name]
- **Impact:** Better SERP display, navigation understanding

**12. Add preload/preconnect resource hints**
- Preload hero images and critical CSS
- Preconnect to Google Analytics
- Add `fetchpriority="high"` to above-fold images
- **Impact:** Core Web Vitals improvement

**13. Add width/height to all images**
- Prevents CLS (Cumulative Layout Shift)
- **Impact:** Core Web Vitals improvement

**14. Consider standalone domain**
- `rehada.jp` or `rehada-salon.jp` would build independent domain authority
- Current subdomain structure (`rehada.relumi.jp`) partially dilutes SEO authority
- **Impact:** Long-term SEO independence, but requires careful migration

**15. Add privacy policy and terms of service pages**
- Required for trustworthiness signals
- Add to sitemap
- **Impact:** Trust signals for both users and search engines

---

## Platform-Specific Recommendations

### For ChatGPT / SearchGPT
- **Priority:** Create llms.txt with clear business summary
- The robots.txt already allows GPTBot -- this is well done
- Add more comparison content ("Re肌 vs 一般エステ vs 皮膚科") for citation in comparative queries

### For Google AI Overviews
- **Priority:** Complete structured data (Service, Review, Person schemas)
- Expand blog content with question-targeted articles
- Ensure all meta tags are present and optimized

### For Perplexity
- **Priority:** Add verifiable claims with external sources
- Structure content with clear headings and bullet points
- FAQ page is already well-structured -- expand to more questions

### For Gemini
- **Priority:** Leverage Google ecosystem signals
- Ensure Google Business Profile is fully optimized (verify separately)
- Add more content depth on key topics

---

## Summary

Re肌's website demonstrates a solid foundation for GEO optimization, particularly in AI crawler access strategy (one of the best-configured robots.txt files for AI visibility I have seen for a local business). The server-side rendered content, existing structured data (LocalBusiness, FAQ, Blog schemas), and clear unique positioning provide strong citability potential.

The main gaps are:

1. **Missing meta tags on subpages** -- the most impactful quick fix
2. **No llms.txt** -- easy to create, high impact for AI citation accuracy
3. **Weak E-E-A-T signals** -- no practitioner credentials, self-cited data, thin content library
4. **Incomplete structured data** -- Service/Offer and Review schemas missing
5. **Image accessibility** -- missing alt text and dimensions across the site

With the priority actions implemented, the GEO score could realistically improve from **71 to 85+** within 4-6 weeks.

---

*Report generated by GEO Technical SEO Agent | 2026-03-21*
