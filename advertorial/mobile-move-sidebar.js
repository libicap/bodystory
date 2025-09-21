// Move sidebar-col after cta-container on mobile devices
function moveSidebarColForMobile() {
  var sidebar = document.querySelector('.sidebar-col');
  var cta = document.querySelector('.cta-container');
  if (window.innerWidth <= 768) {
    if (sidebar && cta && cta.nextElementSibling !== sidebar) {
      cta.parentNode.insertBefore(sidebar, cta.nextElementSibling);
    }
  }
}
window.addEventListener('DOMContentLoaded', moveSidebarColForMobile);
window.addEventListener('resize', moveSidebarColForMobile);
