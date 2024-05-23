// imports...
import chalk from "chalk";
import handle from "./handle.js";

// code...
async function createPassword() {
  console.log(chalk.green("Password"));
  const password = await handle();
  console.log(password);
}

// export
export default createPassword;
