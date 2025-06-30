# 🔳 QR Code Generator CLI

[![Made with Node.js](https://img.shields.io/badge/Made%20with-Node.js-green?logo=node.js)](https://nodejs.org/)
[![Open Source](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![npm packages](https://img.shields.io/badge/npm-inquirer%20%7C%20qr--image-red)](https://www.npmjs.com/)

A simple Node.js command-line tool that generates a QR code image from any URL entered by the user. It also saves the original URL to a text file for reference.

---

## 🚀 Features

- ✨ User-friendly command-line prompt using **Inquirer**
- 📷 Generates a QR code image using **qr-image**
- 💾 Saves the URL to a `.txt` file 
- 🔧 Built with modern **ES Modules** and clean JavaScript

---

## 📂 Project Structure

qr-code-generator/
├── index.js            # Main script
├── package.json        # Project config & dependencies
├── URL.txt             # Saved user URL (auto-created)
├── qr_img.png          # Generated QR image (auto-created)
└── README.md           # This file



---

## 🛠️ Installation & Usage

### 1. Clone the repository

    ```bash
    git clone https://github.com/YourUsername/qr-code-generator.git
    cd qr-code-generator

2. Install dependencies
   ```bash
   Copy code
   npm install
3. Run the app
   ```bash
   Copy code
   node index.js
   
Then type your URL when prompted, like:
    ```text
     Copy code
     Type in your URL: https://www.udemy.com/

## 📦 Packages Used

| Package     | Description                          |
|-------------|--------------------------------------|
| `inquirer`  | Interactive command-line prompts     |
| `qr-image`  | Generate QR code images in PNG/SVG   |
| `fs`        | Node's built-in file system module   |

📌 Output Files
qr_img.png – QR code image for the entered URL

URL.txt – Plain text version of the URL you entered

You can add .gitignore to exclude these from your Git repo.

📥 Example Output
vbnet
Copy code
✅ QR code saved as 'qr_img.png'
📝 URL saved to 'URL.txt'
🤝 Contributing
If you'd like to improve this tool or add features (like custom file names or SVG support), feel free to fork it and send a pull request!

💡 Future Ideas
Let user choose image format (PNG/SVG)

Support batch URL QR generation

Add a web version using Express

📄 License
This project is open-source and free to use under the MIT License.


