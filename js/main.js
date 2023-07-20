$(document).ready(function () {
  const intWindow = document.querySelector("#interval-window");
  const closeBtn = document.querySelector("#close-int-win");

  function showIntervalWindow() {
    intWindow.classList.add("interval-window-active");
  }

  closeBtn.addEventListener("click", function () {
    intWindow.classList.remove("interval-window-active");
  });

  // setInterval(showIntervalWindow, 20000);

  const twoLines = document.querySelector("#ext-btn");
  const header = document.querySelector("#header");

  twoLines.addEventListener("click", function () {
    twoLines.classList.toggle("active");
    twoLines.classList.toggle("non-active");
    header.classList.toggle("active");
  });

  //humb
  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const body = document.body;
  const menu = document.querySelector("#menu").cloneNode(1);

  hamb.addEventListener("click", hambHandler);

  function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
  }

  function renderPopup() {
    popup.appendChild(menu);
  }

  const links = Array.from(menu.children);

  links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });

  function closeOnClick(params) {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  }
});

var moreText = document.getElementById("more");
var readMoreLink = document.getElementById("read-more");

readMoreLink.addEventListener("click", function (event) {
  event.preventDefault();
  moreText.classList.toggle("hide");

  if (moreText.classList.contains("hide")) {
    readMoreLink.textContent = "Читать подробнее";
  } else {
    readMoreLink.textContent = " ";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const firstOptionInGoodSelect = document.querySelector(
    ".order .order-form form select option:first-child"
  );

  console.log(firstOptionInGoodSelect, "firstOptionInGoodSelect");

  if (firstOptionInGoodSelect) {
    // Perform any operations you want with the first option here
    // For example, you can add attributes to the first option
    firstOptionInGoodSelect.setAttribute("disabled", "true");
    firstOptionInGoodSelect.setAttribute("selected", "true");
    firstOptionInGoodSelect.setAttribute("hidden", "true");
  }
});
