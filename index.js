import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;

    // Generate QR image stream
    const qr_svg = qr.image(url);

    // Save QR image to file
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    // Save URL to a text file
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("✅ URL saved to URL.txt!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("❌ Terminal can't render prompt.");
    } else {
      console.error("❌ Unexpected error:", error);
    }
  });
