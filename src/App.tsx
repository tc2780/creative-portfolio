import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Particles } from './components/ui/particles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Particles color="#eee7ef" className='particles absolute inset-0 z-0' size={1.3}/>
    <section id="center">
      <div className="hero width-auto content-normal z-10">
        <p className="text-white">hi, i'm Tracy</p>
        <p className="text-white">and this is my portfolio</p>
      </div>
      <text></text>
      
    </section>
    </> 
  )
}

export default App
