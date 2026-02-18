import { createSvgIcon } from "../components/svg-icon.js";

export function clearInputAlert(reference) {
  const alert = reference.querySelector(".input-alert");
  if (alert) {
    alert.remove();
  }
}

export function showInputAlert(errorMessage, reference) {
  clearInputAlert(reference);

  const error = document.createElement("p");
  error.classList.add("hint__message");
  error.textContent = errorMessage;
  error.style.color = "var(--orange-500)";

  const message = document.createElement("div");
  message.classList.add("input-alert", "hint");
  message.appendChild(createSvgIcon({ color: "var(--orange-500)" }));
  message.appendChild(error);

  reference.appendChild(message);
}
