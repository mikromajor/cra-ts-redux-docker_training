import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const container = document.getElementById("root")!;
const root = createRoot(container);

//using custome theme
const myTheme = createTheme({
  palette: {
    primary: { main: "#71f3ff" },
    secondary: {
      main: orange[500],
    },
  },
  typography: {
    allVariants: {
      fontSize: "4 rem",
      color: orange[800],
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={myTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
