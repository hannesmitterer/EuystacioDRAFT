// EuystacioDRAFT Frontend Core

const BACKEND_URL = "https://euystacio-ai-q3hh.onrender.com"; // Production backend kernel

async function login(username, password) {
  const resp = await fetch(`${BACKEND_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return await resp.json();
}

// Dashboard Initialization
function initDashboard3D() {
  const container = document.getElementById("dashboard-3d");
  container.innerHTML = "<p>3D Dashboard Placeholder</p>";
}

// Hymn section
function loadHymn() {
  const section = document.getElementById("hymn-section");
  section.innerHTML = "<p>Hymn of Euystacio</p>";
}

// Initialize UI
document.addEventListener("DOMContentLoaded", () => {
  initDashboard3D();
  loadHymn();
});
