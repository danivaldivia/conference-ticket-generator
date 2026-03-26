document.addEventListener("DOMContentLoaded", () => {
  const data = new URLSearchParams(window.location.search);
  const userName = data.get("fullname");
  const userEmail = data.get("email");

  document.querySelector(".intro").innerHTML = `
    <h1 class="intro__title">Congrats, <span class="intro__title--effect">${userName}!</span> Your ticket is ready.</h1>
    <p class="intro__description">We've emailed your ticket to <span class="intro__title--highlight">${userEmail}</span> and will send updates in the run up to the event.</p>
    `;
});
