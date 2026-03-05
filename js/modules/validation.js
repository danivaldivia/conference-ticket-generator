import { showInputAlert, clearInputAlert } from "../helpers/dom-helpers.js";
import { validateEmail } from "../helpers/validators.js";
import {
  inputEmail,
  inputGitHub,
  inputFullName,
  btnSubmit,
} from "../constants/selectors.js";

import { checkRegistration } from "../constants/input.js";

function validateInput(e) {
  if (e.target.value.trim() === "") {
    if (e.target.id === "full-name") {
      showInputAlert(`Please enter a valid name`, e.target.parentElement);
    } else {
      showInputAlert(
        `Please enter a valid ${e.target.id} address`,
        e.target.parentElement,
      );
      checkRegistration[e.target.name] = "";
      validateRegistration();
    }
    return;
  }

  if (e.target.id === "email" && !validateEmail(e.target.value)) {
    showInputAlert(
      `Please enter a valid ${e.target.id} address`,
      e.target.parentElement,
    );
    checkRegistration[e.target.name] = "";
    validateRegistration();
    return;
  }

  clearInputAlert(e.target.parentElement);

  checkRegistration[e.target.name] = e.target.value.trim().toLowerCase();
  validateRegistration();
}

export function validateRegistration() {
  console.log(checkRegistration);
  if (Object.values(checkRegistration).includes("")) {
    btnSubmit.classList.add("registartion__submit--disabled");
    btnSubmit.disabled = true;
  } else {
    btnSubmit.classList.remove("registartion__submit--disabled");
    btnSubmit.disabled = false;
  }
}

export function initValidation() {
  inputEmail.addEventListener("blur", validateInput);
  inputGitHub.addEventListener("blur", validateInput);
  inputFullName.addEventListener("blur", validateInput);
}
