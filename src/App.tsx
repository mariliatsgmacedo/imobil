import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { darkModeTheme } from "./styles/themes/darkMode";
import { lightModeTheme } from "./styles/themes/lightMode";


export const App = () => {
  const [theme, setTheme] = useState(lightModeTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightModeTheme : darkModeTheme);
  };

  return (
    <ThemeProvider theme={theme}>
       <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
     
      </div>
      <GlobalStyle/>
    </ThemeProvider>
  );
};
