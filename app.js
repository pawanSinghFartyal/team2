const login = document.getElementById("form_cont");
const sign = document.querySelector(".sign");
const body = document.getElementById("body");
const arrowBtn = document.querySelector(".up_arrow_container");
const visited = document.querySelector(".visited");
const nav = document.getElementById("nav");
const arrow = document.querySelector(".up_arrow_container");
const applynow = document.querySelector(".apply_now");

sign.addEventListener("click", (e) => {
  if (login.classList.contains("form-visible")) {
    login.classList.remove("form-visible");
    body.style.overflow = "scroll";
  } else {
    login.classList.add("form-visible");
    body.style.overflow = "hidden";
  }
});

applynow.addEventListener("click", (e) => {
  if (login.classList.contains("form-visible")) {
    login.classList.remove("form-visible");
    body.style.overflow = "scroll";
  } else {
    login.classList.add("form-visible");
    body.style.overflow = "hidden";
  }
});

body.addEventListener("click", (e) => {
  if (!e.target.closest(".form_cont") && !e.target.closest(".sign") && !e.target.closest(".apply_now")) {
    if (login.classList.contains("form-visible")) {
      login.classList.remove("form-visible");
      body.style.overflow = "scroll";
    }
  }
});

arrowBtn.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.scrollY;
  const navHeight = nav.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
        nav.classList.add("nav-fixed");
        arrow.classList.add("visible");
  }
  else{
    nav.classList.remove("nav-fixed");
    arrow.classList.remove("visible");
  }
});


let visit = localStorage.getItem("visit");
if (!visit) {
  visit = 0;
}

visit = +visit + 1;
localStorage.setItem("visit", visit);
window.addEventListener("load", (e) => {
  visit + 1;
});

visited.innerHTML = `Visited: ${visit} ${visit == 1 ? "Time" : "Times"}`;
