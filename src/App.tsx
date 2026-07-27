import { useState } from 'react'
import catHeader from './assets/catHeader.png'
import './App.css'
import { Particles } from './components/ui/particles'
import { TypingAnimation } from "./components/ui/typing-animation"
import CustomDock from './components/dock/custom-dock'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Particles color="#c9b8cb" className='particles absolute inset-0 z-10' size={1.3}/>
    <section id="center">
      <div>
        <img src={catHeader} className='z-0'></img>
        <div className="hero-text width-auto content-normal z-20">
          <TypingAnimation className="text-white intro-text font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,1)]"
            words={["hi, i'm Tracy", "this is my portfolio"]}
            cursorStyle='underscore'
            loop={true}
            >
            </TypingAnimation>
        </div>
        <CustomDock></CustomDock>
      </div>
      
    </section>
    </> 
  )
}

export default App
