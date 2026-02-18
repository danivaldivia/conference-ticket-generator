import { showInputAlert, clearInputAlert } from "../helpers/dom-helpers.js";
import { validateEmail } from "../helpers/validators.js";

import { inputEmail, inputGitHub } from "../constants/selectors.js";

function validateInput(e) {
  if (e.target.value.trim() === "") {
    showInputAlert(
      `Please enter a valid ${e.target.id} address.`,
      e.target.parentElement,
    );
    return;
  }

  if (e.target.id === "email" && !validateEmail(e.target.value)) {
    showInputAlert(e.target.parentElement);
    return;
  }

  clearInputAlert(e.target.parentElement);
}

export function initValidation() {
  inputEmail.addEventListener("blur", validateInput);
  inputGitHub.addEventListener("blur", validateInput);
}
