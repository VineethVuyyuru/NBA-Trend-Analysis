import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/Home'
import Query1 from './pages/Query1'
import './App.css'
import Query2 from './pages/Query2'


const router = createBrowserRouter([
  {path :'/', element: <HomePage/>},
  {path :'/query1', element: <Query1/>},
  {path : '/query2', element: <Query2/>}
])

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}

export default App
