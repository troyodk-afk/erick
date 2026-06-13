# Erick Troyo - Portfolio Website

This repository contains the source code for Erick Troyo's professional portfolio website. It features interactive sections highlighting professional experience at Meta, Microsoft, Google, Uber, and more, as well as skills, achievements, and an embedded resume PDF.

## 🚀 How to Run Locally

You can run this website locally on your computer in two ways:

1. **Directly**: Double-click [index.html](file:///c:/Users/troyo/Downloads/sitioweb/erick/index.html) to open it in any modern web browser.
2. **Local HTTP Server**: For a more production-like environment (which ensures PDFs and external scripts load correctly), run a local server in this directory:
   - **Using Python**: `python -m http.server 8000` (then open `http://localhost:8000`)
   - **Using Node.js / npx**: `npx serve` or `npm install -g serve` (then run `serve`)

---

## 🌐 How to Host on GitHub Pages

Follow these step-by-step instructions to initialize a Git repository in this folder and host it on GitHub Pages.

### Step 1: Initialize Git and Commit Your Code
Open your terminal (PowerShell, Command Prompt, or Git Bash) in this `erick` folder and run:
```bash
# Initialize a new Git repository
git init

# Add all files to staging
git add .

# Create the initial commit
git commit -m "feat: initial commit of portfolio site"

# Rename the default branch to main
git branch -M main
```

### Step 2: Push to GitHub
1. Go to [GitHub](https://github.com) and sign in.
2. Create a new repository:
   - **Repository name**: `erick` (or whatever you prefer)
   - **Description**: (Optional) Portfolio Website
   - **Public/Private**: Must be **Public** to host on GitHub Pages for free.
   - **Initialize repository with**: Do **not** check any boxes (No README, no gitignore, no license). Leave it empty.
   - Click **Create repository**.
3. Copy the commands under "…or push an existing repository from the command line" and run them in your terminal:
```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```
*(Replace `<your-username>` and `<your-repo-name>` with your actual GitHub username and repository name).*

### Step 3: Enable GitHub Pages
1. Go to your repository page on GitHub.
2. Click on the **Settings** tab (gear icon at the top).
3. In the left sidebar, under the **Code and automation** section, click on **Pages**.
4. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**.
   - **Branch**: Click the dropdown (currently says *None*), select **main**, and keep the folder selection as `/ (root)`.
   - Click **Save**.
5. Wait 1–2 minutes. Refresh the page, and GitHub will provide a message at the top:
   > Your site is live at `https://<your-username>.github.io/<your-repo-name>/`

---

## 📁 Project Structure

- `index.html` — Site layout, sections, content structure.
- `style.css` — Modern styling, variables, colors (dark/light themes), and responsiveness.
- `script.js` — Client-side interactions (theme toggle, mobile menu, experience tab switcher, skills filtering).
- `resume-5.pdf` — CV document shown in the embed viewer and download link.
- `.nojekyll` — Bypasses Jekyll processing to serve files properly.
- `.gitignore` — Ignores local system files and IDE configurations.
