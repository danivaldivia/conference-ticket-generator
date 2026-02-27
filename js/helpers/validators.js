export function validateEmail(email) {
  const regex = /^[a-zA-ZÀ-ÿ\s]{2,}\s[a-zA-ZÀ-ÿ\s]{2,}$/;
  const result = regex.test(email);
  return result;
}
