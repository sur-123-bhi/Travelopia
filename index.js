let menuButton = document.getElementById("dropdownMenuBtn");
let dropdownMenu = document.getElementById("dropdownMenuItemContainer");

menuButton.addEventListener("click", () => {
  dropdownMenu.style.display = "block";
});

let closeButton = document.getElementById("dropdownMenuCloseBtn");
closeButton.addEventListener("click", () => {
  dropdownMenu.style.display = "none";
});
