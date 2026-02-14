import { sizeAlert, cleanSizeAlert } from "./preview-functions.js";

import {
  inputAvatar,
  maxSize,
  originalMessageText,
  originalMessageColor,
  previewSvg,
  previewImg,
} from "./selectors.js";

document.addEventListener("DOMContentLoaded", function () {
  inputAvatar.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;

    const fileSize = file.size;
    const fileType = file.type;

    if (file) {
      console.log(`Peso: ${(fileSize / 1024).toFixed(2)} KB`);
      console.log(`Formato: ${fileType}`);
    }

    if (fileSize > maxSize) {
      sizeAlert(
        "File too large. Please upload a photo under 500KB.",
        "var(--orange-500)",
      );
    } else {
      cleanSizeAlert(originalMessageText, originalMessageColor);
      const reader = new FileReader();

      reader.onload = () => {
        previewImg.src = reader.result;
        previewImg.hidden = false;
        previewSvg.hidden = true;
      };

      reader.readAsDataURL(file);
    }
  });
});
