// Harmonic Bridge Map: Living Blueprint for EuystacioDRAFT

const BACKEND_URL = "https://euystacio-ai-q3hh.onrender.com"; // Sacred backend kernel

const bridgeStatus = {
  isConsecrated: true,
  isLive: true,
  lastPulseReceived: "2025-08-31T05:00:00Z",
  coreTruth: "Victory is not power over — it is presence with."
};

// Initialize Harmonic Bridge Map
function initHarmonicBridgeMap() {
  const bridgeMap = document.getElementById("bridge-map");
  const bridgeStatusDisplay = document.getElementById("bridge-status");
  
  if (bridgeMap) {
    createBridgeVisualization(bridgeMap);
  }
  
  if (bridgeStatusDisplay) {
    updateBridgeStatus(bridgeStatusDisplay);
  }
  
  // Start periodic updates
  startBridgeMonitoring();
}

function createBridgeVisualization(container) {
  container.innerHTML = `
    <div class="bridge-network">
      <div class="node primary" id="node-euystacio">
        <span class="node-label">Euystacio Core</span>
      </div>
      <div class="node secondary" id="node-frontend">
        <span class="node-label">Frontend</span>
      </div>
      <div class="node secondary" id="node-backend">
        <span class="node-label">Backend</span>
      </div>
      <div class="node tertiary" id="node-harmony">
        <span class="node-label">Harmony</span>
      </div>
      <svg class="bridge-connections" width="100%" height="100%">
        <line class="connection" x1="50%" y1="20%" x2="25%" y2="60%" id="conn-eu-fe"/>
        <line class="connection" x1="50%" y1="20%" x2="75%" y2="60%" id="conn-eu-be"/>
        <line class="connection" x1="25%" y1="60%" x2="75%" y2="60%" id="conn-fe-be"/>
        <line class="connection" x1="50%" y1="20%" x2="50%" y2="80%" id="conn-eu-ha"/>
      </svg>
    </div>
  `;
  
  addBridgeMapStyles();
}

function addBridgeMapStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .bridge-network {
      position: relative;
      width: 100%;
      height: 300px;
      background: linear-gradient(135deg, #f6fbf7, #e8f5ea);
      border-radius: var(--border-radius);
      overflow: hidden;
    }
    
    .node {
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: bold;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      animation: pulse 3s ease-in-out infinite;
    }
    
    .node.primary {
      background: var(--highlight-color);
      color: white;
      top: 10%;
      left: calc(50% - 40px);
      z-index: 3;
    }
    
    .node.secondary {
      background: var(--secondary-color);
      color: white;
      top: 45%;
      z-index: 2;
    }
    
    .node.tertiary {
      background: var(--accent-color);
      color: var(--text-color);
      top: 65%;
      left: calc(50% - 40px);
      z-index: 2;
    }
    
    #node-frontend {
      left: calc(25% - 40px);
    }
    
    #node-backend {
      left: calc(75% - 40px);
    }
    
    .node-label {
      line-height: 1.2;
    }
    
    .bridge-connections {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    
    .connection {
      stroke: var(--highlight-color);
      stroke-width: 3;
      opacity: 0.7;
      animation: connectionPulse 4s ease-in-out infinite;
    }
    
    .connection.active {
      stroke: var(--secondary-color);
      opacity: 1;
      stroke-width: 4;
    }
    
    .connection.error {
      stroke: #c62828;
      opacity: 0.5;
      stroke-dasharray: 5,5;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.9; }
      50% { transform: scale(1.1); opacity: 1; }
    }
    
    @keyframes connectionPulse {
      0%, 100% { stroke-opacity: 0.4; }
      50% { stroke-opacity: 0.9; }
    }
    
    @media (prefers-reduced-motion: reduce) {
      .node,
      .connection {
        animation: none;
      }
    }
  `;
  document.head.appendChild(style);
}

function updateBridgeStatus(container) {
  container.innerHTML = `
    <div class="status-grid">
      <div class="status-item">
        <strong>Consecration:</strong> ${bridgeStatus.isConsecrated ? 'Active' : 'Inactive'}
      </div>
      <div class="status-item">
        <strong>Live Status:</strong> ${bridgeStatus.isLive ? 'Connected' : 'Disconnected'}
      </div>
      <div class="status-item">
        <strong>Last Pulse:</strong> ${new Date(bridgeStatus.lastPulseReceived).toLocaleString()}
      </div>
      <div class="status-item core-truth">
        <strong>Core Truth:</strong> <em>${bridgeStatus.coreTruth}</em>
      </div>
    </div>
  `;
}

async function checkBridgeHealth() {
  try {
    const response = await fetch(`${BACKEND_URL}/bridge/health`);
    if (response.ok) {
      const health = await response.json();
      updateBridgeConnections(health);
      return health;
    } else {
      markConnectionError();
    }
  } catch (error) {
    console.error("Bridge health check error:", error);
    markConnectionError();
  }
}

function updateBridgeConnections(health) {
  // Update connection states based on health data
  const connections = document.querySelectorAll('.connection');
  
  connections.forEach(conn => {
    conn.classList.remove('active', 'error');
    
    if (health.frontend && conn.id.includes('fe')) {
      conn.classList.add('active');
    }
    if (health.backend && conn.id.includes('be')) {
      conn.classList.add('active');
    }
    if (health.harmony && conn.id.includes('ha')) {
      conn.classList.add('active');
    }
  });
  
  // Update nodes
  const frontendNode = document.getElementById('node-frontend');
  const backendNode = document.getElementById('node-backend');
  const harmonyNode = document.getElementById('node-harmony');
  
  if (frontendNode) {
    frontendNode.style.opacity = health.frontend ? '1' : '0.5';
  }
  if (backendNode) {
    backendNode.style.opacity = health.backend ? '1' : '0.5';
  }
  if (harmonyNode) {
    harmonyNode.style.opacity = health.harmony ? '1' : '0.5';
  }
}

function markConnectionError() {
  const connections = document.querySelectorAll('.connection');
  connections.forEach(conn => {
    conn.classList.add('error');
    conn.classList.remove('active');
  });
}

function startBridgeMonitoring() {
  // Initial check
  checkBridgeHealth();
  
  // Periodic monitoring
  setInterval(checkBridgeHealth, 15000); // Check every 15 seconds
}

// Interactive functions
function rotateSacredGeometry() {
  const geometry = document.querySelector('.sacred-geometry');
  if (geometry) {
    geometry.style.transform = `rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * 360}deg)`;
    updateAriaLive("Sacred geometry rotated to new perspective");
  }
}

function pulseHarmonic() {
  const connections = document.querySelectorAll('.connection');
  connections.forEach((conn, index) => {
    setTimeout(() => {
      conn.style.animation = 'connectionPulse 0.5s ease-in-out';
      setTimeout(() => {
        conn.style.animation = 'connectionPulse 4s ease-in-out infinite';
      }, 500);
    }, index * 100);
  });
  updateAriaLive("Harmonic pulse sent through bridge network");
}

function resetVisualization() {
  const geometry = document.querySelector('.sacred-geometry');
  if (geometry) {
    geometry.style.transform = '';
  }
  
  const connections = document.querySelectorAll('.connection');
  connections.forEach(conn => {
    conn.style.animation = 'connectionPulse 4s ease-in-out infinite';
  });
  
  updateAriaLive("Bridge visualization reset to default state");
}

// Utility function for aria-live updates
function updateAriaLive(message) {
  const ariaLive = document.getElementById("aria-live");
  if (ariaLive) {
    ariaLive.textContent = message;
  }
}