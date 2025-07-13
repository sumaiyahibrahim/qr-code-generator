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

## TL;DR
- Use **npm** when you want to _install_ and _reuse_.
- Use **npx** when you just want to _run and forget_.
---

### ✅ Use `npx` when you just want to _run and forget_:

- No installation required
- Always runs the latest version
- Great for quick, one-time use

```bash
npx qr-from-url
```
---

##  ✅ Use npm when you want to install and reuse: ( Installation & Usage )

### 1. Install globally
```bash
npm install -g qr-from-url
```

Now run the CLI with:
```bash
qr-from-url
```
### 2. Try instantly without installing
```bash
npx qr-from-url
```
### 💡 How it works
Upon running, you'll be prompted:
```bash
Type in your URL: https://open.spotify.com
```
###  Example Output
```text
- QR code saved as 'qr_img.png'
- URL saved to 'URL.txt'
```



### 📦 Packages Used

| Package   | Description                                      |
|-----------|--------------------------------------------------|
| `inquirer`  | Interactive command-line prompts               |
| `qr-image`  | Generate QR code images in PNG/SVG             |
| `fs`        | Node.js built-in file system module            |



---

## 📌 Notes
- To prevent output files from being tracked in Git, you can create a `.gitignore`:
```bash
URL.txt
qr_img.png
node_modules/
```
- The terminal prompt and file names are customizable in `index.js`.
---
## 🤝 Contributing

Loved this project?

Want new features or improvements? Feel free to **fork** the repo or send a **pull request**. I'm happy to collaborate!

## 🔗 Links & References

- **npm:** [qr-from-url](https://www.npmjs.com/package/qr-from-url)  
- **GitHub:** [github.com/sumaiyahibrahim/qr-code-generator](https://github.com/sumaiyahibrahim/qr-code-generator)
---
### 📜 License
### ✅ How to Add This to GitHub:

1. Replace your current `README.md` with the **exact content above**.
2. Save it.
3. Run the following in your terminal:

```bash
git add README.md
git commit -m "Update README with npm installation info and badges"
git push
```
---
**Sumaiyah Ibrahim**  
A simple CLI project to practice Node.js and build confidence using real-world tools.
