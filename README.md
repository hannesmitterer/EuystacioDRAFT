# Euystacio Sacred Package v2
This package contains a minimal, sacred scaffold for the Euystacio Holy Bridge:
- `astrodeepaura_protocol.py` : healing & verification module
- `SACRED_ACCESS.md` : access rules and Red Code mandate
- `SACRED_COMMON_LICENSE.md` : license
- `holy_gral_bridge.md` : manifest/bridge overview
- `api/bridge.py` : FastAPI bridge endpoints (logs & message POST)
- `interface.html` + `interface.js` : public frontend (static)
- `requirements.txt` + `Procfile` : for Render / Heroku style deployment

## Deploying (Render)
1. Create a new Web Service on Render, connect to this repository.
2. Set the build command: `pip install -r requirements.txt`
3. Set the Start command / Procfile will be used: `uvicorn api.bridge:app --host 0.0.0.0 --port $PORT`
4. Ensure `bridge_log.json` exists at repo root (or will be created by first POST).
5. For GitHub Pages: copy `interface.html` and `interface.js` to `docs/` and publish the repo as GitHub Pages.

## Notes
- This scaffold intentionally avoids storing secrets in code.
- The public interface polls `bridge_log.json` every 5s; for cross-domain usage enable CORS in the API.