const header = document.querySelector(".header-fixed");
const headerTransparent = document.querySelector(".header-transparent");
const headerHeight = header.offsetHeight;

function debounce(func, wait = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

let toggleHeaderClass = function () {
  scrollpos = window.scrollY;
  if (scrollpos >= headerHeight) {
    header.classList.add("header-scrolled");
    if (headerTransparent) {
      header.classList.remove("header-transparent");
    }
  } else {
    header.classList.remove("header-scrolled");
    if (headerTransparent) {
      header.classList.add("header-transparent");
    }
  }
};

if (header) {
  window.addEventListener("scroll", toggleHeaderClass);
}
