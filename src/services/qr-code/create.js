// imports...
import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

// Code...
async function createQRCode() {
  prompt.get(promptQRCode, handle);
  prompt.start();
}

// Exports...
export default createQRCode;
