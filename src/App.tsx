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
import { GithubOutlined, LinkOutlined, TrophyOutlined } from '@ant-design/icons'



function App() {
  const [count, setCount] = useState(0)
  const [currentSite, setCurrentSite] = useState(1)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrentSite(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrentSite(api.selectedScrollSnap() + 1)
    })
  }, [api])


  return (
    <>
    <ConfigProvider
      theme={{
        token: {
          // colorBgMask: '#0d0a0ae8'
          // preview
        },
        components: {
          Image: {
            // previewOperationHoverColor: '#ff0000',
            colorBgMask: '#0d0a0ae8',
          }
        }
      }}
    >
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
          }
          // actions={[
          //   <Tooltip title="GitHub Repo" key="tooltip">
          //       <Button 
          //           type="default" 
          //           className=""
          //           style={{padding:'20px', margin:'10px'}}
          //           icon={
          //               <LinkOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>
          //           }
          //       >
          //       </Button>
          //   </Tooltip>
          // ]}
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
        description={"test"} 
        className=''
        cover={
          <>
            <Carousel className='card-img rounded-xl ' setApi={setApi}>
            <CarouselContent>
              <CarouselItem className="flex items-center justify-center">
                <Image src={websiteV1} className=''/>
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center">
                <Image src={websiteV2} className=''/>
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center">
                <Image src={websiteV3} className=''/>
              </CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            {`version ${currentSite}`}
          </div>
          </>
          }
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
        description={"test"} 
        className=''
        cover={
            <Image src={steamGames} className='card-img rounded-xl'
              // preview={{
              // colorBgBase: "!bg-purple-900/80 !backdrop-blur-md !rounded-full !px-4",
              // }} 
              />
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
        description={"test"} 
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
        description={"test"} 
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
        description={"test"} 
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

    <section className="h-[20vh]">
      
    </section>
    </ConfigProvider>
    </> 
  )
}

export default App
