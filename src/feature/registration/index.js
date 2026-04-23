import { initPreview, syncAvatar } from "../registration/services/preview.js";
import {
  initValidation,
  syncInputs,
} from "../registration/services/validation.js";

document.addEventListener("DOMContentLoaded", () => {
  initPreview();
  initValidation();
});

window.addEventListener("pageshow", () => {
  syncInputs();
  syncAvatar();
});
