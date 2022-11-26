import { ThemeProvider } from "styled-components";
import { dark } from "./styles/themes/dark";
import { light } from "./styles/themes/light";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
