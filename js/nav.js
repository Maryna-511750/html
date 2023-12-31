const iconBurger = document.querySelector(".navigation_burger");
const navigationsBody = document.querySelector(".navigation_wrapper");
iconBurger.addEventListener("click", function () {
  document.body.classList.toggle("lock");
  iconBurger.classList.toggle("active");
  navigationsBody.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".navigation_link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (_) => {
    if (iconBurger.classList.contains("active")) {
      document.body.classList.remove("lock");
      iconBurger.classList.remove("active");
      navigationsBody.classList.remove("active");
    }
  });
});