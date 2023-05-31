import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { SnackbarProvider, useSnackbar, enqueueSnackbar } from "notistack";

function App() {
  const [count, setCount] = useState(0);

  const showNotice = () => {
    const date: string = new Date().toDateString();
    const temp = (
      <div
        style={{
          width: "360px",
          minHeight: 120,
        }}
      >
        success<span>{date}</span>
      </div>
    );
    enqueueSnackbar({
      message: temp,
      variant: "success",
      anchorOrigin: { vertical: "top", horizontal: "right" },
      autoHideDuration: 5000,
    });
  };

  return (
    <>
      <button onClick={showNotice}>anniu</button>
      <SnackbarProvider maxSnack={4}></SnackbarProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
