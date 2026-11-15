# Beyond Horizons — 3D Health HUD

Holographic astronaut health-monitoring console for the NASA Space Apps Challenge 2026 challenge
*"Create Health Monitoring Software for Astronauts on Space Missions"*.

**Live:** https://estercpaulino2007.github.io/beyond-horizons-/  
**Full platform (Next.js + FastAPI):** https://beyond-horizons-ruddy.vercel.app/ (the HUD is also there under **3D Health HUD**)

## What it does
- **Astronaut mode / Scan mode**: the suit turns into a translucent hologram and the body scan reveals skeleton, vessels, lungs, heart, abdominal organs and brain. Systems on *watch* or *alert* glow amber/red and are labelled on the model.
- **Health scenarios** (keys `1`–`8`): nominal, hypoxia, cardiac arrhythmia, solar particle event, heat stress, bone-density loss, SANS, and **My vitals** (your own latest reading).
- **Tabs**: Overview · Biometrics · My Vitals · Genetics · Scenarios · Crew Risk · EVA Decision · Research · Mission.
- **Linked to the Beyond Horizons API**: vitals evaluation, Ares-180 crew-risk simulation, EVA counterfactuals, Debate Chamber, evidence graph, Research Navigator, published gene-expression data and the Beyond AI assistant.
- **History**: vitals readings, body-scan log and AI conversation are saved in the browser (same format as the main platform), with JSON export/import.
- **NASA SOURCES**: every threshold, rate and dataset has a clickable source tag — NASA-STD-3001 (CO₂, atmosphere, ECLSS limits), ISS radiation dose rate, MSL RAD cruise dose, NASA HRP evidence reports (bone, muscle, SANS, cardiac rhythm), the NASA Twins Study, OSDR OSD-720 (GeneLab), grant NAG9-1024 and LSDA osteoblast data.

Mission readings on the HUD are simulated and labelled **SIMULATED**; the NASA references set the limits, rates and evidence behind them. Research prototype · not medical advice.

## Controls
Drag = rotate · scroll = zoom · right-drag = move · double-click = reset · `M` = toggle mode · `1`–`8` = scenario.
URL parameters: `?mode=scan&s=1&tab=biometrics`.

## Configuration
`config.js` → `apiBase`: address of the Beyond Horizons API (e.g. the Render URL). The backend's `CORS_ORIGINS` must include `https://estercpaulino2007.github.io`.

## Tech
Static site, no build step: `index.html`, `style.css`, `app.js`, `research.js`, `sources.js`, three.js (vendored) and glTF models compressed with gltf-transform (meshopt + WebP). Run locally with `python -m http.server` (opening the file directly will not load the 3D models).
