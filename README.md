# Beyond Horizons — 3D Health HUD

*Beyond data. Toward safer human exploration.*

A holographic mission-control console for astronaut health monitoring, built for the **NASA Space Apps Challenge 2026** challenge *"Create Health Monitoring Software for Astronauts on Space Missions"*. It is the 3D front end of the **Beyond Horizons** platform: an explainable crew digital twin that monitors vital signs, the habitat environment and long-term spaceflight risks, and explains every result with its evidence.

- **Live HUD:** https://estercpaulino2007.github.io/beyond-horizons-/
- **Full platform (Next.js + FastAPI):** https://beyond-horizons-ruddy.vercel.app/ — the HUD is also available there under **3D Health HUD**

> **Disclaimer.** Beyond Horizons is an astronaut health-monitoring and mission-simulation platform (research prototype). Mission readings and crew profiles are synthetic or simulated and are labelled **SIMULATED** / **SYNTHETIC** everywhere in the interface. NASA standards, measurements and datasets set the limits, rates and evidence behind them. It does not provide medical advice and does not replace a flight surgeon.

---

## What it does

### 1. Real-time health monitoring (Overview)
- **Vital signs** with live waveforms: heart rate (ECG trace), SpO₂ (pleth), core temperature, blood pressure and respiratory rate. Each reading turns amber (*watch*) or red (*alert*) when it leaves its reference range, with the trend arrow of the last seconds.
- **Habitat environment**: O₂, CO₂ (in mmHg, against the NASA-STD-3001 limit of 3 mmHg), cabin pressure, cabin temperature (18–27 °C limit) and radiation dose rate (mSv/day, against the ISS baseline).
- **Systems status**: life support, thermal control, radiation shielding and communication.
- **Body scan, neural activity, genetic overview, mission clock and AI insights**, all updating together.

### 2. Astronaut mode and Scan mode
- **Astronaut mode** shows the crew member in a normal suit.
- **Scan mode** turns the suit into a translucent hologram; a scan line sweeps from feet to head and reveals the skeleton, arteries and veins, lungs, heart (beating at the current heart rate), abdominal organs and brain.
- Body systems on *watch* or *alert* glow amber or red, pulse, and are labelled on the model (LUNGS, HEART, BRAIN…), while healthy organs dim so the problem stands out.
- Drag to rotate, scroll to zoom, right-drag to move, double-click (or **RESET VIEW**) to reset.

### 3. Health scenarios — built-in and your own
Built-in scenarios (keys `1`–`7`), each tied to NASA references:

| # | Scenario | What changes |
|---|----------|--------------|
| 1 | Nominal | Baseline LEO operations |
| 2 | Hypoxia — cabin O₂ drop | SpO₂ falls, lungs alert, life support fault |
| 3 | Cardiac arrhythmia | Irregular, fast ECG; heart alert |
| 4 | Solar particle event | Dose rate ~33× ISS baseline; bone marrow / GI watch; genetics watch |
| 5 | Heat stress | Core temperature and heart rate rise; thermal control fault |
| 6 | Bone density loss | −1.2 %/month trend (NASA: 1–1.5 %/month) |
| 7 | SANS — headward fluid shift | Neuro-ocular changes flagged |

**Create your own scenarios** (SCENARIOS tab → **+ CREATE SCENARIO**): set name, description, every vital sign, irregular rhythm, habitat O₂ / CO₂ / temperature / radiation, and each body and habitat system (or leave it on *Auto* to derive it from the readings). Optional custom AI insight and recommended actions. Your scenarios are saved, can be edited or deleted, and run a full body scan on the hologram.

### 4. My Vitals — your own readings and history
- Enter heart rate, rhythm, SpO₂, temperature, respiratory rate, sleep, sleep quality, stress, activity, hydration and body mass.
- The Beyond Horizons API evaluates every metric against general adult resting ranges and returns status, insights and suggested actions (if the API is unreachable, the same rules run in the browser).
- **Show on the hologram**: your reading becomes the *My vitals* scenario and the 3D body scan shows your own flagged systems.
- **History**: every saved reading is listed with date and status, can be re-displayed on the hologram or deleted, and is charted as a personal trend (heart rate, SpO₂, temperature, respiratory rate, sleep).
- **Body scan log**: every completed scan is recorded automatically with scenario, status and vitals.
- **Export / Import** the whole history as JSON to move it between devices or between this site and the full platform.

### 5. Crew Risk — Ares-180 simulation (customizable)
Runs the platform's simulation engine for the four crew members of the 180-day Ares-180 Mars-transit mission, day by day.
- **Edit the crew**: rename each member and set their six traits — radiation sensitivity, bone-loss susceptibility, sleep resilience, muscle recovery, cognitive resilience, inflammatory baseline (sent to the engine as `crew_overrides`). Your crew is saved and is also used by the Genetics simulator.
- **Mission**: destination, duration, communication delay.
- **Events**: switch on/off the scripted events — solar particle event (day 143), exercise-module failure (days 143–154), 22-minute communication delay, critical EVA (day 145).
- **Countermeasures**: enhanced exercise, radiation shielding, sleep & cognitive-load protocol.
- **Results**: daily operational risk per crew member, vulnerability windows, days per risk band, each person's peak risk and top drivers. Custom crew/events/mission need the live data link; offline, the stored default run is shown and the screen says so.

### 6. EVA Decision and Debate Chamber
An **EVA** (extravehicular activity) is a spacewalk — the most demanding task of a mission. In Ares-180 a critical EVA is planned for **day 145**, two days after a **solar storm (day 143)** and while the **exercise module is broken (days 143–154)**, so the assigned astronaut is tired, sleep-deprived and carries extra radiation. Three options are simulated:
- **A · Maintain** — Atlas does the EVA on day 145 as planned.
- **B · Delay** — same astronaut, 10 days later (day 155).
- **C · Reassign + recovery** — Nova does it on day 145, with a sleep-recovery protocol.

For each option the tab shows the chance the EVA is completed and the peak operational, cognitive and musculoskeletal risk. The **Debate Chamber** then shows four roles, each with one fixed formula: the mission commander (get it done safely), the flight surgeon (crew health only), the science officer (usable result, low uncertainty) and a skeptic who never votes but points out what the winner does worse.

### 7. Research — evidence graph and Research Navigator
An interactive causal graph (radiation, microgravity, sleep debt, cognitive load, bone, muscle, operational error…) where every link is coloured by evidence level — supported evidence, data-supported association, exploratory hypothesis, synthetic parameter. Click a node or link to see its source and limitations. The Research Navigator ranks the next experiments by `mission_impact × uncertainty × information_gain / cost`.

### 8. Genetics — radiation → gene alteration simulator
- **Choose who and what**: the astronaut (you, or one of the Ares-180 crew with their radiation sensitivity), the situation (ISS, a one-year ISS mission as in the NASA Twins Study, Mars transit or round trip), days in space, dose from previous missions, a **solar particle event** with its dose, and a **vitamin A (retinoid) diet** countermeasure.
- **Career dose vs. NASA's limit**: previous + this mission compared with NASA-STD-3001's 600 mSv career limit (same for all ages and sexes, 3% mean risk of cancer death) and the 250 mSv per-solar-event limit.
- **HOW IT'S CALCULATED** explains every step and marks which parts are measured, calculated, published data or display rules.
- The result also appears on the Overview (Genetic overview panel and AI insights) and drives the MISSION tab.
- **Radiation dose** from NASA measurements (ISS 0.2–0.5 mSv/day; Curiosity RAD 1.8 mSv/day in deep-space cruise), its dose band, the added fatal-cancer risk (≈5% per Sv, NASA/SwRI) and the crew members most affected.
- **Which genes change and by how much**: the published gene-expression table of NASA grant NAG9-1024 (Burns et al. 2002) — control vs. 9 Gy vs. 18 Gy, and how vitamin A partly reverses the change — with each gene's role.
- **Consequences — what NASA found**: cancer risk, DNA damage and genome instability (Twins Study, OSDR OSD-720), telomeres, gene-expression drift over time, inflammation and immune genes, and countermeasures. The ones that apply light up.
- **Genomic markers** (telomeres, DNA damage response, expression drift, immune, oxidative stress, mitochondria) follow both the health scenario and the simulator; markers in watch/alert light up on the 3D DNA, and clicking one explains it.

### 9. Mission control and habitat
Pick the mission profile (shared with the genetics simulator) and move through it day by day or press play: the ship moves on the 3D Earth–Mars (or ISS orbit) view, and the panel shows the phase, dose so far, career total against NASA's limit and the timeline of events (including the Ares-180 solar storm and critical EVA). Plus an explorable **ISS interior** (photogrammetry): drag to look around, scroll to move through the module, double-click for the automatic tour.

### 10. Beyond AI
An embedded assistant (**ASK BEYOND AI**, or **Ask AI** in the AI Insights panel) that answers questions about the crew, the current scan, your saved vitals and the evidence behind each risk, grounded only in the platform's own data. The conversation is saved in the browser.

### 11. Customization
- Click **MISSION** or **ASTRONAUT** in the header to set the astronaut's name, mission ID, mission phase, crew size and mission elapsed time.
- Custom scenarios, vitals history, scan log and chat are all saved locally in the browser.

---

## NASA data and references

Every limit, rate and dataset has a clickable green source tag, and the **NASA SOURCES** button lists them all with links and where each one is used:

| Area | Reference |
|------|-----------|
| CO₂ limit (≤ 3 mmHg) | NASA-STD-3001 Vol. 2 Rev D [V2 6004], OCHMO-TB-004 |
| Cabin temperature / humidity | NASA-STD-3001 Vol. 2 Rev D [V2 6012], OCHMO-TB-002 (ECLSS) |
| O₂ and total pressure | NASA-STD-3001 Vol. 2 Rev D [V2 6003, V2 6006], OCHMO-TB-003 |
| ISS radiation dose (0.2–0.5 mSv/day) | NASA NTRS 20250006168 |
| Deep-space dose (1.8 mSv/day in cruise) | Zeitlin et al. 2013, Science — Curiosity MSL RAD |
| Bone loss (1–1.5 %/month) | NASA HRP Bone risk / Evidence Report; Lang et al. 2004 (ISS QCT) |
| Muscle loss | NASA HRP Muscle risk |
| SANS | NASA HRP Evidence Report: Spaceflight Associated Neuro-ocular Syndrome |
| Cardiac rhythm | NASA HRP Evidence Report (with the National Academies 2018 caveat) |
| Genomics | NASA Twins Study (Garrett-Bakelman et al. 2019, Science); NASA OSDR OSD-720 / GLDS-699; NAG9-1024; NASA LSDA osteoblast data; GeneLab (Ray et al. 2019) |
| Vital-sign ranges | AHA / CDC general adult references (labelled as non-NASA) |

Full provenance notes: `docs/data-sources.md` in the main repository.

---

## How to use

| Action | How |
|--------|-----|
| Toggle Astronaut / Scan mode | Buttons above the hologram, or `M` |
| Change scenario | Dropdown above the hologram, SCENARIOS tab, or keys `1`–`9` |
| Rotate / zoom / move the model | Drag / scroll / right-drag; double-click to reset |
| Explore 3D views (ISS, lungs, DNA, transit) | Drag and scroll on the view |
| Open a source | Click any green tag, or **NASA SOURCES** |
| Customize names | Click MISSION or ASTRONAUT in the header |
| Direct links | `?mode=scan&s=2&tab=biometrics` |

The **DATA LINK** indicator shows the connection to the Beyond Horizons API: **ONLINE** (live), or **SNAPSHOT** — the tabs then use `data/snapshot.json`, a stored copy of the API's real outputs for the deterministic Ares-180 seed, so everything still works if the backend is asleep. Live-only features (custom crew-simulation parameters, Beyond AI) say so when the link is offline.

---

## Configuration
- `config.js` → `apiBase`: address of the Beyond Horizons API. This copy uses the Vercel app's `/bh-api` proxy.
- The backend's `CORS_ORIGINS` must include `https://estercpaulino2007.github.io` for the live link to work from GitHub Pages.

## Run locally
```bash
python -m http.server 8080      # then open http://localhost:8080
```
Opening `index.html` directly from disk will not load the 3D models (browsers block `file://` requests).

## Tech
- Static site, no build step: `index.html`, `style.css`, `app.js` (HUD, 3D scene, scenarios, customization), `research.js` (API-linked tabs, history, AI), `sources.js` (NASA references), `config.js`.
- three.js (vendored) with bloom post-processing; a custom fresnel/scan-line hologram shader that works on the skinned astronaut model.
- 3D models compressed with gltf-transform (meshopt geometry + WebP textures; spec-gloss converted to metal-rough): ~510 MB of source models → ~25 MB.
- Anatomy (organs and vessels) aligned inside the suit and attached to the skeleton so it follows the astronaut's motion.

## Limitations
- Mission readings and crew profiles are simulated/synthetic; vital-sign ranges are general adult resting references, not spaceflight-specific thresholds.
- History is stored per browser (localStorage); there is no server-side account or database yet.
- Several datasets come from ground-based or animal studies (labelled as such in the SOURCES panel).

## Credits
Built by the Beyond Horizons team for the NASA Space Apps Challenge 2026. 3D models (astronaut, anatomy, brain, DNA, Earth, Mars, ISS interior photogrammetry, starfield) are used under their respective licences — add each model's author and licence here before submitting.

## License
MIT.
