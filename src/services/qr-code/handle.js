// imports...
import qr from "qrcode-terminal";
import chalk from "chalk";

// code...
async function handle(err, result) {
  if (err) {
    console.log("Error on aplication");
    return;
  }
  const isSmall = result.type == 2;
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso: \n"));
    console.log(qrcode);
  });
}

// Exports...
export default handle;