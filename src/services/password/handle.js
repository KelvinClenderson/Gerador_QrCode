// imports...
import permittedCharacters from "./utils/permittedCharacters.js";

// Code...
async function handle() {
  let characters = [];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;

  characters = await permittedCharacters();

  for (let i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  return password;
}

// Export...
export default handle;
