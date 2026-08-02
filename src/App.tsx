import { useState } from 'react'
import catHeader from './assets/catHeader.png'
import harmonicHustle from './assets/harmonic-hustle.png'
import theMarble from './assets/theMarble.png'

import './App.css'
import { Particles } from './components/ui/particles'
import { TypingAnimation } from "./components/ui/typing-animation"
import CustomDock from './components/dock/custom-dock'
import CustomCard from './components/card/custom-card'
import { BlurFade } from './components/ui/blur-fade'
import { HeroVideoDialog } from './components/ui/hero-video-dialog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Particles color="#c9b8cb" className='particles absolute inset-0 z-10' size={1.3}/>
    {/* <img src={catHeader} className='catHeader z-0'></img> */}

    <section id="center">
      <div className='mb-15' style={{
          backgroundImage: `url(${catHeader})`,
          backgroundSize: "cover",
          height: '100vh',
          width: "100%",
      }}>
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

      {/* <div className="height-[20px]"></div> */}


      {/* HARMONIC HUSTLE --------*/}
      <BlurFade delay={0.3} inView
        offset={30}
        direction="up"
      >
        <CustomCard 
          title={"Harmonic Hustle"}
          description={"test"} 
          className=''
          cover={
            <HeroVideoDialog 
            className="block dark:hidden rounded-xl card-img card-video"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/sxc7f5nW0wo?si=k409saNgVwFt9UnS"
            thumbnailSrc={harmonicHustle}
            thumbnailAlt="Harmonic Hustle Img"
            />
          }>

        </CustomCard>
      </BlurFade>

      <div className="p-[5vh]"></div>

        {/* THE MARBLE-------- */}
      <BlurFade delay={0.3} inView
        offset={30}
        direction="up"
      >
      <CustomCard 
        title={"The Marble"}
        description={"test"} 
        className=''
        cover={
            <HeroVideoDialog 
            className="block dark:hidden rounded-xl card-img card-video"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/500GanMZ2O0?si=KyZ4BzIl5LDcCsuT"
            thumbnailSrc={theMarble}
            thumbnailAlt="The Marble Img"
            />
          }>

      </CustomCard>
      </BlurFade>

      <div className="p-[5vh]"></div>

      <CustomCard 
        title={"Personal Website"}
        description={"test"} 
        className=''
        cover={
            <img src={catHeader} className='card-img rounded-xl'></img>
          }>

      </CustomCard>

      <div className="p-[5vh]"></div>

      <CustomCard 
        title={"Analyzing Steam Games"}
        description={"test"} 
        className=''
        cover={
            <img src={catHeader} className='card-img rounded-xl'></img>
        }>

      </CustomCard>

      <div className="p-[5vh]"></div>

      <CustomCard 
        title={"Cat Animation Study"}
        description={"test"} 
        className=''
        cover={
            <img src={catHeader} className='card-img rounded-xl'></img>
        }>

      </CustomCard>

      <div className="p-[5vh]"></div>

      <CustomCard 
        title={"Haunted House Study"}
        description={"test"} 
        className=''
        cover={
            <img src={catHeader} className='card-img rounded-xl'></img>
        }>

      </CustomCard>

      <div className="p-[5vh]"></div>

      <CustomCard 
        title={"Galaxy Generator Study"}
        description={"test"} 
        className=''
        cover={
            <img src={catHeader} className='card-img rounded-xl'></img>
        }>

      </CustomCard>
    </section>

    <section className="h-[40px]">
      
    </section>
    </> 
  )
}

export default App
