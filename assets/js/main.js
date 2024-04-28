//dynamic navbar
let nav = document.querySelector(".navigation_wrapper");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll_on");
  } else {
    nav.classList.remove("scroll_on");
  }
};

//hide collapse able navbar
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse");
navBar.forEach(function (singleLink) {
  singleLink.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
