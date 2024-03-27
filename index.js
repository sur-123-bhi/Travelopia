// Code of snippet for dropdown handling
let menuButton = document.getElementById("dropdownMenuBtn");
let dropdownMenu = document.getElementById("dropdownMenuItemContainer");

menuButton.addEventListener("click", () => {
  dropdownMenu.style.display = "block";
});

let closeButton = document.getElementById("dropdownMenuCloseBtn");
closeButton.addEventListener("click", () => {
  dropdownMenu.style.display = "none";
});

//Hiding dropdown if screen width is greater than 850px
function hideDropdown() {
  if (window.innerWidth > 850 && dropdownMenu.style.display == "block") {
    dropdownMenu.style.display = "none";
  }
}

// Add event listener for window resize
window.addEventListener("resize", hideDropdown);

// Handing open and close events for alert msg
let alertPopupBtn = document.getElementById("alertMsgButton");
let alertPopup = document.getElementById("alert");

alertPopupBtn.addEventListener("click", () => {
  alertPopup.style.display = "block";
  alertPopupBtn.style.visibility = "hidden";
});

let alertCloseBtn = document.getElementById("alertCloseBtn");
alertCloseBtn.addEventListener("click", () => {
  alertPopup.style.display = "none";
  alertPopupBtn.style.visibility = "visible";
});
