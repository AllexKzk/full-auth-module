import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Router from "./router";
import AuthProvider from "./router/auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Router/>
    </AuthProvider>
  </React.StrictMode>
);