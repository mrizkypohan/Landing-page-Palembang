// Toggle class active
const navlist = document.querySelector(".nav-list");
// Ketika bar di klik
document.querySelector(".nav-extra").onclick = () => {
  navlist.classList.toggle("active");
};
// Klik diluar sidebar menghilangkan navbar
const bar = document.querySelector(".nav-extra");
document.addEventListener("click", function (e) {
  if (!bar.contains(e.target) && !navlist.contains(e.target)) {
    navlist.classList.remove("active");
  }
});
// Scroll navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
