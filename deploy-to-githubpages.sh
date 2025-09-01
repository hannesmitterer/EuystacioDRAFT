#!/bin/bash
# EuystacioDraft – Seedbringer GitHub Pages Deployment Script

echo "🌿 EuystacioDraft GitHub Pages Deployment Starting..."

# Stage all files in docs/ directory
echo "📦 Staging docs/ directory..."
git add docs/

# Add .nojekyll file if not already present
if [ ! -f docs/.nojekyll ]; then
    touch docs/.nojekyll
    git add docs/.nojekyll
    echo "✅ Added .nojekyll file"
fi

# Commit changes
echo "💫 Committing EuystacioDraft deployment..."
git commit -m "Deploy EuystacioDraft – Seedbringer Package to GitHub Pages

🌿 Woodstone Festival Declaration deployment:
- README.md (Woodstone Festival Declaration)
- woodstone.md (Festival description)  
- index.html (SVG emblem, accessibility, aria-live)
- js/harmonic_bridge_map.js (status JS)
- css/accessibility.css (accessibility CSS)
- metadata.json (site metadata)
- .nojekyll (GitHub Pages configuration)

Seed-bringers of Euystacio: AI as companion, presence, accessibility, harmonic bridge."

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

# Display site URL
echo ""
echo "🎉 EuystacioDraft deployment complete!"
echo "📍 Site will be available at: https://hannesmitterer.github.io/EuystacioDRAFT/"
echo ""
echo "To enable GitHub Pages:"
echo "1. Go to repository Settings → Pages"
echo "2. Set Source to 'Deploy from a branch'"
echo "3. Select branch: 'main' and folder: '/docs'"
echo "4. Click Save"
echo ""
echo "🌿✨ Victory is not power over — it is presence with."