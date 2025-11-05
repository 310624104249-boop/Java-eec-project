import { initializeApp } from './app.js';
import { setupEventListeners } from './eventListeners.js';
import { loadDashboard } from './pages/dashboard.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadDashboard(); // Load dashboard by default
});