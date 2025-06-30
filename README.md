# 🔳 QR Code Generator CLI

A simple and beginner-friendly Node.js command-line application that generates a QR code image from any URL you enter. It also saves the original URL to a `.txt` file.

---

## 🚀 Features

- ✨ Command-line input using [Inquirer](https://www.npmjs.com/package/inquirer)
- 📷 QR code generation with [qr-image](https://www.npmjs.com/package/qr-image)
- 💾 Saves the QR code image and the original URL
- 📦 Lightweight and easy to use
- ✅ Built with ES Modules and clean code

---

## 📂 Project Structure

```text
qr-code-generator/
├── index.js            # Main script
├── package.json        # Project config & dependencies
├── URL.txt             # Saved user URL (auto-created)
├── qr_img.png          # Generated QR image (auto-created)
└── README.md           # This file
```
---

##  🛠️ Installation & Usage

###1. Clone the repository
```bash
git clone https://github.com/sumaiyahibrahim/qr-code-generator.git
cd qr-code-generator
```

###2. Install dependencies
```bash
npm install
```

###3. Run the app
```bash
node index.js
```

###You will be prompted to enter a URL:
```text
Type in your URL: https://www.openai.com
```

The following files will be generated:

- `qr_img.png`: QR image for the entered URL
- `URL.txt`: Plain text file containing the entered URL
---

### 📦 Packages Used

| Package   | Description                                      |
|-----------|--------------------------------------------------|
| `inquirer`  | Interactive command-line prompts               |
| `qr-image`  | Generate QR code images in PNG/SVG             |
| `fs`        | Node.js built-in file system module            |


### 📄 Example Output
```text
✅ QR code saved as 'qr_img.png'
📝 URL saved to 'URL.txt'
```
---

### 📜 License

### ✅ What to Do Next

1. **Create a file:** `README.md` in your project folder  
2. **Paste the entire content above** into that file  
3. Save it  
4. Run this in terminal:

```bash
git add README.md
git commit -m "Add professional README"
git push
```

###👩‍💻 Author
Sumaiyah Ibrahim
💖 A simple CLI project to practice Node.js and build confidence with real-world tools.
