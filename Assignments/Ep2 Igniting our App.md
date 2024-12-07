
### **1. What is `NPM`?**
**NPM (Node Package Manager)** is a package manager for JavaScript. It allows developers to install, manage, and share reusable code libraries or dependencies for their projects. It comes with Node.js and provides:
- A repository of packages.
- A command-line tool to install, manage, and publish packages.

---

### **2. What is `Parcel/Webpack`? Why do we need it?**
**Parcel** and **Webpack** are module bundlers.  
- They process and optimize your code (JavaScript, CSS, HTML, images, etc.) to be ready for deployment.
- They handle splitting, bundling, and transforming files for browser compatibility.

We need them because:
- **Efficiency:** Minimize file size through optimization techniques.
- **Compatibility:** Transpile modern code to ensure it works on older browsers.
- **Convenience:** Automate repetitive tasks like bundling, transpiling, and minifying code.

---

### **3. What is `.parcel-cache`?**
`.parcel-cache` is a directory used by Parcel to store intermediate build results. It speeds up subsequent builds by avoiding redundant processing of files that haven't changed.

---

### **4. What is `npx`?**
**npx** (Node Package Runner) is a command-line tool that comes with NPM. It:
- Runs executable Node packages without installing them globally.
- Useful for one-time package usage, e.g., `npx create-react-app`.

---

### **5. What is the difference between `dependencies` vs `devDependencies`?**
- **Dependencies**: Required for the app to run in production (e.g., React, Express).
- **DevDependencies**: Needed only during development (e.g., testing tools, bundlers like Parcel).

---

### **6. What is Tree Shaking?**
Tree Shaking is a technique to eliminate unused code from the final bundle, making the output smaller and more efficient. It works with ES6 modules because of their static structure.

---

### **7. What is Hot Module Replacement (HMR)?**
HMR allows you to update parts of your application in the browser without reloading the entire page. This makes development faster and more efficient by preserving the application state during updates.

---

### **8. List 5 superpowers of Parcel and describe 3:**
1. **Zero-configuration setup**: No need for manual configuration files.
2. **Built-in HMR**: Automatically updates code changes in the browser.
3. **Code splitting**: Automatically splits code into smaller bundles.
4. **Tree shaking**: Removes unused code.
5. **Fast builds with caching**: Speeds up subsequent builds.

**Descriptions**:  
- **Zero-configuration**: You can get started without setting up a config file, saving time and reducing complexity.  
- **HMR**: Improves development efficiency by instantly updating the app without refreshing.  
- **Code splitting**: Automatically breaks the code into smaller chunks, loading only the necessary parts for faster performance.

---

### **9. What is `.gitignore`? What should we add and not add into it?**
**`.gitignore`** is a file that tells Git which files or directories to ignore in version control.  

**Add into `.gitignore`:**
- `node_modules/`  
- `dist/`  
- `.env` (contains sensitive data like API keys).  

**Do not add**: Source code, configuration files necessary for others to run the project.

---

### **10. What is the difference between `package.json` and `package-lock.json`?**
- **`package.json`**: Contains metadata, scripts, and a list of dependencies for your project.  
- **`package-lock.json`**: Records the exact versions of dependencies and their sub-dependencies to ensure consistent installs.

---

### **11. Why should I not modify `package-lock.json`?**
Modifying `package-lock.json` can lead to:
- Inconsistent dependency resolutions across environments.
- Breaking changes or hard-to-debug issues.

---

### **12. What is `node_modules`? Is it a good idea to push that on Git?**
**`node_modules`** is a directory where all project dependencies are installed.  

**Do not push it to Git** because:
- It increases repository size unnecessarily.
- Dependencies can be restored using `package.json`.

---

### **13. What is the `dist` folder?**
The `dist` (distribution) folder contains the final bundled and optimized code ready for production deployment.

---

### **14. What is `browserslist`?**
**Browserslist** is a configuration to specify browser compatibility for tools like Babel, Autoprefixer, and others. It ensures the code supports specific browser versions.

---

### **15. Read about different bundlers (Vite, Webpack, Parcel).**
Bundlers like **Vite**, **Webpack**, and **Parcel** serve similar purposes but differ in:
- Configuration complexity.
- Build speed.
- Default optimizations.

---

### **16. Read about `^` (caret) and `~` (tilde).**
- **`^`:** Allows updates to new patch and minor versions. E.g., `^1.2.3` allows `1.2.x` and `1.x.x`.
- **`~`:** Allows updates to new patch versions only. E.g., `~1.2.3` allows `1.2.x` but not `1.3.0`.

---

### **17. Read about script types in HTML (MDN Docs).**
Scripts in HTML can have types like:
- `text/javascript`: Default for JavaScript.
- `module`: For ES6 modules.
- `text/plain`: To include non-executable scripts.  
Refer to [MDN Documentation](https://developer.mozilla.org) for detailed insights.