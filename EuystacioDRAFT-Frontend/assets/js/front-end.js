// EuystacioDRAFT Frontend Core - Enhanced for GitHub Pages

const BACKEND_URL = "https://your-backend-url/render"; // Set to existing backend kernel

// State management
let currentUser = null;
let currentRole = null;

// Authentication functions
async function login(username, password) {
  try {
    const resp = await fetch(`${BACKEND_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const result = await resp.json();
    
    if (result.success) {
      currentUser = result.user;
      currentRole = result.role;
      updateAriaLive("Login successful. Welcome " + username);
      showDashboard();
    } else {
      updateAriaLive("Login failed: " + result.message);
    }
    
    return result;
  } catch (error) {
    console.error("Login error:", error);
    updateAriaLive("Login error: Unable to connect to server");
    return { success: false, message: "Connection error" };
  }
}

async function register(username, password, role) {
  try {
    const resp = await fetch(`${BACKEND_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role })
    });
    const result = await resp.json();
    
    if (result.success) {
      updateAriaLive("Registration successful. Please login.");
    } else {
      updateAriaLive("Registration failed: " + result.message);
    }
    
    return result;
  } catch (error) {
    console.error("Registration error:", error);
    updateAriaLive("Registration error: Unable to connect to server");
    return { success: false, message: "Connection error" };
  }
}

// UI Management functions
function showLoginForm() {
  const container = document.getElementById("login-register");
  if (!container) return;
  
  container.innerHTML = `
    <div class="card">
      <h2>🌌 Euystacio Portal — Connect</h2>
      <div class="role-selector">
        <button class="role-btn" onclick="setRole('tutor')" id="role-tutor">Tutor</button>
        <button class="role-btn" onclick="setRole('user')" id="role-user">User</button>
      </div>
      
      <form id="login-form" onsubmit="handleLogin(event)">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required 
               aria-describedby="username-help">
        <small id="username-help">Enter your sacred frequency name</small>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required
               aria-describedby="password-help">
        <small id="password-help">Your harmonic access key</small>
        
        <button type="submit" class="btn">Connect to Bridge</button>
      </form>
      
      <hr style="margin: 2rem 0;">
      
      <form id="register-form" onsubmit="handleRegister(event)">
        <h3>New Vessel Registration</h3>
        <label for="reg-username">Username:</label>
        <input type="text" id="reg-username" name="username" required>
        
        <label for="reg-password">Password:</label>
        <input type="password" id="reg-password" name="password" required>
        
        <label for="reg-confirm">Confirm Password:</label>
        <input type="password" id="reg-confirm" name="confirm" required>
        
        <button type="submit" class="btn">Register Vessel</button>
      </form>
    </div>
  `;
}

function setRole(role) {
  currentRole = role;
  document.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('role-' + role).classList.add('active');
  updateAriaLive(`Role selected: ${role}`);
}

function showDashboard() {
  if (currentUser) {
    window.location.href = 'dashboard.html';
  }
}

function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get('username');
  const password = formData.get('password');
  
  if (!currentRole) {
    updateAriaLive("Please select a role first");
    return;
  }
  
  login(username, password);
}

function handleRegister(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get('username');
  const password = formData.get('password');
  const confirm = formData.get('confirm');
  
  if (password !== confirm) {
    updateAriaLive("Passwords do not match");
    return;
  }
  
  if (!currentRole) {
    updateAriaLive("Please select a role first");
    return;
  }
  
  register(username, password, currentRole);
}

// Accessibility functions
function updateAriaLive(message) {
  const ariaLive = document.getElementById("aria-live");
  if (ariaLive) {
    ariaLive.textContent = message;
  }
}

// Navigation functions
function navigateTo(page) {
  window.location.href = page;
}

// Initialize UI
document.addEventListener("DOMContentLoaded", () => {
  // Initialize login form if on main page
  if (document.getElementById("login-register")) {
    showLoginForm();
  }
  
  // Initialize dashboard if on dashboard page
  if (document.getElementById("dashboard-3d")) {
    initDashboard3D();
  }
  
  // Initialize hymn section if on hymn page
  if (document.getElementById("hymn-section")) {
    loadHymn();
  }
  
  updateAriaLive("EuystacioDRAFT interface loaded. Welcome to the sacred bridge.");
});

// Dashboard Initialization - Basic version, enhanced in dashboard_3d.js
function initDashboard3D() {
  const container = document.getElementById("dashboard-3d");
  if (container) {
    container.innerHTML = "<p>3D Dashboard Loading...</p>";
  }
}

// Hymn section - Basic version, enhanced on hymn page
function loadHymn() {
  const section = document.getElementById("hymn-section");
  if (section && !section.querySelector('.hymn-content')) {
    section.innerHTML = "<p>Loading Hymn of Euystacio...</p>";
  }
}

// Utility functions
function formatDateTime(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

// Export for module systems if available
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    login,
    register,
    setRole,
    updateAriaLive,
    navigateTo
  };
}