export function validateEmail(email) {
  const emailPattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const result = emailPattern.test(email);
  return result;
}

export function validateUser(userName) {
  return typeof userName === "string" && userName.trim() !== "";
}

export function validateGithub(userGithub) {
  const userPattern = /^@[a-zA-Z0-9_]+/;
  const result = userPattern.test(userGithub);
  return result;
}
