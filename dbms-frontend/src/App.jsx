import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/Home'
import Query1 from './pages/Query1'
import './App.css'
import Query2 from './pages/Query2'
import Query5 from './pages/Query5'
import SideBar from './pages/SideBar'
import MainHome from './pages/HomePage'


const router = createBrowserRouter([
  {path :'/', element: <HomePage/>},
  {path :'/query1', element: <Query1/>},
  {path : '/query2', element: <Query2/>},
  // {path : '/query3', element: <Query3/>},
  // {path : '/query4', element: <Query4/>},
  {path : '/query5', element: <Query5/>},
  {path : '/sidebar', element: <SideBar/>},
  {path : '/homepage', element: <MainHome/>}
])

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}

export default App
