import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Calculate from './components/Calculate'
import Flight from './components/calculateComponents/Flight'
import Car from './components/calculateComponents/Car'
import Shipping from './components/calculateComponents/Shipping'
import Electricity from './components/calculateComponents/Electricity'
import Solutions from './components/Solutions'
import Footer from './components/Footer'

function App() {
  const router= createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><Footer/></>
    },
    {
      path: "/calculate",
      element: <><Navbar/><Calculate/><Footer/></>
    },
    {
      path: "/solutions",
      element: <><Navbar/><Solutions/><Footer/></>
    },
    {
      path: "/calculate/flight",
      element: <><Navbar/><Flight/><Footer/></>
    },
    {
      path: "/calculate/car",
      element: <><Navbar/><Car/><Footer/></>
    },
    {
      path: "/calculate/shipping",
      element: <><Navbar/><Shipping/><Footer/></>
    },
    {
      path: "/calculate/electricity",
      element: <><Navbar/><Electricity/><Footer/></>
    },
  ])
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
