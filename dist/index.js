import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CarContextProvider } from "./Component/Context/CarContext";
// Get the root element
var rootElement = document.getElementById('root');
if (rootElement) {
    // Create a root
    var root = ReactDOM.createRoot(rootElement);
    // Render the App component
    root.render(_jsx(React.StrictMode, { children: _jsx(CarContextProvider, { children: _jsx(App, {}) }) }));
}
