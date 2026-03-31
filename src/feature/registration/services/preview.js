import {
  inputAvatar,
  originalMessageText,
  previewSvg,
  previewImg,
  messageAvatar,
  uploadDrag,
  uploadStatus,
  removeBtn,
  originalMessageColor,
  hintContainer,
} from "../constants/selectors.js";
import { showInputAlert } from "../utils/dom-helpers.js";
import { MAX_FILE_SIZE, ALLOWED_FILES_TYPES } from "../constants/file-form.js";
import { validateRegistration } from "../services/validation.js";
import { checkRegistration } from "../constants/input.js";

function sizeAlert(alertMessage, alertColor, messageColor) {
  hintContainer.classList.remove("hint--error");
  messageAvatar.textContent = alertMessage;
  messageAvatar.style.color = messageColor;
  hintContainer.classList.add(alertColor);
}

function removeAvatar() {
  inputAvatar.value = "";
  previewImg.src = "";
  previewImg.hidden = true;
  previewSvg.hidden = false;
  uploadStatus.hidden = true;
  uploadDrag.hidden = false;
  checkRegistration.avatar = "";
  validateRegistration();
}

function validPreview(e) {
  const file = e.target.files[0];

  if (!file) {
    return;
  }

  if (!ALLOWED_FILES_TYPES.includes(file.type)) {
    showInputAlert("Invalid format", e.target.parentElement);
    return;
  }

  const fileSize = file.size;
  if (fileSize > MAX_FILE_SIZE) {
    sizeAlert(
      "File too large. Please upload a photo under 500KB.",
      "hint--error",
    );
  } else {
    sizeAlert(originalMessageText, "hint", originalMessageColor);

    const reader = new FileReader();
    reader.onload = () => {
      previewImg.src = reader.result;
      previewImg.hidden = false;
      previewSvg.hidden = true;

      uploadStatus.hidden = false;
      uploadDrag.hidden = true;
    };

    reader.readAsDataURL(file);

    checkRegistration.avatar = "";
    validateRegistration();
  }

  checkRegistration.avatar = file.name;
  validateRegistration();
}

export function initPreview() {
  inputAvatar.addEventListener("change", validPreview);
  removeBtn.addEventListener("click", removeAvatar);
}
