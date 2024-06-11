import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./challenges/AccountBank.css";
// import AccountBank from "./challenges/AccountBank";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <AccountBank /> */}
  </React.StrictMode>
);
