import React from 'react'
import Navbar from './Components/Navbar.jsx'
import TextFrom from './Components/TextFrom.jsx'


const App = () => {
  Navbar
  return (
    <div>
      <Navbar title="Text Utils" />
      <TextFrom heading="Enter the text to analyze" />
    </div>
  )
}

export default App