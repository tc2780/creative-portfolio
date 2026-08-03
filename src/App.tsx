import { useEffect, useState } from 'react'
import catHeader from './assets/catHeader.png'
import harmonicHustle from './assets/harmonic-hustle.png'
import theMarble from './assets/theMarble.png'
import websiteV1 from './assets/websiteV1.png'
import websiteV2 from './assets/websiteV2.png'
import websiteV3 from './assets/websiteV3.png'
import steamGames from './assets/analyzingSteamGames.png'
import catAnimationStudy from './assets/catAnimationStudy.png'
import hauntedHouseStudy from './assets/hauntedHouseStudy.png'
import galaxyStudy from './assets/galaxyStudy.png'


import './App.css'
import { Particles } from './components/ui/particles'
import { TypingAnimation } from "./components/ui/typing-animation"
import CustomDock from './components/dock/custom-dock'
import CustomCard from './components/card/custom-card'
import { BlurFade } from './components/ui/blur-fade'
import { HeroVideoDialog } from './components/ui/hero-video-dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./components/ui/carousel"
import { Button, ConfigProvider, Image, Tooltip } from 'antd';
import { GithubFilled, GithubOutlined, LinkOutlined, TrophyOutlined } from '@ant-design/icons'
// import { KineticText } from './components/ui/kinetic-text'
import { PORTFOLIO_TEXT } from './data/projectDescriptions'
import { KineticText } from './components/ui/kinetic-text'
import { TypewriterText } from './components/ui/typewriter'



function App() {
  // const [currentSite, setCurrentSite] = useState(1)
  // const [api, setApi] = useState<CarouselApi>()

  // useEffect(() => {
  //   if (!api) {
  //     return
  //   }
  //   setCurrentSite(api.selectedScrollSnap() + 1)
  //   api.on("select", () => {
  //     setCurrentSite(api.selectedScrollSnap() + 1)
  //   })
  // }, [api])


  return (
    <>
    <ConfigProvider
      theme={{
        token: {
        },
        components: {
          Image: {
            colorBgMask: '#0d0a0ae8',
          }
        }
      }}
    >
    <Particles color="#c9b8cb" className='particles absolute inset-0 z-10' size={1.3}/>

    <section id="center">
      <div className='mb-30' style={{
          backgroundImage: `url(${catHeader})`,
          backgroundSize: "cover",
          height: '100vh',
          width: "100%",
      }}>
        <div className="hero-text width-auto content-normal z-20">
          <TypingAnimation className="text-white intro-text font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,1)]"
            words={["hi, i'm Tracy", "this is my portfolio"]}
            // words={[`hi, i'm Tracy\nthis is my portfolio`]}
            cursorStyle='underscore'
            loop={true}
            >
            </TypingAnimation>
            {/* <KineticText 
            className="text-white intro-text  drop-shadow-[0_4px_4px_rgba(0,0,0,1)]"
            text={`hi, i'm Tracy`}/>
            <KineticText 
            className="text-white intro-text  drop-shadow-[0_4px_4px_rgba(0,0,0,1)]"
            text={`this is my portfolio`}/> */}
            {/* <TypewriterText 
              text={`hi, i'm Tracy this is my portfolio`}
            /> */}
        </div>
        <CustomDock></CustomDock>
      </div>


      {/* HARMONIC HUSTLE --------*/}
      <BlurFade delay={0.3} inView
        offset={30}
        direction="up"
      >
        <CustomCard 
          title={"Harmonic Hustle"}
          description={PORTFOLIO_TEXT.haronicHustle.description} 
          className=''
          cover={
            <HeroVideoDialog 
            className="block dark:hidden rounded-xl card-img card-video"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/sxc7f5nW0wo?si=k409saNgVwFt9UnS"
            thumbnailSrc={harmonicHustle}
            thumbnailAlt="Harmonic Hustle Img"
            />
          }
          tags={["C++", "OpenGL", "C"]}
          >

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
        description={PORTFOLIO_TEXT.theMarble.description} 
        className=''
        cover={
            <HeroVideoDialog 
            className="block dark:hidden rounded-xl card-img card-video"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/500GanMZ2O0?si=KyZ4BzIl5LDcCsuT"
            thumbnailSrc={theMarble}
            thumbnailAlt="The Marble Img"
            />
          }
          tags={["2D Animation"]}
          >

      </CustomCard>
      </BlurFade>

      <div className="p-[5vh]"></div>

      {/* PERSONAL WEBSITES-------_ */}
      <BlurFade delay={0.3} inView
        offset={30}
        direction="up">
      <CustomCard 
        title={"Personal Website"}
        description={PORTFOLIO_TEXT.personalSite.description} 
        className=''
        cover={
          <Image src={websiteV2} className='card-img rounded-xl'/>
        }
        actions={[
            <Tooltip title="Personal Website" key="steam-repo">
                <Button 
                    type="default" 
                    className=""
                    style={{padding:'20px', margin:'10px'}}
                    icon={
                        <LinkOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>
                    }
                    href="https://tc2780.netlify.app/" target="_blank" 
                >
                </Button>
            </Tooltip>,
            <Tooltip title="Github repo" key="steam-hof">
                <Button 
                    type="default" 
                    className=""
                    style={{padding:'20px', margin:'10px'}}
                    icon={
                        <GithubOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>
                    }
                    href="https://github.com/tc2780/Personal-Website-v2" target="_blank" 
                />
            </Tooltip>,
        ]}
        tags={["React", "TypeScript"]}
          >

      </CustomCard>
      </BlurFade>

      <div className="p-[5vh]"></div>

        {/* ANALYZING STEAM GAMES */}
      <BlurFade delay={0.3} inView
        offset={30}
        direction="up">
      <CustomCard 
        title={"Analyzing Steam Games"}
        description={PORTFOLIO_TEXT.steamGames.description} 
        className=''
        cover={
            <Image src={steamGames} className='card-img rounded-xl'/>
        }
        actions={[
            <Tooltip title="GitHub Repo" key="steam-repo">
                <Button 
                    type="default" 
                    className=""
                    style={{padding:'20px', margin:'10px'}}
                    icon={
                        <GithubOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>
                    }
                    href="https://github.com/tc2780/Analyzing-Steam-Games" target="_blank" 
                >
                </Button>
            </Tooltip>,
            <Tooltip title="Featured on 447 Hall of Fame" key="steam-hof">
                <Button 
                    type="default" 
                    className=""
                    style={{padding:'20px', margin:'10px'}}
                    icon={
                        <TrophyOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>
                    }
                    href="https://www.students.cs.ubc.ca/~cs-447/25Jan/fame/" target="_blank" 
                />
            </Tooltip>,
            <Tooltip title="Hosted on Vercel" key="steam-link">
                <Button 
                    type="default" 
                    className=""
                    style={{padding:'20px', margin:'10px'}}
                    icon={
                        <LinkOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>
                    }
                    href="https://analyzing-steam-games.vercel.app/" target="_blank" 
                />
            </Tooltip>
          ]}
          tags={["D3", "HTML", "CSS", "JS"]}
        >

      </CustomCard>
      </BlurFade>

      <div className="p-[5vh]"></div>

        {/* CAT ANIMATION STUDY */}
      <BlurFade delay={0.3} inView
        offset={30}
        direction="up">
      <CustomCard 
        title={"Cat Animation Study"}
        description={PORTFOLIO_TEXT.catStudy.description} 
        className=''
        cover={
            <HeroVideoDialog 
              className="block dark:hidden rounded-xl card-img card-video"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/kov8PXBQOxk?si=HEqAxofAVf-k6IE9"
              thumbnailSrc={catAnimationStudy}
              thumbnailAlt="Cat Animation Study"
            />
        }
        actions={[
            <Tooltip title="Hosted on Vercel" key="cat-link">
                <Button 
                    type="default" 
                    className=""
                    style={{padding:'20px', margin:'10px'}}
                    icon={
                        <LinkOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>
                    }
                    href="https://cat-animation-study.vercel.app/" target="_blank" 
                >
                </Button>
            </Tooltip>
        ]}
        tags={["OpenGL", "JS"]}
        >
      </CustomCard>
      </BlurFade>

      <div className="p-[5vh]"></div>

        {/* HAUNTED HOUSE STUDY */}
      <BlurFade delay={0.3} inView
        offset={30}
        direction="up">
      <CustomCard 
        title={"Haunted House Study"}
        description={PORTFOLIO_TEXT.hauntedHouseStudy.description} 
        className=''
        cover={
            <Image src={hauntedHouseStudy} className='card-img rounded-xl'/>
        }
        actions={[
            <Tooltip title="Hosted on Vercel" key="house-link">
                <Button 
                    type="default" 
                    className=""
                    style={{padding:'20px', margin:'10px'}}
                    icon={
                        <LinkOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>
                    }
                    href="https://haunted-house-study.vercel.app/" target="_blank" 
                >
                </Button>
            </Tooltip>
        ]}
        tags={["ThreeJS", "JS"]}
        >

      </CustomCard>
      </BlurFade>

      <div className="p-[5vh]"></div>

        {/* GALAXY GENERATOR STUDY */}
      <BlurFade delay={0.3} inView
        offset={30}
        direction="up">
      <CustomCard 
        title={"Galaxy Generator Study"}
        description={PORTFOLIO_TEXT.galaxyStudy.description} 
        className=''
        cover={
            <Image src={galaxyStudy} className='card-img rounded-xl'/>
        }
         actions={[
            <Tooltip title="Hosted on Vercel" key="galaxy-link">
                <Button 
                    type="default" 
                    className=""
                    style={{padding:'20px', margin:'10px'}}
                    icon={
                        <LinkOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>
                    }
                    href="https://galaxy-study.vercel.app/" target="_blank" 
                >
                </Button>
            </Tooltip>
        ]}
        tags={["ThreeJS", "JS"]}
        >

      </CustomCard>
      </BlurFade>
    </section>

    <section className="h-[20vh] relative flex-col text-[ghostwhite] text-[15px] text-center p-5">
      <br />
        {`
          Designed and Developed by Tracy Chow
        `}
        <br />
          {`
            Copyright © 2026 Tracy Chow
          `}
          <br />
          <Button 
            ghost 
            style={{border: "none", paddingTop: '10px',}}
            href="https://github.com/tc2780/Personal-Website-v2"
            target="_blank"
            icon={<GithubFilled style={{fontSize: "25px", paddingTop: "5px", color: "ghostwhite"}} />}
          />
    </section>
    </ConfigProvider>
    </> 
  )
}

export default App
