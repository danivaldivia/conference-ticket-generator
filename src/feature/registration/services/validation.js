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

function performValidation(element, validator, errorMessage) {
  const value = element.value;
  const container = element.parentElement;

  if (value.trim() === "" || !validator(value)) {
    showInputAlert(errorMessage, container);
    checkRegistration[element.name] = "";
  } else {
    clearInputAlert(container);
    checkRegistration[element.name] = value.trim().toLowerCase();
  }
  validateRegistration();
}

function validateInput(event, validator, errorMessage) {
  performValidation(event.target, validator, errorMessage);
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

const inputs = [
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

export function initValidation() {
  inputs.forEach(({ element, validator, msg }) => {
    const errorMsg = msg(element);
    element.addEventListener("blur", (e) => {
      validateInput(e, validator, errorMsg);
    });
    element.addEventListener("input", (e) => {
      validateInput(e, validator, errorMsg);
    });
  });
}

export function syncInputs() {
  inputs.forEach(({ element, validator, msg }) => {
    if (element.value.trim() !== "") {
      performValidation(element, validator, msg(element));
    }
  });
}
