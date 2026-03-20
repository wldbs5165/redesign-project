const header = document.querySelector("header");
// 함수 header에 html에 있는 header찾아 넣음
// const search = document.querySelector(".search-container");
// const input = document.querySelector("input");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// search.addEventListener("click", () => {
//   search.classList.add("active");
// });
