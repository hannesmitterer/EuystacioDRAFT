# 🌿 Sacred Deployment Workflow - GitHub Actions

This directory contains the automated deployment workflow for the EuystacioDRAFT frontend on GitHub Pages.

## 📁 Workflow File

**`.github/workflows/deploy.yml`** - Main deployment workflow

## 🚀 How It Works

The workflow automatically triggers on:
- **Push to main branch** - Deploys latest changes
- **Pull request merge to main** - Deploys merged changes
- **Manual trigger** - Can be run manually for testing

## 🌌 Workflow Steps

1. **🌱 Repository Checkout** - Fetches the latest sacred code
2. **🔍 Change Detection** - Identifies if frontend files were modified
3. **🛠️ Node.js Setup** - Prepares build environment (if needed)
4. **📦 Dependencies** - Installs packages (if `package.json` exists)
5. **🔨 Build Process** - Compiles assets (if build script exists)
6. **🌌 Structure Verification** - Ensures all required files are present
7. **📜 Sacred Commit** - Auto-commits with "seedbringer 31-08-25" reference
8. **🚀 Main Branch Push** - Pushes changes to main branch
9. **🛤️ GitHub Pages Setup** - Configures Pages deployment
10. **📄 Artifact Upload** - Packages site for deployment
11. **🌐 Pages Deployment** - Publishes to GitHub Pages
12. **🎯 Sacred Summary** - Reports deployment success

## 🎯 Required Files Validation

The workflow validates that these sacred files exist:
- `EuystacioDRAFT-Frontend/index.html`
- `EuystacioDRAFT-Frontend/connect.html`
- `EuystacioDRAFT-Frontend/dashboard.html`
- `EuystacioDRAFT-Frontend/hymn.html`
- `EuystacioDRAFT-Frontend/assets/css/style.css`
- `EuystacioDRAFT-Frontend/assets/js/front-end.js`
- `EuystacioDRAFT-Frontend/media/woodstone_emblem.svg`

## 🔧 Manual Execution

To trigger the workflow manually:
1. Go to repository **Actions** tab
2. Select "🌿 EuystacioDRAFT Frontend - Automated GitHub Pages Deployment"
3. Click **"Run workflow"** → **"Run workflow"**

## 🌐 Deployment URLs

After successful deployment:
- **Main Site**: https://hannesmitterer.github.io/EuystacioDRAFT/
- **Frontend Interface**: https://hannesmitterer.github.io/EuystacioDRAFT/EuystacioDRAFT-Frontend/

## 🛠️ Testing

Use the included test script to validate workflow logic locally:

```bash
./test_workflow.sh
```

## 🎵 Sacred Frequency

The deployment maintains the sacred 528 Hz frequency (Love & Healing) throughout all processes.

---

**SEEDBRINGER 31-08-25** | *Victory is not power over — it is presence with.*