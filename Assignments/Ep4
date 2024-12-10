### Assignment Answers

---

#### **1. Is JSX mandatory for React?**
No, JSX is not mandatory for React. JSX is a syntactic sugar for creating React elements, making it easier to write and understand component structure. However, you can use plain JavaScript with React's `React.createElement()` function to create components.

---

#### **2. Is ES6 mandatory for React?**
No, ES6 is not mandatory for React. You can use React with ES5, but ES6 features like `class`, `arrow functions`, `destructuring`, and `modules` make writing React code more concise and modern.

---

#### **3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX**
- `{TitleComponent}`: Refers to the variable or function named `TitleComponent`. It does not render the component; it’s used for passing as a reference.
- `{<TitleComponent/>}`: Self-closing syntax that renders the `TitleComponent` as a React element.
- `{<TitleComponent></TitleComponent>}`: Alternate syntax to render `TitleComponent`. Useful when children or nested components are required.

---

#### **4. How can I write comments in JSX?**
- **Inside JSX**: `{/* This is a comment */}`
- **Outside JSX**: Use regular JavaScript comments `//` or `/* */`.

---

#### **5. What is `<React.Fragment></React.Fragment>` and `<> </>`?**
- `<React.Fragment>`: A wrapper to group multiple elements without adding extra DOM nodes.
- `<></>`: Short syntax for `<React.Fragment>` introduced in React 16.2.

**Example**:  
```jsx
<React.Fragment>
  <h1>Hello</h1>
  <p>World</p>
</React.Fragment>
```
is equivalent to:
```jsx
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

#### **6. What is Virtual DOM?**
The Virtual DOM is an in-memory representation of the actual DOM. React updates the Virtual DOM first, calculates the difference (diffing algorithm), and then updates only the necessary parts of the actual DOM, leading to improved performance.

---

#### **7. What is Reconciliation in React?**
Reconciliation is the process through which React updates the DOM. It compares the previous Virtual DOM with the new one (using a diffing algorithm) and efficiently updates only the changed parts in the actual DOM.

---

#### **8. What is React Fiber?**
React Fiber is the reimplementation of React’s core algorithm for rendering. It allows splitting rendering work into units and spreading them across multiple frames, resulting in a smoother UI and better rendering performance for complex UIs.

---

#### **9. Why do we need keys in React? When do we need keys in React?**
- **Why**: Keys help React identify which items in a list have changed, are added, or are removed, optimizing rendering.
- **When**: Keys are needed when rendering dynamic lists or collections of elements.

**Example**:  
```jsx
<ul>
  {items.map(item => <li key={item.id}>{item.name}</li>)}
</ul>
```

---

#### **10. Can we use index as keys in React?**
Yes, but it's not recommended for dynamic lists where elements can be reordered or removed. Using the index as a key can lead to incorrect component updates.

---

#### **11. What is `props` in React?**
`props` (short for properties) are inputs passed to React components to configure their behavior. They are immutable and can be passed as attributes in JSX.

**Example**:  
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

**Ways to pass props**:
- Inline values: `<Welcome name="Alice" />`
- Variables: `<Welcome name={userName} />`

---

#### **12. What is a Config Driven UI?**
A Config Driven UI is built dynamically based on a configuration object or data, rather than hardcoding the UI components. This allows creating flexible and reusable interfaces.

**Example**:
```jsx
const config = [
  { type: "button", label: "Submit" },
  { type: "input", placeholder: "Enter your name" },
];

function renderUI(config) {
  return config.map((item, index) => {
    if (item.type === "button") return <button key={index}>{item.label}</button>;
    if (item.type === "input") return <input key={index} placeholder={item.placeholder} />;
  });
}
```