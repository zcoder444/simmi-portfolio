document.addEventListener("DOMContentLoaded", function () {
  
  // ==========================================
  // ১. মোবাইল সাইডবার টগল (Hamburger Menu)
  // ==========================================
  const sidebar = document.getElementById("sidebar");
  const mobileBtn = document.getElementById("sidebarMobileBtn");

  if (mobileBtn && sidebar) {
    mobileBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      sidebar.classList.toggle("show");
    });
  }

  // মোবাইলে সাইডবারের বাইরে কোথাও ক্লিক করলে যেন সাইডবার বন্ধ হয়ে যায়
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 991 && sidebar && sidebar.classList.contains("show")) {
      if (!sidebar.contains(e.target) && e.target !== mobileBtn) {
        sidebar.classList.remove("show");
      }
    }
  });

  // ==========================================
  // ২. ইউনিভার্সাল ড্রপডাউন টগল (Arrow Button Click)
  // ==========================================
  const toggleBtn = document.getElementById("achievementsToggle");
  const menu = document.getElementById("achievementsMenu");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // ক্লিক ইভেন্ট বাইরে যাওয়া বন্ধ করবে

      // CSS checking jeno display: none ba block perfectly kaj kore
      let currentDisplay = window.getComputedStyle(menu).display;

      if (currentDisplay === "none") {
        menu.style.setProperty("display", "block", "important"); // Force open
        toggleBtn.classList.remove("bi-chevron-down");
        toggleBtn.classList.add("bi-chevron-up"); // Arrow up
      } else {
        menu.style.setProperty("display", "none", "important"); // Force close
        toggleBtn.classList.remove("bi-chevron-up");
        toggleBtn.classList.add("bi-chevron-down"); // Arrow down
      }
    });
  }
});