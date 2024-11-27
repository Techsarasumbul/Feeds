import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


// Use createRoot for React 18 to enable concurrent rendering
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create a root element using React 18+
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
