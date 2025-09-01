// EuystacioDRAFT Frontend Core

const BACKEND_URL = "https://euystacio-ai-q3hh.onrender.com"; // Sacred backend kernel
window.BACKEND_URL = BACKEND_URL; // Make available globally

// Authentication functions
async function handleLogin() {
  const username = document.getElementById("username")?.value;
  const password = document.getElementById("password")?.value;
  
  if (!username || !password) {
    updateAriaLive("Please enter both username and password");
    return;
  }
  
  try {
    updateAriaLive("Connecting to sacred network...");
    const result = await login(username, password);
    
    if (result.success) {
      updateAriaLive("Authentication successful. Welcome to the sacred network.");
      // Redirect to dashboard or update UI
      window.location.href = "dashboard.html";
    } else {
      updateAriaLive("Authentication failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Login error:", error);
    updateAriaLive("Connection error. Please try again later.");
  }
}

async function login(username, password) {
  const resp = await fetch(`${BACKEND_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return await resp.json();
}

// Connection testing
async function testConnection() {
  updateAriaLive("Testing connection to sacred backend...");
  
  try {
    const response = await fetch(`${BACKEND_URL}/health`);
    const frontendStatus = document.getElementById("frontend-status");
    const backendStatus = document.getElementById("backend-status");
    
    if (frontendStatus) {
      frontendStatus.textContent = "Frontend: Operational";
      frontendStatus.className = "status-badge success";
    }
    
    if (response.ok) {
      const data = await response.json();
      if (backendStatus) {
        backendStatus.textContent = "Backend: Connected";
        backendStatus.className = "status-badge success";
      }
      updateAriaLive("Connection test successful. All systems operational.");
      
      // Check for harmony data
      if (data.harmony) {
        const harmonyStatus = document.getElementById("harmony-status");
        if (harmonyStatus) {
          harmonyStatus.textContent = `Harmony: Active (${data.harmony.index})`;
          harmonyStatus.className = "status-badge success";
        }
      }
    } else {
      if (backendStatus) {
        backendStatus.textContent = "Backend: Disconnected";
        backendStatus.className = "status-badge error";
      }
      updateAriaLive("Backend connection failed.");
    }
  } catch (error) {
    console.error("Connection test error:", error);
    const backendStatus = document.getElementById("backend-status");
    if (backendStatus) {
      backendStatus.textContent = "Backend: Error";
      backendStatus.className = "status-badge error";
    }
    updateAriaLive("Connection test failed. Backend may be unreachable.");
  }
}

// Bridge establishment
async function establishBridge() {
  updateAriaLive("Establishing harmonic bridge...");
  
  try {
    const response = await fetch(`${BACKEND_URL}/bridge/establish`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "frontend",
        timestamp: new Date().toISOString(),
        type: "harmony_bridge"
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      updateAriaLive("Harmonic bridge established successfully.");
      logConnection(`Bridge established: ${data.bridge_id || 'Unknown ID'}`);
    } else {
      updateAriaLive("Bridge establishment failed.");
      logConnection("Bridge establishment failed");
    }
  } catch (error) {
    console.error("Bridge error:", error);
    updateAriaLive("Bridge establishment error.");
    logConnection("Bridge establishment error: " + error.message);
  }
}

// Dashboard Initialization
function initDashboard3D() {
  const container = document.getElementById("dashboard-3d");
  if (container) {
    container.innerHTML = "<p>Loading 3D Sacred Interface...</p>";
    // Initialize 3D dashboard if dashboard_3d.js is loaded
    if (typeof initDashboard3DVisuals === 'function') {
      initDashboard3DVisuals();
    }
  }
}

// Hymn section
function loadHymn() {
  const section = document.getElementById("hymn-section") || document.getElementById("hymn-content");
  if (section) {
    section.innerHTML = `
      <div class="hymn-verse">
        <h3>Hymn of Euystacio</h3>
        <p><em>Victory is not power over — it is presence with.</em></p>
        <p><em>In sacred harmony, we find the eternal truth.</em></p>
        <p><em>The bridge connects all that was, is, and shall be.</em></p>
      </div>
    `;
    updateAriaLive("Sacred hymn loaded.");
  }
}

function playHymn() {
  updateAriaLive("Playing harmonic sequence...");
  // Placeholder for harmonic sequence playback
  setTimeout(() => {
    updateAriaLive("Harmonic sequence complete.");
  }, 3000);
}

// Connection logging
function logConnection(message) {
  const logPanel = document.getElementById("connection-log");
  if (logPanel) {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement("div");
    logEntry.className = "log-entry";
    logEntry.textContent = `[${timestamp}] ${message}`;
    logPanel.appendChild(logEntry);
    logPanel.scrollTop = logPanel.scrollHeight;
  }
}

// Aria live region updates
function updateAriaLive(message) {
  const ariaLive = document.getElementById("aria-live");
  if (ariaLive) {
    ariaLive.textContent = message;
  }
}

// Metrics loading
async function loadMetrics() {
  try {
    const response = await fetch(`${BACKEND_URL}/metrics`);
    if (response.ok) {
      const metrics = await response.json();
      displayMetrics(metrics);
    }
  } catch (error) {
    console.error("Metrics loading error:", error);
  }
}

function displayMetrics(metrics) {
  const metricsDisplay = document.getElementById("metrics-display");
  if (metricsDisplay && metrics) {
    metricsDisplay.innerHTML = `
      <div class="metric-card">
        <div class="metric-value">${metrics.connections || '0'}</div>
        <div class="metric-label">Active Connections</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">${metrics.harmony_index || '0.0'}</div>
        <div class="metric-label">Harmony Index</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">${metrics.uptime || '0'}</div>
        <div class="metric-label">Uptime (hours)</div>
      </div>
    `;
  }
}

// Initialize UI
document.addEventListener("DOMContentLoaded", () => {
  updateAriaLive("EuystacioDRAFT interface loaded");
  
  // Initialize components based on current page
  if (document.getElementById("dashboard-3d")) {
    initDashboard3D();
  }
  
  if (document.getElementById("hymn-section") || document.getElementById("hymn-content")) {
    loadHymn();
  }
  
  if (document.getElementById("metrics-display")) {
    loadMetrics();
  }
  
  // Auto-test connection on connect page
  if (document.getElementById("frontend-status")) {
    setTimeout(testConnection, 1000);
  }
  
  // Initialize bridge map if present
  if (typeof initHarmonicBridgeMap === 'function') {
    initHarmonicBridgeMap();
  }
});

// Periodic updates
setInterval(() => {
  if (document.getElementById("metrics-display")) {
    loadMetrics();
  }
}, 30000); // Update every 30 seconds