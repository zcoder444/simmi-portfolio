document.addEventListener("DOMContentLoaded", function () {
  // ---------- Mobile sidebar toggle ----------
  const sidebar = document.getElementById("sidebar");
  const mobileBtn = document.getElementById("sidebarMobileBtn");

  if (mobileBtn && sidebar) {
    mobileBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      sidebar.classList.toggle("show");
    });
  }

  // Close sidebar on outside click
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 991 && sidebar && sidebar.classList.contains("show")) {
      if (!sidebar.contains(e.target) && e.target !== mobileBtn) {
        sidebar.classList.remove("show");
      }
    }
  });

  // ---------- Languages Dropdown Logic ----------
  const toggleBtn = document.getElementById("achievementsToggle");
  const menu = document.getElementById("achievementsMenu");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      if (menu.style.display === "none" || window.getComputedStyle(menu).display === "none") {
        menu.style.setProperty("display", "block", "important");
        toggleBtn.classList.remove("bi-chevron-down");
        toggleBtn.classList.add("bi-chevron-up");
      } else {
        menu.style.setProperty("display", "none", "important");
        toggleBtn.classList.remove("bi-chevron-up");
        toggleBtn.classList.add("bi-chevron-down");
      }
    });
  }
});