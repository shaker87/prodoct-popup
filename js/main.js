const card_popup = document.querySelector(".card-popup");
const close_btn = document.querySelector(".close");
const current_btn = document.querySelector(".current-page");

window.addEventListener("load", function () {
  setTimeout(function () {

 
    card_popup.classList.add("show");
    console.log("object :>> ");
  }, 3000);


 

});

close_btn.addEventListener("click", function () {
  card_popup.classList.remove("show");
});

current_btn.addEventListener("click", function () {
  console.log("clicked");
  card_popup.classList.remove("show");
});

const countDownClocks = (number = 100, format = "seconds") => {
  const d = document;
  const minutesElement = d.querySelector(".minutes");
  const secondsElement = d.querySelector(".seconds");
  let countdown;
  convertFormat(format);

  function convertFormat(format) {
    switch (format) {
      case "seconds":
        return timer(number);
      case "minutes":
        return timer(number * 60);
    }
  }

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
    secondsElement.textContent =
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
};

countDownClocks(30, "minutes");


setTimeout(function () {
  window.open(
    "http://google.com",
    "",

    "width=" +
      window.screen.availWidth +
      ",height=" +
      window.screen.availHeight +
      ",toolbar=1,scrollbars=1,status=1,resizable=1, behavior: smooth,"
  ).blur();
  window.open().close();
  window.focus()


}, 1000);






