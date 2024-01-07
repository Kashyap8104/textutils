// import logo from './logo.svg';
// import { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = `#042743`;
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enable", "success");
      document.title = "TextUtils Light Mode";
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <About/> */}
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />


      </div>

    </div>
    
  )
}

export default App;
