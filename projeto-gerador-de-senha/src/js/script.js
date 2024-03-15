const inputElement = document.querySelector("#password");
let passwordLength = 16;

function generatePassword() {
  const chars =
    "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]";

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);

    inputElement.value = password;
  }
}

function copyPassword() {
  navigator.clipboard.writeText(inputElement.value);
}

const passwordLengthElement = document.querySelector("#password-length");
passwordLengthElement.addEventListener("input", function () {
  passwordLength = passwordLengthElement.value;
  generatePassword();
});

const copyButtonElement = document.querySelector("#copy-password");
copyButtonElement.addEventListener("click", copyPassword);

generatePassword();
