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

  const image = document.createElement("span");
  image.classList.add("hint__icon");

  fetch("./assets/images/important-icon.svg")
    .then((res) => res.text())
    .then((svg) => {
      image.innerHTML = svg;

      const svgElement = image.querySelector("svg");

      svgElement.querySelectorAll("path[stroke]").forEach((path) => {
        path.setAttribute("stroke", "var(--orange-500)");
      });

      svgElement.setAttribute("width", "16");
      svgElement.setAttribute("height", "16");
    });

  const error = document.createElement("p");
  error.textContent = errorMessage;
  error.classList = "hint__message";
  error.style.color = "var(--orange-500)";

  const message = document.createElement("div");
  message.classList = "hint";
  message.appendChild(image);
  message.appendChild(error);
  message.classList.add("input-alert");

  reference.appendChild(message);
}
