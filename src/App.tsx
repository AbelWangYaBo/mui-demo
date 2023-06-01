import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { RecoilRoot } from "recoil";
import LoadingMask from "@/components/loading-mask/index";
import "./global.less";
import { SnackbarProvider } from "notistack";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const router = createBrowserRouter(routes);

const theme = createTheme({
  palette: {
    primary: {
      main: "#800080",
    },
  },
});

function App() {
  // const location = useLocation();
  // useEffect(() => {
  //   console.log("location", location);
  // }, [location]);

  return (
    <RecoilRoot>
      <React.Suspense fallback={<LoadingMask />}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} fallbackElement={<LoadingMask />} />
        </ThemeProvider>
      </React.Suspense>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={3000}
      />
    </RecoilRoot>
  );
}

export default App;
