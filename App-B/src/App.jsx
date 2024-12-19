import React from "react";
import ReactDOM from "react-dom/client";

import Counter from "./Counter";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: App-B</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Counter/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)