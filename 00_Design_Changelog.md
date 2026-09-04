# Design Changelog · 設計修改紀錄

Records changes to the design guideline and to visual / structural design decisions for `Website/`. Copy edits, new posts and bug fixes are not logged here (see `00_Changelog.md` for repository-structure changes). Newest first. Each entry: date · version · what changed · why · which guideline section it touches.
記錄設計規範與視覺／結構層級的設計決定變動。文案修改、新增文章、bug 修正不記；repo 結構變動記在 `00_Changelog.md`。最新在上。每筆：日期 · 版本 · 改了什麼 · 為什麼 · 影響規範哪一節。

---

## 2026-09-02 · v1.0 — Guideline established

**What** — Created `00_Design_Guideline.md` from the redesign report: positioning, content rules, information architecture, colour tokens with measured contrast, typography (Klee One / Hanken Grotesk / IBM Plex Mono), Editorial layout and component rules, Astro conventions, pre-change checklist.
**Why** — The previous site had no design rules beyond the colour palette in `personal-website-style`; its positioning (Web3) had drifted from Claire's direction and its structure was a CV rather than a portfolio. The rebuild needed a single source of truth that outlives this one project and can be reused for clairedaily.com.
**Decisions recorded** — neutral Data Engineer positioning; four project pages (build-monitoring featured, bios-firmware, time-series-thesis, uniswap-v3-volume) with a shared template; no Skills section; no photo; no code published; themes follow the system; light-mode `--secondary` never carries text (2.61:1); stack Astro on Cloudflare Pages.
**Touches** — all sections (initial version).
**Reference** — design report artifact (2026-09-02); demos: type pairings, layout directions, project page.

**改了什麼** — 依重建設計報告建立 `00_Design_Guideline.md`：定位、內容規則、資訊架構、色彩 token 與對比度實測、字體、Editorial 版面與元件規則、Astro 慣例、改動前檢查清單。
**為什麼** — 舊站除了 `personal-website-style` 的色票外沒有設計規則；定位（Web3）已偏離方向，結構是履歷而非作品集。重建需要一份可延續、可複製給 clairedaily.com 的 source of truth。
**記錄的決定** — 中性 Data Engineer 定位；四個專案頁共用模板；沒有 Skills 區；不放照片；不公開 code；雙模式跟系統；淺色模式 `--secondary` 不當文字；技術棧 Astro + Cloudflare Pages。
**影響** — 全部章節（初版）。

### Pending in v1.0 · 待定
- Canonical figures for the monitoring project: machines **15 vs 20**, noise filtered **~70% vs ~85%** — to be fixed by Claire before project copy is written, then recorded here.
  監控專案正式數字待 Claire 定版後記錄於此。
- Nav `About` anchor: keep or drop, decided during build.
