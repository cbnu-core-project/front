import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "font-awesome/css/font-awesome.min.css";
import { MantineProvider } from "@mantine/core";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </BrowserRouter>
      </MantineProvider>
    </CookiesProvider>
  </React.StrictMode>
);
