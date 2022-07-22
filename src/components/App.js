import React, { useContext, useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import {UserProvider} from "../context/user"
import {ThemeContext, ThemeProvider} from "../context/theme"

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  // const{theme,setTheme} = useContext(ThemeContext)
  console.log(theme)
  return (
    <ThemeProvider>
    <main className={theme}>
      <UserProvider>
      <Header  />
      <Profile  />
      </UserProvider>
    </main>
    </ThemeProvider>
  );
}

export default App;
