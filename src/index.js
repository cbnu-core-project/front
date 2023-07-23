import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "font-awesome/css/font-awesome.min.css";
import { MantineProvider } from "@mantine/core";
import { CookiesProvider } from "react-cookie";
import { QueryClientProvider, QueryClient } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </BrowserRouter>
      </MantineProvider>
    </CookiesProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);
