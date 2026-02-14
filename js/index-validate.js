import {
  validateEmail,
  showInputAlert,
  clearInputAlert,
} from "./validate-functions.js";

import { inputEmail, inputGitHub } from "./selectors.js";

document.addEventListener("DOMContentLoaded", function () {
  inputEmail.addEventListener("blur", validateInput);
  inputGitHub.addEventListener("blur", validateInput);

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
});
