import { showInputAlert, clearInputAlert } from "../utils/dom-helpers.js";
import {
  validateEmail,
  validateUser,
  validateGithub,
} from "../utils/validators.js";
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
  const input = [
    {
      element: inputEmail,
      validator: validateEmail,
      msg: (el) => `Please enter a valid ${el.id} address`,
    },
    {
      element: inputGitHub,
      validator: validateGithub,
      msg: (el) => `Please enter a valid ${el.id} user (e.g. @username)`,
    },
    {
      element: inputFullName,
      validator: validateUser,
      msg: (el) => `Please enter a valid ${el.id}`,
    },
  ];

  input.forEach(({ element, validator, msg }) => {
    const errorMsg = msg(element);
    element.addEventListener("blur", (e) => {
      validateInput(e, validator, errorMsg);
    });
    element.addEventListener("input", (e) => {
      validateInput(e, validator, errorMsg);
    });
  });
}
