# 🔳 QR Code Generator CLI

A simple Node.js command-line tool that generates a QR code image from any URL entered by the user. It also saves the original URL to a text file for reference.

---

## 🚀 Features

- ✨ User-friendly command-line prompt using **Inquirer**
- 📷 Generates a QR code image using **qr-image**
- 💾 Saves the URL to a `.txt` file
- 🔧 Built with modern **ES Modules** and clean JavaScript

---

## 📸 Demo

> After you run the program, it generates a file like this:

![QR Code Preview](./qr_img.png)

---

## 📂 Project Structure

qr-code-generator/
├── index.js # Main script
├── package.json # Project config & dependencies
├── URL.txt # Saved user URL (auto-created)
├── qr_img.png # Generated QR image (auto-created)
└── README.md # This file


---

## 🛠️ Installation & Usage

### 1. Clone the repository

```bash
git clone https://github.com/YourUsername/qr-code-generator.git
cd qr-code-generator

2. Install dependencies
bash
Copy code
npm install

3. Run the app
bash
Copy code
node index.js
Then type your URL when prompted, like:

nginx
Copy code
Type in your URL: https://openai.com


📦 Packages Used
Package	Description
inquirer	Interactive command-line prompts
qr-image	Generate QR code images in PNG/SVG
fs	Node's built-in file system module

---

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
This project is open-source and free to use.

👩‍💻 Made by Sumaiyah Ibrahim
A beginner-friendly project to build confidence with Node.js and CLI tools.

Feel free to ⭐ this repo if you found it helpful!

yaml
Copy code

---

### ✅ Final Step

Now in VS Code:
1. Right-click your project folder → **New File** → `README.md`
2. Paste the full content above
3. Save ✅
4. Run these in terminal:

```bash
git add README.md
git commit -m "Add README with full project details"
git push

### ✅ What You Should Do Now:

1. Create a file in VS Code called `README.md`
2. Paste the above content
3. Edit the GitHub link (`https://github.com/YourUsername/...`) to your actual repo
4. Commit it:

```bash
git add README.md
git commit -m "Add custom project README"
git push
