import { showInputAlert, clearInputAlert } from "../helpers/dom-helpers.js";
import { validateEmail } from "../helpers/validators.js";
import {
  inputEmail,
  inputGitHub,
  inputFullName,
} from "../constants/selectors.js";

function validateInput(e) {
  if (e.target.value.trim() === "") {
    if (e.target.id === "full-name") {
      showInputAlert(`Please enter a valid name`, e.target.parentElement);
    } else {
      showInputAlert(
        `Please enter a valid ${e.target.id} address`,
        e.target.parentElement,
      );
    }
    return;
  }

  if (e.target.id === "email" && !validateEmail(e.target.value)) {
    showInputAlert(
      `Please enter a valid ${e.target.id} address`,
      e.target.parentElement,
    );
    return;
  }

  clearInputAlert(e.target.parentElement);
}

export function initValidation() {
  inputEmail.addEventListener("blur", validateInput);
  inputGitHub.addEventListener("blur", validateInput);
  inputFullName.addEventListener("blur", validateInput);
}
