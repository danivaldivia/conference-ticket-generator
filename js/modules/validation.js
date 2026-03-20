import { showInputAlert, clearInputAlert } from "../helpers/dom-helpers.js";
import { validateEmail, validateUser } from "../helpers/validators.js";
import {
  inputEmail,
  inputGitHub,
  inputFullName,
  btnSubmit,
} from "../constants/selectors.js";

import { checkRegistration } from "../constants/input.js";

function validateInput(event, validator, errorMessage) {
  const value = event.target.value;
  const container = event.target.parentElement;

  if (value.trim() === "" || !validator(value)) {
    showInputAlert(errorMessage, container);
    checkRegistration[event.target.name] = "";
    validateRegistration();
    return;
  } else {
    clearInputAlert(container);
    checkRegistration[event.target.name] = value.trim().toLowerCase();
  }

  validateRegistration();
}

export function validateRegistration() {
  if (Object.values(checkRegistration).includes("")) {
    btnSubmit.classList.add("registartion__submit--disabled");
    btnSubmit.disabled = true;
  } else {
    btnSubmit.classList.remove("registartion__submit--disabled");
    btnSubmit.disabled = false;
  }
}

export function initValidation() {
  inputEmail.addEventListener("blur", (e) =>
    validateInput(
      e,
      validateEmail,
      `Please enter a valid ${e.target.id} address`,
    ),
  );
  inputGitHub.addEventListener("blur", (e) =>
    validateInput(e, validateUser, `Please enter a valid ${e.target.id} user`),
  );
  inputFullName.addEventListener("blur", (e) =>
    validateInput(e, validateUser, `Please enter a valid ${e.target.id}`),
  );
}
