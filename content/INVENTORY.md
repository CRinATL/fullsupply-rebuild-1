# Full Supply — Content Extraction Inventory (Phase 1)

Source: read-only wget mirror at `/home/charles/code_projects/fullsupply-web-mirror`.
Extracted content lives in `content/*.md`; assets copied to `src/assets/img/` (and `src/assets/docs/` for PDFs).

## Page manifest

| Page | Source mirror path | Markdown | Dynamic features |
|------|--------------------|----------|------------------|
| Home | `index.html` | `content/home.md` | Newsletter sign-up form (Name/Email/reCAPTCHA); "Schedule a Call" -> 10to8; event registration CTA |
| About | `about/index.html` | `content/about.md` | Statement of Faith PDF download; "Schedule a Call" -> 10to8 |
| NOWA | `nowa/index.html` | `content/nowa.md` | PayPal Donate (btn ZAW63DGUPU27G); Fusion budget charts (not captured as data) |
| NOWA Virtual 5k Walk & Fun Run | `nowa-5k-walk-run/index.html` | `content/nowa-5k-walk-run.md` | PayPal Donate (btn YM6KWR6J5EM2L); RunSignup registration; sponsor logos; Sponsor packet PDF; 10to8 call |
| Global Missions | `global-missions/index.html` | `content/global-missions.md` | PayPal Donate (btn 6SL49EHP9KB9S); FAQ accordion |
| One Minute Mentoring | `one-minute-mentoring/index.html` | `content/one-minute-mentoring.md` | Featured YouTube embed (VQViIwf4Sp8); live YouTube feed; newsletter sign-up form |
| Ways to Give | `ways-to-give/index.html` | `content/ways-to-give.md` | Tabbed giving methods; PayPal Donate (6SL49EHP9KB9S); tel link; AmazonSmile (defunct) |
| Partner With Us | `partner-with-us/index.html` | `content/partner-with-us.md` | PayPal Donate (6SL49EHP9KB9S); FAQ accordion |
| VLOG | `vlog/index.html` | `content/vlog.md` | Live YouTube feed (channel UC81odK7ATGoVkg5eTbyRUAg); newsletter sign-up form |
| Team | `team/index.html` | `content/team.md` | None (static bios) |
| Salvation Secured | `salvation-secured/index.html` | `content/salvation-secured.md` | YouTube embed (VQViIwf4Sp8); shared feed + sign-up form |
| Christ's Imminent Return | `christs-imminent-return/index.html` | `content/christs-imminent-return.md` | YouTube embed (al6ZXU-Mcm0); shared feed + sign-up form |

### Equivalent `index.html@p=N.html` source files (same content, query-string URLs)
Home=index.html · About=p=6 · Team=p=3238 · Partner=p=3421 · NOWA=p=3451 · Global Missions=p=4124 · VLOG=p=1247 · Ways to Give=p=3415 · Salvation Secured=p=5291 · Christ's Imminent Return=p=5247. The directory-style pages above were used as the canonical source.

## Image / asset mapping (original -> clean filename)

All under `wp-content/uploads/` in the mirror; copied to `src/assets/img/` unless noted as `docs/`.

### Home
- 2020/11/Connie-Menser_100220_0119T-1024x682.jpg -> home-hero-connie.jpg
- 2020/11/jumpstory-download20201102-192017-1024x770.jpg -> cta-band-bg.jpg
- 2020/10/one-minute-mentoring-300x164.png -> one-minute-mentoring-logo.png
- 2020/10/one-minute-mentoring-1024x559.png -> one-minute-mentoring-banner.png
- 2025/01/iStock-72420416.jpg -> path-to-mentoring.jpg
- 2020/09/DSC_8293-e1599855613442.jpg -> testimonial-sharon-frost-quote.jpg
- 2020/11/full-supply-sharon-frost.jpg -> testimonial-sharon-frost.jpg
- 2021/01/ZahraBaileyFullPhoto-e1611109910667-400x400.jpg -> testimonial-zahra-bailey.jpg
- 2025/03/The-Mentors-Launchpad-1024x732.jpg -> mentors-launchpad.jpg

### About
- 2020/11/FS-Vision-Mission-Values-without-content-1-600x576.jpg -> about-vision-mission-values.jpg
- 2020/09/fullsupply-connie-menser-about-800x1079.jpg -> about-connie-menser.jpg
- 2021/01/Statement-of-Faith-2020.pdf -> docs/statement-of-faith-2020.pdf

### NOWA
- 2021/01/NOWA-final-285x300.png -> nowa-logo.png
- 2020/10/FullSupply-NOWA.jpeg -> nowa-hero.jpg
- 2020/10/fullsupply-nadia-natasha-arthur-nowa-rotated.jpg -> nowa-nadia-natasha-arthur.jpg
- 2020/10/fullsupply-nadia-nowa.jpg -> nowa-nadia.jpg
- 2020/09/fullsupply-usa-nowa.jpg -> nowa-usa.jpg
- 2020/09/fullsupply-india-nowa.jpg -> nowa-india.jpg
- 2020/09/fullsupply-kenya-nowa.jpg -> nowa-kenya.jpg
- 2020/09/fullsupply-russia-nowa.jpg -> nowa-russia.jpg
- 2020/09/fullsupply-melanie-nowa.jpg -> nowa-melanie.jpg
- 2020/09/fullsupply-nowa-kenyawoman.jpg -> nowa-kenya-woman.jpg

### NOWA 5K
- 2025/01/Fullsupply_Races.jpg -> nowa-5k-hero.jpg
- 2022/07/bigstock-Marathon-Running-Race-People-4445972062-1024x426.jpg -> nowa-5k-runners.jpg
- 2022/06/iStock-184603775.jpg -> nowa-5k-walk-run-band.jpg
- 2026/06/maxwell-house-logo.png -> sponsor-maxwell-house.png
- 2026/06/mellow-mushroom-logo.png -> sponsor-mellow-mushroom.png
- 2026/06/kfc-logo.png -> sponsor-kfc.png
- 2026/06/NOWA-5K-Sponsor-Levels-Benefits-Packet-2026.pdf -> docs/nowa-5k-sponsor-levels-benefits-packet-2026.pdf
- (also reuses nowa-logo.png, nowa-nadia-natasha-arthur.jpg, nowa-nadia.jpg, nowa-usa/india/kenya/russia.jpg, nowa-kenya-woman.jpg)

### Global Missions
- 2020/10/full-supply-global-missions.jpeg -> global-missions-hero.jpg
- 2020/09/fullsupply-globalmissions1-scaled.jpg -> global-missions-1.jpg
- 2020/09/fullsupply-globalmissions2-scaled.jpg -> global-missions-2.jpg
- 2020/05/full-supply-global-mission-russia-800x800-2.jpg -> global-missions-russia.jpg
- 2020/05/full-supply-global-mission-kenya2-800x800-1.jpg -> global-missions-kenya.jpg
- 2021/01/bigstock-Orchha-India-March-291835495.jpg -> global-missions-india.jpg

### VLOG / One Minute Mentoring / episode pages
- 2020/09/fullsupply-connie-menser-vlog.jpg -> vlog-hero-connie.jpg
- (reuse one-minute-mentoring-logo.png and one-minute-mentoring-banner.png)
- Video thumbnails are served live from YouTube; not mirrored locally.

### Ways to Give
- 2020/10/bigstock-time-concept-85936037.jpg -> ways-to-give-hero.jpg
- 2020/10/Full-Supply-give-1.jpeg -> ways-to-give-in-kind.jpg
- 2020/10/Full-Supply-Mail.jpeg -> ways-to-give-mail.jpg
- 2020/10/Full-Supply-Call.jpeg -> ways-to-give-phone.jpg
- 2020/10/Amazon-Smile3-1-300x300.png -> ways-to-give-amazon-smile.png
- 2020/12/hannah-busing-Zyx1bK9mqmA-unsplash-600x400.jpg -> ways-to-give-partner.jpg

### Partner With Us
- 2025/01/Fullsupply_Give.jpg -> partner-hero.jpg
- 2020/09/fullsupply-conniemenser-partnerpage-1024x363.jpg -> partner-connie-band.jpg

### Team
- 2025/01/Fullsupply_Team.jpg -> team-hero.jpg
- 2020/09/fullsupply-conniemenser-team-1.jpg -> team-connie-menser.jpg
- 2020/09/fullsupply-monicacoley-team-2020.jpg -> team-monica-coley.jpg
- 2020/11/full-supply-sharon-frost-400x400.jpg -> team-sharon-frost.jpg
- 2020/09/fullsupply-bonnie-team-1024x1011.jpg -> team-bonnie-pope.jpg

## Real site navigation (from original header menu `menu-full-supply-main-menu`)

- **HOME** -> /
- **ABOUT** -> /about/
  - THE TEAM -> /team/
  - PARTNER WITH US -> /partner-with-us/
  - WAYS TO GIVE -> /ways-to-give/
- **MENTORING** (no own page; parent is `#`)
  - BECOME A MENTOR -> (portfolio "mentor-training" — OUT OF SCOPE)
  - ROUND TABLE OF FAITH -> (p=183 "Roundtable of Faith" — OUT OF SCOPE)
  - GLOBAL MISSIONS -> /global-missions/
  - INVITE CONNIE TO SPEAK -> (p=3496 "Speaking" — OUT OF SCOPE)
- **VLOG** -> /vlog/
  - One Minute Mentoring -> /one-minute-mentoring/
- **EVENTS** -> (events archive — OUT OF SCOPE)
  - The Mentor's Launchpad -> (p=5753 — OUT OF SCOPE)
  - NOWA Virtual 5k Walk & Fun Run -> /nowa-5k-walk-run/

### Footer / "Support Us" secondary menu
- PARTNER WITH US -> /partner-with-us/
- WAYS TO GIVE -> /ways-to-give/
- NOWA -> /nowa/

### "Let's Be Friends" social block
- YouTube: https://www.youtube.com/user/ConnieMenser/featured (and channel UC81odK7ATGoVkg5eTbyRUAg)

> NOTE: The standalone **NOWA** page (`/nowa/`) is reachable via the footer/support menu and the home page, but is NOT in the top header menu. Salvation Secured and Christ's Imminent Return are One Minute Mentoring episode pages, not in the main nav (reached from the VLOG/OMM video feed).

## Cross-cutting notes & ambiguities
- **Newsletter sign-up form** appears on Home, VLOG, One Minute Mentoring, and the two episode pages. Original used Gravity Forms with reCAPTCHA. Fields: Name (First + Last), Email. Spec mentions Formspree as a likely target — confirm provider with site owner. Marked `[FORM: ...]` inline.
- **PayPal Donate buttons** use distinct hosted_button_ids: general giving/global/partner/ways-to-give = `6SL49EHP9KB9S`; NOWA campaign = `ZAW63DGUPU27G`; NOWA 5K = `YM6KWR6J5EM2L`.
- **Scheduling link** "Schedule a Call" -> https://sfkakxvwfuajznbsmu.10to8.com/ (10to8 booking; verify still active).
- **YouTube feed** on VLOG/OMM pages is dynamic (YouTube Feed Pro plugin). Captured the 6 videos present in the mirror; a rebuild should either embed a live feed or hardcode a curated list.
- **Budget charts** on NOWA and NOWA 5K were Fusion chart graphics — no underlying numeric data exists in the HTML, only the surrounding copy and Income/Expenses headings.
- **AmazonSmile** (Ways to Give) was shut down by Amazon in 2023 — flag for removal/replacement.
- **Contact info**: P.O. Box 1773, Suwanee, GA 30024 · phone 470-552-2662 · connie@fullsupply.org (footer email was Cloudflare-obfuscated in source).
- **Out-of-scope pages encountered**: Roundtable of Faith (p=183), Speaking/Invite Connie (p=3496), The Mentor's Launchpad (p=5753), Mentor Training portfolio (p=924), events archives, `5283-2`, author archives, `no-one-walks-alone-nowa/` (older NOWA duplicate, p=5269).
