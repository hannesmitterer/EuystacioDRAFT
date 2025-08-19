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

## Dignity Gateway - Public Portal Access

The `dignity_gateway.html` file provides a public Dignity Gateway portal with:
- Engine Status Dashboard (Frontend, Backend, TensorFlow)  
- Rhythm Oath login/acknowledgment for tutor/visitor roles
- Pulse submission and live log display
- Integration ready for backend kernel and harmony feedback

### GitHub Pages Deployment for Public Access

To make the Dignity Gateway publicly accessible via GitHub Pages:

1. **Merge this PR** to add `dignity_gateway.html` to the main branch
2. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Click Save
3. **Access the gateway** at: `https://hannesmitterer.github.io/EuystacioDRAFT/dignity_gateway.html`

The gateway will be immediately available as a public portal once GitHub Pages is enabled.

## Notes
- This scaffold intentionally avoids storing secrets in code.
- The public interface polls `bridge_log.json` every 5s; for cross-domain usage enable CORS in the API.
- The Dignity Gateway works standalone and gracefully handles backend unavailability.