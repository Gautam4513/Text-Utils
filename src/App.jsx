import React from 'react'
import Navbar from './Components/Navbar.jsx'
import TextFrom from './Components/TextFrom.jsx'
import About from './Components/About.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar title="Text Utils"/><TextFrom heading="Enter the text to analyze" /></>
    },
    {
      path: "/about",
      element: <><Navbar title="Text Utils" /><About /></>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App