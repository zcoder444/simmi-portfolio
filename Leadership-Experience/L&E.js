document.addEventListener('DOMContentLoaded', function () {

  // ---------- Mobile sidebar toggle ----------
  const sidebar = document.getElementById('sidebar');
  const mobileBtn = document.getElementById('sidebarMobileBtn');

  mobileBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show');
  });

  // close sidebar on link click (mobile)
  document.querySelectorAll('.sidebar-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 991) {
        sidebar.classList.remove('show');
      }
    });
  });

  // ---------- Achievements dropdown ----------
  const achievementsToggle = document.getElementById('achievementsToggle');
  const achievementsMenu = document.getElementById('achievementsMenu');

  achievementsToggle.addEventListener('click', function () {
    achievementsMenu.classList.toggle('show');
    const icon = achievementsToggle.querySelector('i');
    icon.classList.toggle('bi-chevron-down');
    icon.classList.toggle('bi-chevron-up');
  });

});