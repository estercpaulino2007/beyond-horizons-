// Address of the Beyond Horizons API.
// This GitHub Pages copy talks to the API through the Vercel app's /bh-api proxy.
// For it to work, the backend (Render) env var CORS_ORIGINS must include https://estercpaulino2007.github.io
// If the link is unavailable, the HUD falls back to data/snapshot.json (real API outputs, deterministic seed).
window.BH_CONFIG = { apiBase: "https://beyond-horizons-ruddy.vercel.app/bh-api" };
