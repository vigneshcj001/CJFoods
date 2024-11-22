### What is Emmet?  
Emmet is a powerful toolkit for web developers that allows you to write HTML and CSS code faster using abbreviations that expand into full-fledged code snippets. It is integrated into many text editors and IDEs (e.g., VS Code). For instance, typing `div.container>ul>li*3` and hitting Tab expands into:  
```html
<div class="container">
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```

---

### Difference between a Library and a Framework  
- **Library**:  
  A library is a collection of pre-written code designed for reuse in your application. You call its functions as needed, giving you control over the program flow.  
  Example: React, jQuery.  

- **Framework**:  
  A framework provides a predefined structure and flow for building applications. The framework calls your code (known as inversion of control).  
  Example: Angular, Django.  

---

### What is CDN? Why do we use it?  
**CDN (Content Delivery Network)** is a network of servers distributed across multiple locations to deliver web content more quickly and efficiently.  

- **Why use it?**
  - Faster load times for users globally.
  - Reduces server load and bandwidth costs.
  - Improves website scalability and availability.
  - Provides security features like DDoS protection.  

---

### Why is React known as React?  
React is called "React" because it reacts to changes in the application state. The virtual DOM ensures efficient updates and rendering of UI components in response to data or user interactions.

---

### What is `crossorigin` in `<script>` tag?  
The `crossorigin` attribute defines how the browser handles cross-origin requests. It is used with scripts loaded from external origins. Possible values:  
1. **anonymous**: Sends no credentials (cookies, HTTP authentication).  
2. **use-credentials**: Sends credentials for cross-origin requests.  

Example:  
```html
<script src="https://example.com/script.js" crossorigin="anonymous"></script>
```

---

### Difference between React and ReactDOM  
- **React**:  
  The core library used for building UI components. It focuses on the component logic and rendering elements.  

- **ReactDOM**:  
  Used specifically for interacting with the DOM (Document Object Model). It provides methods like `ReactDOM.render()` to render React components into the DOM.  

---

### Difference between `react.development.js` and `react.production.js` files via CDN  
1. **react.development.js**:  
   - Optimized for development.
   - Includes warnings, error messages, and debug tools.
   - Slower performance due to additional checks.  

2. **react.production.js**:  
   - Optimized for production.
   - Minified and stripped of debugging information for smaller size.
   - Faster performance as it excludes extra checks and warnings.  

---

### What is `async` and `defer`?  
Both attributes are used with `<script>` tags to control when and how external JavaScript files are loaded and executed.  

- **async**:  
  - Loads the script asynchronously and executes it as soon as it's ready.  
  - Does not wait for the HTML parsing to complete.  
  - Can disrupt the rendering order if scripts depend on each other.  

  Example:  
  ```html
  <script src="script.js" async></script>
  ```

- **defer**:  
  - Loads the script asynchronously but executes it only after the HTML parsing is complete.  
  - Maintains execution order if multiple scripts use `defer`.  

  Example:  
  ```html
  <script src="script.js" defer></script>
  ```

**Key Difference**:  
`async` runs as soon as it's downloaded, while `defer` ensures execution happens after HTML parsing.