import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./Styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";

import { MoviePreview } from './Pages/MoviePreview';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MoviePreview />
    </ThemeProvider>
  </React.StrictMode>
);
