import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CarContextProvider } from "./Component/Context/CarContext";

// Get the root element
const rootElement = document.getElementById('root');
if (rootElement) {

  // Create a root
  const root = ReactDOM.createRoot(rootElement);

  // Render the App component
  root.render(
    <React.StrictMode>
      <CarContextProvider>
        <App />
      </CarContextProvider>
    </React.StrictMode>
  );
}



