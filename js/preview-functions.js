import { svgAlert, messageAvatar } from "./selectors.js";

export function sizeAlert(alertMessage, alertColor) {
  svgAlert.querySelectorAll("path[stroke]").forEach((path, index) => {
    if (index === 1 || index === 2) {
      path.setAttribute("stroke", "var(--orange-500)");
    }

    messageAvatar.textContent = alertMessage;
    messageAvatar.style.color = alertColor;
  });
}

export function cleanSizeAlert(originalMessage, originalColor) {
  svgAlert.querySelectorAll("path[stroke]").forEach((path, index) => {
    if (index === 1 || index === 2) {
      path.setAttribute("stroke", "currentColor");
    }

    messageAvatar.textContent = originalMessage;
    messageAvatar.style.color = originalColor;
  });
}
