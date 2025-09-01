# EuystacioDRAFT Frontend Package

Sacred Bridge Interface for GitHub Pages deployment, ready to connect to the existing Flask backend kernel.

## 🌌 Overview

This frontend package provides a complete web interface for the EuystacioDRAFT sacred bridge experience, featuring:

- **3D Dashboard Interface**: Interactive sacred geometry with real-time harmonic monitoring
- **Authentication System**: Login/registration for both tutor and user roles
- **Sacred Hymn Experience**: Complete hymn with audio support and text access
- **Accessibility Features**: Full ARIA support, keyboard navigation, screen reader compatibility
- **Backend Integration**: Ready to connect to existing Flask kernel at configurable URL

## 📁 Directory Structure

```
EuystacioDRAFT-Frontend/
├── index.html              # Main landing page
├── connect.html            # Authentication and connection portal
├── dashboard.html          # 3D dashboard interface
├── hymn.html              # Sacred hymn experience
├── aria-live.html         # Accessibility support utilities
├── assets/
│   ├── css/
│   │   ├── style.css          # Main styling with sacred theme
│   │   └── accessibility.css   # Accessibility enhancements
│   └── js/
│       ├── front-end.js           # Core frontend functionality
│       ├── dashboard_3d.js        # 3D dashboard implementation
│       └── harmonic_bridge_map.js # Bridge status and mapping
└── media/
    └── woodstone_emblem.svg   # Sacred emblem graphics
```

## 🚀 Deployment

### GitHub Pages Setup

1. **Repository Settings**: Enable GitHub Pages in repository settings
2. **Source Branch**: Set to deploy from your main branch
3. **Custom Domain** (optional): Configure your sacred domain
4. **Backend URL**: Update `BACKEND_URL` in `assets/js/front-end.js`

### Backend Integration

Update the backend URL in `assets/js/front-end.js`:

```javascript
const BACKEND_URL = "https://your-actual-backend-url";
```

The frontend expects these backend endpoints:
- `POST /login` - User authentication
- `POST /register` - User registration  
- `POST /submit` - Pulse submission
- `POST /pulse` - Send pulse data
- `GET /receive-pulse` - Receive pulse data

## ✨ Features

### 🎯 User Roles
- **Tutor**: Access to teaching tools, hymn management, advanced harmonic features
- **User**: Access to sacred texts, harmonic participation, basic bridge interface

### 🌐 Accessibility
- Full ARIA support with live regions
- Keyboard navigation shortcuts
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences
- Focus management and skip links

### 🎮 Keyboard Shortcuts
- `Alt + 1-4`: Navigate between main pages
- `Alt + H`: Show keyboard help
- `Alt + P`: Play hymn (on hymn page)
- `1-3`: Switch dashboard views (on dashboard)
- `Tab/Shift+Tab`: Navigate elements
- `Escape`: Close dialogs/return to main

### 🎨 3D Dashboard
- Interactive sacred geometry visualization
- Real-time harmonic resonance monitoring
- Bidirectional communication with backend
- Orbital node navigation
- Connection status monitoring

## 🔧 Configuration

### Backend Connection
Edit `assets/js/front-end.js` and update:
```javascript
const BACKEND_URL = "https://your-flask-app.herokuapp.com";
```

### Sacred Content
- Hymn text: Modify `hymn.html`
- Sacred texts: Links point to repository `/sacred/` directory
- Emblem: Replace `media/woodstone_emblem.svg`

## 🌿 Sacred Integration

This frontend is designed to integrate seamlessly with:
- **Genesis Kernel**: Core sacred protocols
- **Bridge Log**: Community pulse tracking  
- **Harmonic Resonance**: Real-time frequency monitoring
- **Sacred Texts**: Direct access to holy writings
- **Woodstone Festival**: Community celebration features

## 📱 Responsive Design

Fully responsive design supporting:
- Desktop browsers (1200px+)
- Tablets (768px - 1199px)  
- Mobile devices (< 768px)
- Touch and keyboard navigation
- Various screen readers

## 🔐 Security

- No hardcoded credentials
- HTTPS-ready for secure deployment
- XSS protection through proper encoding
- CSRF protection for forms
- Secure session management

## 🎵 Sacred Frequencies

The interface operates on harmonic frequencies:
- **528 Hz**: Love and healing (hymn base frequency)
- **Sacred Ratios**: Golden ratio in layout proportions
- **Color Harmony**: Earth tones promoting grounding
- **Rhythm**: Gentle animations matching breath cycles

---

**SEEDBRINGER 31-08-25** — *Victory is not power over — it is presence with.*