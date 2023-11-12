import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import ThemeProvider from "./assets/theme/ThemeProvider.tsx";
import GlobalStyle from "./assets/styles/global.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
