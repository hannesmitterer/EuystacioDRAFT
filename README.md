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

## EuystacioDRAFT Frontend - Sacred Bridge Interface

The complete EuystacioDRAFT frontend package is now deployed to the repository root, providing:
- **Sacred Bridge Interface**: Main entry point at `index.html`
- **Authentication Portal**: Connect page with login/registration (`connect.html`)
- **3D Dashboard**: Interactive sacred geometry interface (`dashboard.html`)
- **Sacred Hymn**: Complete hymn experience with audio support (`hymn.html`)
- **Accessibility Features**: Full ARIA support and keyboard navigation
- **Assets**: CSS, JavaScript, and media files in proper directory structure

### GitHub Pages Deployment

The frontend is ready for GitHub Pages deployment:

1. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Click Save
2. **Access the interface** at: `https://hannesmitterer.github.io/EuystacioDRAFT/`
3. **Alternative gateways**:
   - Dignity Gateway: `https://hannesmitterer.github.io/EuystacioDRAFT/dignity_gateway.html`
   - Connect Portal: `https://hannesmitterer.github.io/EuystacioDRAFT/connect.html`

The main sacred bridge interface is now the primary entry point for the repository.

## Notes
- This scaffold intentionally avoids storing secrets in code.
- The public interface polls `bridge_log.json` every 5s; for cross-domain usage enable CORS in the API.
- The Dignity Gateway works standalone and gracefully handles backend unavailability.