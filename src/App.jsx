import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1 className='bg-blue-800 top-0'>Amazon-clone</h1>
    <Header/>
   </div>
  )
}

export default App
