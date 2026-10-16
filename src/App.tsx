import catHeader from './assets/catHeader.png'
import harmonicHustle from './assets/harmonic-hustle.png'
import theMarble from './assets/theMarble.png'
import websiteV2 from './assets/websiteV2.png'
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
import { Button, ConfigProvider, Image, Tooltip } from 'antd';
import { GithubFilled, GithubOutlined, LinkOutlined, TrophyOutlined } from '@ant-design/icons'
import { PORTFOLIO_TEXT } from './data/projectDescriptions'
import { ScrollProgress } from './components/ui/scroll-progress'
import { LightRays } from './components/ui/light-rays'
import ProjectCard from './components/project-card/project-card'

const ICONS = {
  link: <LinkOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>,
  github: <GithubOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>,
  trophy: <TrophyOutlined className="" style={{fontSize: "25px", color:"#efe3f2"}}/>
}

function App() {

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
    <Particles color="#c9b8cbb5" className='particles absolute inset-0 z-10' size={2}
      quantity={50}/>
    <ScrollProgress className='h-[2px] opacity-90'/>
    <section id="center" className="relative overflow-visible">
        <LightRays count={5}
        color="rgba(255, 191, 0, 0.47)"
        length="150vh"
        className="pointer-events-none absolute left-0 right-0 top-0 z-20"
        // blur={1}
      />
      <div className='mb-30 relative overflow-visible' style={{
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
        </div>
        <CustomDock></CustomDock>
      </div>

      {/* NEW PROJECT ---------- */}
      <ProjectCard
        title="Maya Village Generator"
        description="testDes"
        coverType='img'
        coverImgSrc={websiteV2}
        actions={[{
          title: 'test',
          key: 'test',
          icon: ICONS.github,
          link: 'https://www.students.cs.ubc.ca/~cs-427/games'
        }]}
      />

      <div className="p-[5vh]"></div>

      {/* WALK CYCLE STUDY-------- */}
      <ProjectCard
        title="Maya Walk Cycle Study"
        description="testDes"
        coverType='img'
        coverImgSrc={websiteV2}
        actions={[{
          title: 'test',
          key: 'test',
          icon: ICONS.github,
          link: 'https://www.students.cs.ubc.ca/~cs-427/games'
        }]}
      />

      <div className="p-[5vh]"></div>

      {/* HARMONIC HUSTLE --------*/}
      <ProjectCard 
        title="Harmonic Hustle"
        description={PORTFOLIO_TEXT.harmonicHustle.description}
        coverType="vid"
        coverVidSrc="https://www.youtube.com/embed/sxc7f5nW0wo?si=k409saNgVwFt9UnS"
        thumbnailSrc={harmonicHustle}
        thumbnailAlt="Harmonic Hustle Img"
        actions={[{
          title: "Featured on CPSC 427 Page",
          key: "harmonic-hustle",
          icon: ICONS.link,
          link: "https://www.students.cs.ubc.ca/~cs-427/games"
        }]}
        tags={["C++", "OpenGL", "C"]}
      />

      <div className="p-[5vh]"></div>

      {/* THE MARBLE-------- */}
      <ProjectCard 
        title="The Marble"
        description={PORTFOLIO_TEXT.theMarble.description}
        coverType="vid"
        coverVidSrc="https://www.youtube.com/embed/500GanMZ2O0?si=KyZ4BzIl5LDcCsuT"
        thumbnailSrc={theMarble}
        thumbnailAlt="The Marble Img"
        tags={["2D Animation"]}
      />

      <div className="p-[5vh]"></div>

      {/* PERSONAL WEBSITES-------_ */}
      <ProjectCard 
        title="Personal Website"
        description={PORTFOLIO_TEXT.personalSite.description}
        coverType="img"
        coverImgSrc={websiteV2}
        actions={[{
          title: "Personal Website",
          key: "site",
          icon: ICONS.link,
          link: "https://tc2780.netlify.app/"
        }, {
          title: "Github repo",
          key: "site-repo",
          icon: ICONS.github,
          link: "https://github.com/tc2780/Personal-Website-v2"
        }]}
        tags={["React", "TypeScript"]}
      />

      <div className="p-[5vh]"></div>

      {/* ANALYZING STEAM GAMES */}
      <ProjectCard
        title="Analyzing Steam Games"
        description={PORTFOLIO_TEXT.steamGames.description} 
        coverType='img'
        coverImgSrc={steamGames}
        actions={[{
          title: 'GitHub Repo',
          key: 'steam-repo',
          icon: ICONS.github,
          link: 'https://github.com/tc2780/Analyzing-Steam-Games'
        }, {
          title: 'Featured on 447 Hall of Fame',
          key: 'steam-hhof',
          icon: ICONS.trophy,
          link: 'https://www.students.cs.ubc.ca/~cs-447/25Jan/fame/'
        }, {
          title: 'Hosted on Vercel',
          key: 'steam-link',
          icon: ICONS.link,
          link: 'https://analyzing-steam-games.vercel.app/'
        }]}
        tags={["D3", "HTML", "CSS", "JS"]}
      />

      <div className="p-[5vh]"></div>

      {/* CAT ANIMATION STUDY */}
      <ProjectCard
        title="Cat Animation Study"
        description={PORTFOLIO_TEXT.catStudy.description} 
        coverType='vid'
        coverVidSrc='https://www.youtube.com/embed/kov8PXBQOxk?si=HEqAxofAVf-k6IE9'
        thumbnailSrc={catAnimationStudy}
        thumbnailAlt="Cat Animation Study"
        actions={[{
          title: 'Hosted on Vercel',
          key: 'cat-link',
          icon: ICONS.link,
          link: 'https://cat-animation-study.vercel.app/'
        }]}
        tags={["OpenGL", "JS"]}
      />

      <div className="p-[5vh]"></div>

      {/* HAUNTED HOUSE STUDY */}
      <ProjectCard
        title="Haunted House Study"
        description={PORTFOLIO_TEXT.hauntedHouseStudy.description} 
        coverType='img'
        coverImgSrc={hauntedHouseStudy}
        actions={[{
          title: 'Hosted on Vercel',
          key: 'house-link',
          icon: ICONS.link,
          link: "https://haunted-house-study.vercel.app/"
        }]}
        tags={["ThreeJS", "JS"]}
      />

      <div className="p-[5vh]"></div>

      {/* GALAXY GENERATOR STUDY */}
      <ProjectCard
        title="Galaxy Generator Study"
        description={PORTFOLIO_TEXT.galaxyStudy.description} 
        coverType='img'
        coverImgSrc={galaxyStudy}
        actions={[{
          title: 'Hosted on Vercel',
          key: 'galaxy-link',
          icon: ICONS.link,
          link: "https://galaxy-study.vercel.app/"
        }]}
        tags={["ThreeJS", "JS"]}
      />
    </section>

    <section className="h-[20vh] relative flex-col text-[ghostwhite] text-[15px] text-center p-[20px] mb-[10px] mt-[30px]">
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
