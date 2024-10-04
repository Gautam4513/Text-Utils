import React from 'react'
import Navbar from './Components/Navbar.jsx'
import TextFrom from './Components/TextFrom.jsx'
import About from './Components/About.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Nav from './Components/Nav.jsx';



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><TextFrom heading="Enter the text to analyze" /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App