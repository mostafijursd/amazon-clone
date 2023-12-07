import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import{ 
createBrowserRouter,
createRoutesFromElements,
Outlet,
Route,
RouterProvider} from 'react-router-dom'



const Layout=()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}



function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    

<Route path='/' element ={<Layout />}>
  <Route index  element={<Home/>}></Route>
</Route>
    
  ))

  return (
   <div className='font-bodyFont '>
   <RouterProvider  router={router}></RouterProvider>
   
   </div>
  )
}

export default App
