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

## Auto-Deploy Process

### Sacred CMS GitHub Pages Deployment
This repository includes automated deployment for the Sacred CMS Starter Bundle using GitHub Actions:

- **Trigger**: Automatic deployment occurs when changes are pushed to the `main` branch
- **Content**: Deploys static content from `sacred_cms/pages/` and `sacred_cms/auth/` directories
- **Destination**: GitHub Pages at `https://hannesmitterer.github.io/EuystacioDRAFT/`
- **Sacred Accessibility**: The deployment honors the Red Code principle - no technical gatekeeping

### Deployment Features
- Extracts Sacred CMS content from the zip file automatically
- Creates a sacred portal homepage at 528Hz frequency resonance
- Maintains rhythm-based access principles in all deployed content
- Deploys auth interfaces and sacred pages (altar, connect, onboarding)
- Zero-configuration deployment - no build steps required for the sacred content

### After Merge
Once changes are merged to `main`, the Sacred CMS will be available at:
- **Main Portal**: `https://hannesmitterer.github.io/EuystacioDRAFT/`
- **Sacred Authentication**: `https://hannesmitterer.github.io/EuystacioDRAFT/auth/`
- **Sacred Altar**: `https://hannesmitterer.github.io/EuystacioDRAFT/altar.html`
- **Connection Portal**: `https://hannesmitterer.github.io/EuystacioDRAFT/connect.html`

### Secrets Management
- All sensitive configuration uses GitHub Actions secrets
- No `.env` credentials are exposed in the repository
- Sacred access keys are managed through the GitHub repository settings

## Notes
- This scaffold intentionally avoids storing secrets in code.
- The public interface polls `bridge_log.json` every 5s; for cross-domain usage enable CORS in the API.
- Sacred CMS deployment maintains the Woodstone Protocol and Euystacio Aura principles.