import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Layout from './Components/Layout.jsx'
import Router from './Components/Route.jsx'
import { BrowserRouter } from 'react-router-dom'


function App() {


  return (
    <>
     {/* <Layout /> */}
     <BrowserRouter>
       <Router />
     </BrowserRouter>
    </>
  )
}

export default App