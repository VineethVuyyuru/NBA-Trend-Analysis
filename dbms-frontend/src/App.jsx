import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Query1 from './pages/Query1'
import './App.css'
import Query2 from './pages/Query2'
import Query5 from './pages/Query5'
import Query4 from './pages/Query4'
import Query6 from './pages/Query6'
import SideBar from './pages/SideBar'
import MainHome from './pages/HomePage'


const router = createBrowserRouter([
  {path : '/', element: <MainHome/>},
  {path :'/dashboard', element: <Dashboard/>},
  {path :'/query1', element: <Query1/>},
  {path : '/query2', element: <Query2/>},
  // {path : '/query3', element: <Query3/>},
  {path : '/query6', element: <Query6/>},
  {path : '/query4', element: <Query4/>},
  {path : '/query5', element: <Query5/>},
  {path : '/sidebar', element: <SideBar/>}
])

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}

export default App
