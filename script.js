const button_El = document.getElementById("button-bot"); //Dom element of button bot
const idea_El = document.getElementById("idea");
button_El.addEventListener("click", fetchIdea);
title_El = document.getElementById("title");

function fetchIdea() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.activity);
      idea_El.textContent = data.activity;
      title_El.textContent = "😀 Happy Bot 😀";
      document.body.classList.add("fun");
    });
}
