import { SVGicon } from "./svg-icon.js";

export function validateEmail(email) {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const result = regex.test(email);
  return result;
}

export function clearInputAlert(reference) {
  const alert = reference.querySelector(".input-alert");
  if (alert) {
    alert.remove();
  }
}

export function showInputAlert(errorMessage, reference) {
  clearInputAlert(reference);

  SVGicon();

  const error = document.createElement("p");
  error.classList.add("hint__message");
  error.textContent = errorMessage;
  error.style.color = "var(--orange-500)";

  const message = document.createElement("div");
  message.classList.add("input-alert", "hint");
  message.appendChild(SVGicon({ color: "currentColor" }));
  message.appendChild(error);

  reference.appendChild(message);
}
