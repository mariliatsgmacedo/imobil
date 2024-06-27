import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { darkModeTheme } from "./styles/themes/darkMode";
import { lightModeTheme } from "./styles/themes/lightMode";
import { Register } from "./pages/properties/Register";

export const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(darkModeTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightModeTheme : darkModeTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      <Register/>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};
