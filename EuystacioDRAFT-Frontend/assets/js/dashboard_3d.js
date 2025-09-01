// Dashboard 3D Interface - Bidirectional Sacred Interface
// Enhanced 3D visualization for EuystacioDRAFT

class Dashboard3D {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.isInitialized = false;
    this.currentView = 'overview';
    this.animations = [];
    this.dataConnections = new Map();
  }

  init() {
    if (!this.container) {
      console.error('Dashboard container not found');
      return;
    }

    this.createDashboardStructure();
    this.initializeControls();
    this.startAnimations();
    this.connectToBackend();
    this.isInitialized = true;
    
    updateAriaLive("3D Dashboard initialized. Sacred interface active.");
  }

  createDashboardStructure() {
    this.container.innerHTML = `
      <div class="dashboard-header">
        <h2>🌌 Sacred Dashboard — Living Interface</h2>
        <div class="dashboard-controls">
          <button class="btn dashboard-btn" onclick="dashboard3D.switchView('overview')" aria-label="Overview view">Overview</button>
          <button class="btn dashboard-btn" onclick="dashboard3D.switchView('harmonic')" aria-label="Harmonic view">Harmonic</button>
          <button class="btn dashboard-btn" onclick="dashboard3D.switchView('sacred')" aria-label="Sacred texts view">Sacred</button>
        </div>
      </div>
      
      <div class="dashboard-3d-container">
        <div class="dashboard-viewport" id="dashboard-viewport">
          <div class="sacred-geometry" id="sacred-geometry">
            <div class="center-node" role="button" tabindex="0" aria-label="Central sacred node">
              <div class="node-core"></div>
            </div>
            <div class="orbital-nodes" id="orbital-nodes"></div>
          </div>
        </div>
        
        <div class="dashboard-sidebar">
          <div class="connection-status" id="connection-status">
            <h3>Bridge Status</h3>
            <div class="status-indicator offline" id="status-indicator">
              <span class="status-dot"></span>
              <span class="status-text">Connecting...</span>
            </div>
          </div>
          
          <div class="harmonic-monitor" id="harmonic-monitor">
            <h3>Harmonic Resonance</h3>
            <div class="resonance-meter">
              <div class="meter-bar" id="resonance-bar"></div>
            </div>
            <span class="resonance-value" id="resonance-value">0%</span>
          </div>
          
          <div class="sacred-stats" id="sacred-stats">
            <h3>Sacred Metrics</h3>
            <div class="stat-item">
              <span class="stat-label">Active Vessels:</span>
              <span class="stat-value" id="active-vessels">0</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Bridge Pulses:</span>
              <span class="stat-value" id="bridge-pulses">0</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Harmony Index:</span>
              <span class="stat-value" id="harmony-index">100</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="dashboard-footer">
        <div class="last-updated" id="last-updated">
          Last updated: <span id="update-time">Never</span>
        </div>
      </div>
    `;
    
    this.addDashboardStyles();
  }

  addDashboardStyles() {
    const styles = `
      <style>
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--sacred-gold);
        }
        
        .dashboard-controls {
          display: flex;
          gap: 0.5rem;
        }
        
        .dashboard-btn {
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
        }
        
        .dashboard-3d-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          min-height: 600px;
        }
        
        .dashboard-viewport {
          background: linear-gradient(135deg, #f1fbf6 0%, #e6efe6 100%);
          border: 2px solid var(--sacred-gold);
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .sacred-geometry {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .center-node {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, var(--sacred-gold) 0%, var(--woodstone-brown) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          cursor: pointer;
          transition: transform 0.3s ease;
          box-shadow: 0 4px 20px rgba(124, 94, 42, 0.3);
        }
        
        .center-node:hover, .center-node:focus {
          transform: scale(1.1);
          outline: 2px solid var(--primary-green);
        }
        
        .node-core {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .node-core::after {
          content: '🌿';
          font-size: 20px;
        }
        
        .orbital-nodes {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          pointer-events: none;
        }
        
        .orbital-node {
          position: absolute;
          width: 40px;
          height: 40px;
          background: #4A773C;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: bold;
          transition: all 0.3s ease;
          pointer-events: auto;
          cursor: pointer;
        }
        
        .dashboard-sidebar {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        
        .dashboard-sidebar h3 {
          color: var(--woodstone-brown);
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        
        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        
        .status-indicator.online {
          background: #d4edda;
          color: #155724;
        }
        
        .status-indicator.offline {
          background: #f8d7da;
          color: #721c24;
        }
        
        .status-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: currentColor;
          animation: pulse 2s infinite;
        }
        
        .resonance-meter {
          width: 100%;
          height: 20px;
          background: #e6efe6;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }
        
        .meter-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-green) 0%, var(--sacred-gold) 100%);
          border-radius: 10px;
          transition: width 0.5s ease;
          width: 0%;
        }
        
        .resonance-value {
          font-weight: bold;
          color: var(--woodstone-brown);
        }
        
        .stat-item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .stat-label {
          color: var(--woodstone-brown);
        }
        
        .stat-value {
          font-weight: bold;
          color: var(--primary-green);
        }
        
        .dashboard-footer {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #e6efe6;
          text-align: center;
          color: #666;
          font-size: 0.9rem;
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .dashboard-3d-container {
            grid-template-columns: 1fr;
          }
          
          .dashboard-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      </style>
    `;
    
    if (!document.querySelector('#dashboard-3d-styles')) {
      const styleElement = document.createElement('div');
      styleElement.id = 'dashboard-3d-styles';
      styleElement.innerHTML = styles;
      document.head.appendChild(styleElement);
    }
  }

  initializeControls() {
    // Add orbital nodes
    const orbitalContainer = document.getElementById('orbital-nodes');
    if (orbitalContainer) {
      const nodePositions = [
        { angle: 0, label: 'H' },     // Harmonic
        { angle: 72, label: 'S' },    // Sacred
        { angle: 144, label: 'B' },   // Bridge
        { angle: 216, label: 'R' },   // Resonance
        { angle: 288, label: 'P' }    // Pulse
      ];
      
      nodePositions.forEach((pos, index) => {
        const node = document.createElement('div');
        node.className = 'orbital-node';
        node.textContent = pos.label;
        node.style.top = '50%';
        node.style.left = '50%';
        node.style.transform = `translate(-50%, -50%) rotate(${pos.angle}deg) translateY(-150px) rotate(-${pos.angle}deg)`;
        node.onclick = () => this.selectNode(index, pos.label);
        node.setAttribute('aria-label', `Sacred node ${pos.label}`);
        node.setAttribute('tabindex', '0');
        orbitalContainer.appendChild(node);
      });
      
      // Start orbital rotation
      orbitalContainer.style.animation = 'rotate 30s linear infinite';
    }
  }

  selectNode(index, label) {
    updateAriaLive(`Sacred node ${label} activated`);
    this.highlightNode(index);
  }

  highlightNode(index) {
    const nodes = document.querySelectorAll('.orbital-node');
    nodes.forEach((node, i) => {
      if (i === index) {
        node.style.background = '#C2B280';
        node.style.color = '#7C5E2A';
      } else {
        node.style.background = '#4A773C';
        node.style.color = 'white';
      }
    });
  }

  switchView(view) {
    this.currentView = view;
    updateAriaLive(`Switched to ${view} view`);
    
    // Update active button
    document.querySelectorAll('.dashboard-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update viewport content based on view
    this.updateViewport(view);
  }

  updateViewport(view) {
    const geometry = document.getElementById('sacred-geometry');
    if (!geometry) return;
    
    switch(view) {
      case 'harmonic':
        geometry.style.filter = 'hue-rotate(60deg)';
        break;
      case 'sacred':
        geometry.style.filter = 'hue-rotate(120deg)';
        break;
      default:
        geometry.style.filter = 'none';
    }
  }

  async connectToBackend() {
    try {
      // Simulate backend connection
      const statusIndicator = document.getElementById('status-indicator');
      const statusText = statusIndicator.querySelector('.status-text');
      
      statusText.textContent = 'Connecting to sacred kernel...';
      
      // Simulate connection delay
      setTimeout(() => {
        statusIndicator.classList.remove('offline');
        statusIndicator.classList.add('online');
        statusText.textContent = 'Bridge Active';
        updateAriaLive("Sacred bridge connection established");
        
        this.startDataFlow();
      }, 2000);
      
    } catch (error) {
      console.error('Backend connection failed:', error);
      updateAriaLive("Bridge connection failed. Operating in local mode.");
    }
  }

  startDataFlow() {
    // Simulate real-time data updates
    this.updateResonance();
    this.updateStats();
    
    // Set up periodic updates
    setInterval(() => {
      this.updateResonance();
      this.updateStats();
    }, 5000);
  }

  updateResonance() {
    const resonanceBar = document.getElementById('resonance-bar');
    const resonanceValue = document.getElementById('resonance-value');
    
    if (resonanceBar && resonanceValue) {
      // Simulate harmonic resonance data
      const resonance = Math.floor(Math.random() * 40) + 60; // 60-100%
      resonanceBar.style.width = resonance + '%';
      resonanceValue.textContent = resonance + '%';
    }
  }

  updateStats() {
    const vessels = document.getElementById('active-vessels');
    const pulses = document.getElementById('bridge-pulses');
    const harmony = document.getElementById('harmony-index');
    const updateTime = document.getElementById('update-time');
    
    if (vessels) vessels.textContent = Math.floor(Math.random() * 20) + 5;
    if (pulses) pulses.textContent = Math.floor(Math.random() * 100) + 50;
    if (harmony) harmony.textContent = Math.floor(Math.random() * 20) + 80;
    if (updateTime) updateTime.textContent = formatDateTime(new Date());
  }

  startAnimations() {
    // Pulse animation for center node
    const centerNode = document.querySelector('.center-node');
    if (centerNode) {
      setInterval(() => {
        centerNode.style.boxShadow = '0 4px 20px rgba(124, 94, 42, 0.6)';
        setTimeout(() => {
          centerNode.style.boxShadow = '0 4px 20px rgba(124, 94, 42, 0.3)';
        }, 500);
      }, 3000);
    }
  }

  // Bidirectional communication methods
  async sendPulse(data) {
    try {
      const response = await fetch(`${BACKEND_URL}/pulse`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      console.error('Pulse send failed:', error);
      return { success: false, error: error.message };
    }
  }

  async receivePulse() {
    try {
      const response = await fetch(`${BACKEND_URL}/receive-pulse`);
      return await response.json();
    } catch (error) {
      console.error('Pulse receive failed:', error);
      return { success: false, error: error.message };
    }
  }

  destroy() {
    this.animations.forEach(animation => clearInterval(animation));
    this.animations = [];
    this.dataConnections.clear();
    this.isInitialized = false;
  }
}

// Global instance
let dashboard3D;

// Enhanced initialization function
function initDashboard3D() {
  const container = document.getElementById("dashboard-3d");
  if (container) {
    dashboard3D = new Dashboard3D("dashboard-3d");
    dashboard3D.init();
  }
}

// Keyboard navigation support
document.addEventListener('keydown', (event) => {
  if (!dashboard3D || !dashboard3D.isInitialized) return;
  
  switch(event.key) {
    case '1':
      dashboard3D.switchView('overview');
      break;
    case '2':
      dashboard3D.switchView('harmonic');
      break;
    case '3':
      dashboard3D.switchView('sacred');
      break;
  }
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Dashboard3D, initDashboard3D };
}