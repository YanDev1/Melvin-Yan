// Al final de Productos.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️';
  }
  toggle.addEventListener('click', () => {
    const active = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', active ? 'dark' : 'light');
    toggle.textContent = active ? '☀️' : '🌙';
  });
});
