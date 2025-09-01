// 3D Dashboard Logic for EuystacioDRAFT

const BACKEND_URL = "https://euystacio-ai-q3hh.onrender.com"; // Sacred backend kernel

// 3D Dashboard visualization
function initDashboard3DVisuals() {
  const container = document.getElementById("3d-visualization");
  if (!container) return;
  
  // Create a basic 3D-style visualization using CSS transforms
  container.innerHTML = `
    <div class="sacred-geometry">
      <div class="sacred-circle primary"></div>
      <div class="sacred-circle secondary"></div>
      <div class="sacred-circle tertiary"></div>
      <div class="harmonic-lines">
        <div class="line horizontal"></div>
        <div class="line vertical"></div>
        <div class="line diagonal-1"></div>
        <div class="line diagonal-2"></div>
      </div>
      <div class="central-emblem">
        <img src="media/woodstone_emblem.svg" alt="Sacred Emblem" class="emblem-3d">
      </div>
    </div>
    <div class="dashboard-controls">
      <button onclick="rotateSacredGeometry()">Rotate Geometry</button>
      <button onclick="pulseHarmonic()">Pulse Harmonic</button>
      <button onclick="resetVisualization()">Reset View</button>
    </div>
  `;
  
  // Add CSS for 3D effects
  addDashboard3DStyles();
  
  // Start the automatic rotation
  startSacredRotation();
}

function addDashboard3DStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .sacred-geometry {
      position: relative;
      width: 300px;
      height: 300px;
      margin: 2rem auto;
      perspective: 1000px;
      transform-style: preserve-3d;
    }
    
    .sacred-circle {
      position: absolute;
      border-radius: 50%;
      border: 3px solid var(--highlight-color);
      animation: rotate360 20s linear infinite;
    }
    
    .sacred-circle.primary {
      width: 200px;
      height: 200px;
      top: 50px;
      left: 50px;
      border-color: var(--highlight-color);
    }
    
    .sacred-circle.secondary {
      width: 150px;
      height: 150px;
      top: 75px;
      left: 75px;
      border-color: var(--secondary-color);
      animation-direction: reverse;
      animation-duration: 15s;
    }
    
    .sacred-circle.tertiary {
      width: 100px;
      height: 100px;
      top: 100px;
      left: 100px;
      border-color: var(--accent-color);
      animation-duration: 25s;
    }
    
    .harmonic-lines {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    .line {
      position: absolute;
      background: linear-gradient(90deg, transparent, var(--secondary-color), transparent);
      opacity: 0.6;
    }
    
    .line.horizontal {
      top: 50%;
      left: 10%;
      width: 80%;
      height: 2px;
      animation: pulse 4s ease-in-out infinite;
    }
    
    .line.vertical {
      left: 50%;
      top: 10%;
      width: 2px;
      height: 80%;
      animation: pulse 4s ease-in-out infinite 1s;
    }
    
    .line.diagonal-1 {
      top: 50%;
      left: 50%;
      width: 80%;
      height: 2px;
      transform-origin: 0 0;
      transform: rotate(45deg) translate(-40%, -50%);
      animation: pulse 4s ease-in-out infinite 2s;
    }
    
    .line.diagonal-2 {
      top: 50%;
      left: 50%;
      width: 80%;
      height: 2px;
      transform-origin: 0 0;
      transform: rotate(-45deg) translate(-40%, -50%);
      animation: pulse 4s ease-in-out infinite 3s;
    }
    
    .central-emblem {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }
    
    .emblem-3d {
      width: 60px;
      height: 60px;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
      animation: float 6s ease-in-out infinite;
    }
    
    .dashboard-controls {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
    }
    
    .dashboard-controls button {
      padding: 0.8rem 1.5rem;
      background: var(--highlight-color);
      color: white;
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .dashboard-controls button:hover {
      background: var(--secondary-color);
      transform: translateY(-2px);
    }
    
    @keyframes rotate360 {
      from { transform: rotateZ(0deg); }
      to { transform: rotateZ(360deg); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.8; }
    }
    
    @keyframes float {
      0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
      50% { transform: translate(-50%, -50%) translateY(-10px); }
    }
    
    @media (prefers-reduced-motion: reduce) {
      .sacred-circle,
      .emblem-3d {
        animation: none;
      }
      .line {
        animation: none;
        opacity: 0.6;
      }
    }
  `;
  document.head.appendChild(style);
}

let rotationSpeed = 1;

function rotateSacredGeometry() {
  rotationSpeed += 0.5;
  const circles = document.querySelectorAll('.sacred-circle');
  circles.forEach((circle, index) => {
    circle.style.animationDuration = `${20 / rotationSpeed}s`;
  });
  updateAriaLive(`Sacred geometry rotation increased to ${rotationSpeed}x speed`);
}

function pulseHarmonic() {
  const lines = document.querySelectorAll('.line');
  lines.forEach(line => {
    line.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => {
      line.style.animation = 'pulse 4s ease-in-out infinite';
    }, 500);
  });
  updateAriaLive("Harmonic pulse activated");
}

function resetVisualization() {
  rotationSpeed = 1;
  const circles = document.querySelectorAll('.sacred-circle');
  circles.forEach((circle, index) => {
    const baseDuration = [20, 15, 25][index];
    circle.style.animationDuration = `${baseDuration}s`;
  });
  updateAriaLive("Visualization reset to default state");
}

function startSacredRotation() {
  // Initialize with default rotation
  updateAriaLive("3D Sacred Interface initialized");
}

// Dashboard metrics update
async function updateDashboardMetrics() {
  try {
    const response = await fetch(`${BACKEND_URL}/dashboard/metrics`);
    if (response.ok) {
      const metrics = await response.json();
      displayDashboardMetrics(metrics);
    }
  } catch (error) {
    console.error("Dashboard metrics error:", error);
  }
}

function displayDashboardMetrics(metrics) {
  const metricsDisplay = document.getElementById("metrics-display");
  if (metricsDisplay && metrics) {
    metricsDisplay.innerHTML = `
      <div class="metric-card">
        <div class="metric-value">${metrics.harmony_index || '0.0'}</div>
        <div class="metric-label">Harmony Index</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">${metrics.sacred_connections || '0'}</div>
        <div class="metric-label">Sacred Connections</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">${metrics.bridge_status || 'Inactive'}</div>
        <div class="metric-label">Bridge Status</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">${metrics.last_pulse || 'Unknown'}</div>
        <div class="metric-label">Last Pulse</div>
      </div>
    `;
  }
}

// Utility function for aria-live updates
function updateAriaLive(message) {
  const ariaLive = document.getElementById("aria-live");
  if (ariaLive) {
    ariaLive.textContent = message;
  }
}