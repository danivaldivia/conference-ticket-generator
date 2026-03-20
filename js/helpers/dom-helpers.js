import { createSvgIcon } from "../components/svg-icon.js";

export function clearInputAlert(element) {
  const alert = element.querySelector(".input-alert");
  if (alert) {
    alert.remove();
  }
}

export function showInputAlert(errorMessage, element) {
  clearInputAlert(element);

  const error = document.createElement("p");
  error.classList.add("hint__message");
  error.textContent = errorMessage;
  error.style.color = "var(--orange-500)";

  const message = document.createElement("div");
  message.classList.add("input-alert", "hint");
  message.appendChild(
    createSvgIcon({ color: "var(--orange-500)", width: 16, height: 16 }),
  );
  message.appendChild(error);
  element.appendChild(message);
}
