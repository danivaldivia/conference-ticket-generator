import { initPreview } from "./modules/preview.js";
import { initValidation } from "./modules/validation.js";

document.addEventListener("DOMContentLoaded", () => {
  initPreview();
  initValidation();
});
