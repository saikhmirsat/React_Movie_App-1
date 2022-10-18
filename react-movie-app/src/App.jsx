
import './App.css';
import Allroute from './Components/Allroute';
import Navbar from './Components/Navbar';
import { Theme } from './Context/Theme';
import React from 'react';

const styled = {
  light: {
    color: "black",
    backgroundColor: 'white'
  },
  dark: {
    color: 'white',
    backgroundColor: "#10171e"
  }
}

function App() {
  const { theme, themeChanger } = React.useContext(Theme)

  return (
    <div style={theme === 'dark' ? styled.dark : styled.light} className="App">
      <Navbar />
      <button className='theme' onClick={themeChanger}>{theme === 'dark' ? "Light" : "Dark"}</button>
      <Allroute />
    </div>
  );
}

export default App;
