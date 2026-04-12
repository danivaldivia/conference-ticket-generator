document.addEventListener("DOMContentLoaded", () => {
  const data = new URLSearchParams(window.location.search);
  const userName = data.get("fullname");
  const userEmail = data.get("email");

  document.querySelector("#user-name").textContent = `${userName}!`;
  document.querySelector("#user-email").textContent = userEmail;
});
