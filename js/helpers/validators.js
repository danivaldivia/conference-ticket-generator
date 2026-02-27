export function validateEmail(email) {
  const emailPattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const result = emailPattern.test(email);
  return result;
}
