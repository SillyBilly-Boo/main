// Theme Switcher

const userPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
const currentTheme = localStorage.getItem('theme') ?? userPref;
const toggle = document.querySelector('#theme-toggle');

// If JavaScript is enabled, the toggle will become available.
toggle.style.display = "block";

if (currentTheme) {
  document.documentElement.setAttribute('theme', currentTheme);
}

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Darkmode toggle
  const toggleSwitch = document.querySelector('#theme-switch')

  // listen for toggle
  toggleSwitch.addEventListener('change', switchTheme, false)

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true
  }
})
