import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ContextProvider from "./core/providers/context.provider";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          theme="dark"
          draggable
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          pauseOnHover={true}
        />
        <AppRoutes />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
