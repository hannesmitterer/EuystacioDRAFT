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

The `dignity_gateway.html` file provides a fully functional public Dignity Gateway portal with:
- **Engine Status Dashboard**: Real-time monitoring of Frontend, Backend, and TensorFlow systems
- **Rhythm Oath Authentication**: Role-based access for visitors and tutors with credential validation
- **Pulse Submission System**: Event logging with sentiment analysis and user tracking
- **Live Log Display**: Real-time updates from `pulse_log.json` with fallback to `bridge_log.json`
- **Backend Integration**: Ready for `/health` and `/pulse` endpoints with harmony feedback
- **Graceful Degradation**: Works standalone when backend is unavailable

### GitHub Pages Deployment for Public Access

To make the Dignity Gateway publicly accessible via GitHub Pages:

1. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Click Save
2. **Access the gateway** at: `https://hannesmitterer.github.io/EuystacioDRAFT/dignity_gateway.html`

The gateway is immediately ready for public access once GitHub Pages is enabled.

### Tutor Credentials (Demo)
- `sacred_guide` / `rhythm528`
- `harmony_keeper` / `pulse432`  
- `wisdom_bearer` / `frequency741`

## Notes
- This scaffold intentionally avoids storing secrets in code.
- The public interface polls `bridge_log.json` every 5s; for cross-domain usage enable CORS in the API.
- The Dignity Gateway works standalone and gracefully handles backend unavailability.