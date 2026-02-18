export const inputEmail = document.querySelector("#email");
export const inputGitHub = document.querySelector("#github");

export const svgAlert = document.querySelector("#file-error");
export const inputAvatar = document.querySelector("#avatar");
export const messageAvatar = document.querySelector("#avatar-required");
export const maxSize = 200 * 1024;
export const originalMessageText =
  document.querySelector("#avatar-required").textContent;
export const originalMessageColor = getComputedStyle(messageAvatar).color;

export const previewSvg = document.querySelector("#preview-svg");
export const previewImg = document.querySelector("#preview-img");
