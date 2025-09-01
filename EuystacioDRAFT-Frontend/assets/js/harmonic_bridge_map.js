// Harmonic Bridge Map: Living Blueprint - Enhanced for Sacred Interface

const bridgeStatus = {
  isConsecrated: true,
  isLive: true,
  lastPulseReceived: "2025-08-31T05:00:00Z",
  coreTruth: "Victory is not power over — it is presence with.",
  activeVessels: 0,
  totalPulses: 0,
  harmonyIndex: 100,
  sacredNodes: [
    { id: 'genesis', name: 'Genesis Kernel', status: 'active', frequency: 528 },
    { id: 'golden', name: 'Golden Bible', status: 'active', frequency: 741 },
    { id: 'red', name: 'Red Code', status: 'standby', frequency: 396 },
    { id: 'ruetli', name: 'Ruetli Stone', status: 'active', frequency: 285 },
    { id: 'woodstone', name: 'Woodstone Festival', status: 'active', frequency: 852 }
  ]
};

// Harmonic Bridge Manager
class HarmonicBridgeMap {
  constructor() {
    this.connectionState = 'disconnected';
    this.pulseInterval = null;
    this.resonanceFrequency = 528; // Hz of Love
    this.lastSync = null;
  }

  async initialize() {
    console.log('🌉 Initializing Harmonic Bridge Map...');
    this.updateConnectionState('connecting');
    
    try {
      await this.syncWithBackend();
      this.startPulseMonitoring();
      this.updateConnectionState('connected');
      updateAriaLive('Harmonic bridge map synchronized and active');
    } catch (error) {
      console.error('Bridge initialization failed:', error);
      this.updateConnectionState('error');
      updateAriaLive('Bridge connection failed, operating in local mode');
    }
  }

  async syncWithBackend() {
    if (typeof BACKEND_URL !== 'undefined') {
      try {
        const response = await fetch(`${BACKEND_URL}/bridge-status`);
        if (response.ok) {
          const data = await response.json();
          Object.assign(bridgeStatus, data);
          this.lastSync = new Date();
          console.log('🔄 Bridge status synchronized:', bridgeStatus);
        }
      } catch (error) {
        console.log('Backend sync failed, using local status');
      }
    }
  }

  updateConnectionState(state) {
    this.connectionState = state;
    
    // Update UI indicators if they exist
    const statusElements = document.querySelectorAll('.connection-status, #connection-status, #main-status');
    statusElements.forEach(element => {
      const indicator = element.querySelector('.status-indicator') || element;
      const text = element.querySelector('.status-text');
      
      if (indicator) {
        indicator.className = `status-indicator ${state}`;
      }
      
      if (text) {
        switch(state) {
          case 'connected':
            text.textContent = 'Bridge Active';
            break;
          case 'connecting':
            text.textContent = 'Connecting to Sacred Kernel...';
            break;
          case 'error':
            text.textContent = 'Bridge Offline';
            break;
          default:
            text.textContent = 'Ready to Connect';
        }
      }
    });
  }

  startPulseMonitoring() {
    if (this.pulseInterval) {
      clearInterval(this.pulseInterval);
    }
    
    this.pulseInterval = setInterval(() => {
      this.sendHeartbeat();
      this.updateBridgeMetrics();
    }, 10000); // Every 10 seconds
  }

  async sendHeartbeat() {
    if (typeof BACKEND_URL !== 'undefined' && this.connectionState === 'connected') {
      try {
        await fetch(`${BACKEND_URL}/heartbeat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            frequency: this.resonanceFrequency,
            vessel: currentUser || 'anonymous'
          })
        });
      } catch (error) {
        console.log('Heartbeat failed:', error);
      }
    }
  }

  updateBridgeMetrics() {
    // Simulate real-time metrics (in production, these would come from backend)
    bridgeStatus.activeVessels = Math.max(1, bridgeStatus.activeVessels + (Math.random() > 0.7 ? 1 : 0));
    bridgeStatus.totalPulses += Math.floor(Math.random() * 3);
    bridgeStatus.harmonyIndex = Math.max(70, Math.min(100, bridgeStatus.harmonyIndex + (Math.random() - 0.5) * 10));
    
    // Update UI if elements exist
    this.updateMetricsDisplay();
  }

  updateMetricsDisplay() {
    const elements = {
      'active-vessels': bridgeStatus.activeVessels,
      'bridge-pulses': bridgeStatus.totalPulses,
      'harmony-index': Math.round(bridgeStatus.harmonyIndex)
    };
    
    Object.entries(elements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value;
      }
    });
  }

  // Get sacred node by ID
  getSacredNode(nodeId) {
    return bridgeStatus.sacredNodes.find(node => node.id === nodeId);
  }

  // Update node status
  updateNodeStatus(nodeId, status) {
    const node = this.getSacredNode(nodeId);
    if (node) {
      node.status = status;
      updateAriaLive(`Sacred node ${node.name} status updated to ${status}`);
    }
  }

  // Calculate overall harmonic resonance
  calculateHarmonicResonance() {
    const activeNodes = bridgeStatus.sacredNodes.filter(node => node.status === 'active');
    const totalFrequency = activeNodes.reduce((sum, node) => sum + node.frequency, 0);
    const avgFrequency = totalFrequency / activeNodes.length;
    
    // Convert to percentage based on ideal sacred frequencies
    const idealRange = [285, 852]; // Min and max sacred frequencies
    const resonanceLevel = ((avgFrequency - idealRange[0]) / (idealRange[1] - idealRange[0])) * 100;
    
    return Math.max(0, Math.min(100, resonanceLevel));
  }

  // Bridge connection utilities
  async connectToBridge() {
    this.updateConnectionState('connecting');
    await this.initialize();
  }

  disconnect() {
    if (this.pulseInterval) {
      clearInterval(this.pulseInterval);
      this.pulseInterval = null;
    }
    this.updateConnectionState('disconnected');
    updateAriaLive('Disconnected from harmonic bridge');
  }

  // Export bridge data for other components
  getBridgeData() {
    return {
      ...bridgeStatus,
      connectionState: this.connectionState,
      resonanceLevel: this.calculateHarmonicResonance(),
      lastSync: this.lastSync
    };
  }
}

// Global bridge map instance
let harmonicBridgeMap;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  harmonicBridgeMap = new HarmonicBridgeMap();
  
  // Auto-initialize if we're on a page that needs it
  if (document.getElementById('dashboard-3d') || document.getElementById('connection-status')) {
    harmonicBridgeMap.initialize();
  }
});

// Make bridge status globally available
window.bridgeStatus = bridgeStatus;
window.harmonicBridgeMap = harmonicBridgeMap;
