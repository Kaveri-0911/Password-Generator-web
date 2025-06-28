const passBox = document.getElementById("password");
const len = 12;

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+[]{}|;:,.<>?";

const allChars = upper + lower + number + symbol;

function generatePassword() {
  let password = "";

  password += upper[Math.floor(Math.random() * upper.length)];
  password += lower[Math.floor(Math.random() * lower.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < len) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passBox.value = password;
}

function copyPassword() {
  passBox.select();
  passBox.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passBox.value);
  alert("Password copied to clipboard!");
}
