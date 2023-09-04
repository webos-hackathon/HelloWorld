function clickCounter() {
  if (typeof Storage !== "undefined") {
    // Check Local Storage
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }

    // Check Session Storage
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("resultLocal").innerHTML =
      "LOCAL Storage: <lg_red>" +
      localStorage.clickcount +
      "</lg_red> time(s).";
    document.getElementById("resultSession").innerHTML =
      "SESSION Storage: <lg_red>" +
      sessionStorage.clickcount +
      "</lg_red> time(s).";
  } else {
    document.getElementById("resultLocal").innerHTML =
      "Sorry, your browser does not support web storage function.";
    document.getElementById("resultSession").innerHTML =
      "Sorry, your browser does not support web storage function.";
  }
}

window.addEventListener("load", function (e) {
  document
    .getElementById("click_count")
    .addEventListener("click", clickCounter);
  clickCounter();
});
