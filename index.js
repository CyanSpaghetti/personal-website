// load-components.js
function loadComponent(id, url, callback) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "/components/header.html");
  loadComponent("sidebar", "/components/sidebar.html", () => {
    const updateLocalTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const timeEl = document.getElementById("local-time");
      if (timeEl) timeEl.textContent = timeString;
    };

    updateLocalTime();
    setInterval(updateLocalTime, 1000);
  });
});
