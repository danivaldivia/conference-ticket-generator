/* eslint-disable no-console */
import {
  inputAvatar,
  maxSize,
  originalMessageText,
  originalMessageColor,
  previewSvg,
  previewImg,
  svgAlert,
  messageAvatar,
  uploadDrag,
  uploadStatus,
  removeBtn,
} from "../constants/selectors.js";

function sizeAlert(strokeColor, alertMessage, alertColor) {
  svgAlert.querySelectorAll("path[stroke]").forEach((path, index) => {
    if (index === 1 || index === 2) {
      path.setAttribute("stroke", strokeColor);
    }

    messageAvatar.textContent = alertMessage;
    messageAvatar.style.color = alertColor;
  });
}

function removeAvatar() {
  inputAvatar.value = "";
  previewImg.src = "";
  previewImg.hidden = true;
  previewSvg.hidden = false;
  uploadStatus.hidden = true;
  uploadDrag.hidden = false;
}

function validPreview(e) {
  const file = e.target.files[0];
  if (!file) {
    return;
  }
  if (!file.type.startsWith("image/")) {
    return;
  }

  const fileSize = file.size;
  const fileType = file.type;

  if (file) {
    console.log(`Peso: ${(fileSize / 1024).toFixed(2)} KB`);
    console.log(`Formato: ${fileType}`);
  }

  if (fileSize > maxSize) {
    sizeAlert(
      "var(--orange-500)",
      "File too large. Please upload a photo under 500KB.",
      "var(--orange-500)",
    );
  } else {
    sizeAlert("currentColor", originalMessageText, originalMessageColor);

    const reader = new FileReader();
    reader.onload = () => {
      previewImg.src = reader.result;
      previewImg.hidden = false;
      previewSvg.hidden = true;

      uploadStatus.hidden = false;
      uploadDrag.hidden = true;
    };

    reader.readAsDataURL(file);
  }
}

export function initPreview() {
  inputAvatar.addEventListener("change", validPreview);
  removeBtn.addEventListener("click", removeAvatar);
}
