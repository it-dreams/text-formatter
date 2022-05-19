import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or disabled

  const toggleMode = () => {
    if(mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light');  
      document.body.style.backgroundColor = 'white';          
    }
  }

  return (
    <>
      <Navbar title="TextFormatter" menuOneTitle="Home" menuTwoTitle="About" menuThreeTitle="Services" menuFourTitle="Contact us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to format" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

