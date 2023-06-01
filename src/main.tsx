import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router";
import AuthProvider from "./AuthProvider";
import "./global.less";
import { RecoilRoot } from "recoil";
import LoadingMask from "@/components/loading-mask/index";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const router = createBrowserRouter(routes);

const theme = createTheme({
  palette: {
    primary: {
      main: "#800080",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <AuthProvider>
        <React.Suspense fallback={<LoadingMask />}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} fallbackElement={<LoadingMask />} />
          </ThemeProvider>
        </React.Suspense>
      </AuthProvider>
    </RecoilRoot>
  </React.StrictMode>
);
