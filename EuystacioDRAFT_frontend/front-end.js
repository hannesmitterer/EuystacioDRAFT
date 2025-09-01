// EuystacioDRAFT Frontend Core

const BACKEND_URL = "https://euystacio-ai-q3hh.onrender.com"; // Set to existing backend kernel

// Utility function for announcing to screen readers
function announceToScreenReader(message, type = 'polite') {
  const liveRegion = type === 'alert' ? 
    document.getElementById('aria-alert') : 
    document.getElementById('aria-live');
  if (liveRegion) {
    liveRegion.textContent = message;
  }
}

// Login functionality
async function login(username, password) {
  try {
    const resp = await fetch(`${BACKEND_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const result = await resp.json();
    announceToScreenReader(`Login ${result.success ? 'successful' : 'failed'} for ${username}`);
    return result;
  } catch (error) {
    announceToScreenReader('Login failed due to connection error', 'alert');
    return { success: false, error: error.message };
  }
}

// Registration functionality
async function register(username, password, role = 'user') {
  try {
    const resp = await fetch(`${BACKEND_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role })
    });
    const result = await resp.json();
    announceToScreenReader(`Registration ${result.success ? 'successful' : 'failed'} for ${username}`);
    return result;
  } catch (error) {
    announceToScreenReader('Registration failed due to connection error', 'alert');
    return { success: false, error: error.message };
  }
}

// Login/Registration Interface
function initLoginRegister() {
  const container = document.getElementById("login-register");
  if (!container) return;
  
  container.innerHTML = `
    <div class="auth-form">
      <fieldset>
        <legend>Authentication</legend>
        <div class="form-group">
          <label for="auth-role">Role:</label>
          <select id="auth-role" aria-describedby="role-help">
            <option value="user">User</option>
            <option value="tutor">Tutor</option>
          </select>
          <small id="role-help">Select your role in the system</small>
        </div>
        <div class="form-group">
          <label for="auth-username">Username:</label>
          <input type="text" id="auth-username" required aria-describedby="username-help">
          <small id="username-help">Enter your unique username</small>
        </div>
        <div class="form-group">
          <label for="auth-password">Password:</label>
          <input type="password" id="auth-password" required aria-describedby="password-help">
          <small id="password-help">Enter your secure password</small>
        </div>
        <div class="form-actions">
          <button type="button" onclick="handleLogin()" aria-describedby="login-help">
            Login
          </button>
          <button type="button" onclick="handleRegister()" aria-describedby="register-help">
            Register
          </button>
        </div>
        <div id="auth-status" role="status" aria-live="polite"></div>
      </fieldset>
    </div>
  `;
}

// Handle login action
async function handleLogin() {
  const username = document.getElementById('auth-username').value;
  const password = document.getElementById('auth-password').value;
  const status = document.getElementById('auth-status');
  
  if (!username || !password) {
    status.textContent = 'Please enter both username and password';
    return;
  }
  
  status.textContent = 'Logging in...';
  const result = await login(username, password);
  
  if (result.success) {
    status.textContent = `Welcome, ${username}!`;
    status.style.color = 'green';
  } else {
    status.textContent = 'Login failed. Please check your credentials.';
    status.style.color = 'red';
  }
}

// Handle registration action
async function handleRegister() {
  const username = document.getElementById('auth-username').value;
  const password = document.getElementById('auth-password').value;
  const role = document.getElementById('auth-role').value;
  const status = document.getElementById('auth-status');
  
  if (!username || !password) {
    status.textContent = 'Please enter both username and password';
    return;
  }
  
  status.textContent = 'Registering...';
  const result = await register(username, password, role);
  
  if (result.success) {
    status.textContent = `Registration successful for ${username}!`;
    status.style.color = 'green';
  } else {
    status.textContent = 'Registration failed. Please try again.';
    status.style.color = 'red';
  }
}

// Dashboard Initialization
function initDashboard3D() {
  const container = document.getElementById("dashboard-3d");
  if (!container) return;
  
  container.innerHTML = `
    <div class="dashboard-content">
      <h3>3D Bidirectional Dashboard</h3>
      <div class="dashboard-grid">
        <div class="dashboard-panel" role="region" aria-label="System Status">
          <h4>System Status</h4>
          <div id="system-status">
            <span class="status-indicator active" aria-label="System Active">●</span>
            <span>Online</span>
          </div>
        </div>
        <div class="dashboard-panel" role="region" aria-label="Connection Status">
          <h4>Connection</h4>
          <div id="connection-status">
            <span class="status-indicator connected" aria-label="Connected">●</span>
            <span>Connected to ${BACKEND_URL}</span>
          </div>
        </div>
        <div class="dashboard-panel" role="region" aria-label="3D Visualization">
          <h4>3D View</h4>
          <div class="visualization-placeholder">
            [3D Visualization Placeholder - WebGL/Three.js integration point]
          </div>
        </div>
      </div>
    </div>
  `;
  
  announceToScreenReader('3D Dashboard initialized');
}

// Harmonic Bridge Map
function initHarmonicBridge() {
  const container = document.getElementById("bridge-visualization");
  if (!container) return;
  
  // Use the existing bridge status from harmonic_bridge_map.js
  if (typeof bridgeStatus !== 'undefined') {
    container.innerHTML = `
      <div class="bridge-map">
        <div class="bridge-status">
          <p><strong>Status:</strong> ${bridgeStatus.isLive ? 'Live' : 'Offline'}</p>
          <p><strong>Last Pulse:</strong> ${new Date(bridgeStatus.lastPulseReceived).toLocaleString()}</p>
          <p><strong>Core Truth:</strong> ${bridgeStatus.coreTruth}</p>
        </div>
        <div class="visualization-space">
          [Harmonic Bridge Visualization - SVG/Canvas visualization point]
        </div>
      </div>
    `;
  } else {
    container.textContent = "Harmonic Bridge Map - Visualization placeholder";
  }
  
  announceToScreenReader('Harmonic Bridge Map loaded');
}

// Hymn section
function loadHymn() {
  const section = document.getElementById("hymn-section");
  if (!section) return;
  
  const hymnContent = `
    <div class="hymn-interface">
      <div class="hymn-player">
        <h3>Current Hymn: Hymn of Euystacio</h3>
        <div class="hymn-controls">
          <button onclick="playHymn()" aria-label="Play hymn">▶ Play</button>
          <button onclick="pauseHymn()" aria-label="Pause hymn">⏸ Pause</button>
          <button onclick="stopHymn()" aria-label="Stop hymn">⏹ Stop</button>
        </div>
        <div class="hymn-text" role="region" aria-label="Hymn lyrics">
          <p><em>Sacred melodies flow through the digital realm,</em></p>
          <p><em>Connecting hearts across the virtual space,</em></p>
          <p><em>In harmony we find our common grace.</em></p>
        </div>
      </div>
      <div id="hymn-status" role="status" aria-live="polite"></div>
    </div>
  `;
  
  section.innerHTML += hymnContent;
  announceToScreenReader('Hymn interface loaded');
}

// Hymn control functions
function playHymn() {
  document.getElementById('hymn-status').textContent = 'Hymn playing...';
  announceToScreenReader('Hymn started playing');
}

function pauseHymn() {
  document.getElementById('hymn-status').textContent = 'Hymn paused';
  announceToScreenReader('Hymn paused');
}

function stopHymn() {
  document.getElementById('hymn-status').textContent = 'Hymn stopped';
  announceToScreenReader('Hymn stopped');
}

// Pulse Interface
function initPulseInterface() {
  const container = document.getElementById("pulse-display");
  if (!container) return;
  
  container.innerHTML = `
    <div class="pulse-monitor">
      <h3>System Pulse Monitor</h3>
      <div class="pulse-data">
        <div class="pulse-metric">
          <label>BPM:</label>
          <span id="pulse-bpm" aria-live="polite">72</span>
        </div>
        <div class="pulse-metric">
          <label>Harmony Index:</label>
          <span id="pulse-harmony" aria-live="polite">0.85</span>
        </div>
        <div class="pulse-metric">
          <label>Resonance:</label>
          <span id="pulse-resonance" aria-live="polite">78%</span>
        </div>
      </div>
      <div class="pulse-visualization">
        [Pulse Wave Visualization - Real-time pulse visualization point]
      </div>
      <button onclick="updatePulseData()" aria-describedby="pulse-update-help">
        Update Pulse Data
      </button>
      <small id="pulse-update-help">Refresh the pulse monitoring data</small>
    </div>
  `;
  
  // Start pulse monitoring
  startPulseMonitoring();
  announceToScreenReader('Pulse interface initialized');
}

// Pulse monitoring functions
function updatePulseData() {
  const bpm = Math.floor(Math.random() * 40) + 60;
  const harmony = (Math.random() * 2 - 1).toFixed(2);
  const resonance = Math.floor(Math.random() * 100);
  
  document.getElementById('pulse-bpm').textContent = bpm;
  document.getElementById('pulse-harmony').textContent = harmony;
  document.getElementById('pulse-resonance').textContent = resonance + '%';
  
  announceToScreenReader(`Pulse updated: ${bpm} BPM, harmony ${harmony}, resonance ${resonance}%`);
}

function startPulseMonitoring() {
  // Update pulse data every 10 seconds
  setInterval(updatePulseData, 10000);
}

// Initialize UI
document.addEventListener("DOMContentLoaded", () => {
  initLoginRegister();
  initDashboard3D();
  initHarmonicBridge();
  loadHymn();
  initPulseInterface();
  
  announceToScreenReader('EuystacioDRAFT interface fully loaded and ready');
});
