const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
      // Clear the hash and scroll to top
      history.replaceState(null, null, window.location.pathname);
      window.scrollTo(0, 0);
  }
});