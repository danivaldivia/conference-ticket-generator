document.addEventListener("DOMContentLoaded", () => {
  const data = new URLSearchParams(window.location.search);
  const userName = data.get("fullname");
  const userEmail = data.get("email");
  const userGitHub = data.get("github");

  document.querySelector(".intro__title").textContent =
    `Congrats, ${userName}! Your ticket is ready.`;
  document.querySelector(".intro__description").textContent =
    `We've emailed your ticket to ${userEmail}.com and will send updates in the run up to the event.`;
});
