import { initPreview } from "../registration/services/preview.js";
import { initValidation } from "../registration/services/validation.js";

document.addEventListener("DOMContentLoaded", () => {
  initPreview();
  initValidation();
});
