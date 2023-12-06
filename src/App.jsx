import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/Home/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='font-bodyFont z-auto'>
   
    <Header/>
    <Banner/>
    <Footer/>
   </div>
  )
}

export default App
