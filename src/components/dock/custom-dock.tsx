import { useState, useEffect } from 'react'
import { Dock, DockIcon } from '../ui/dock'
import {HomeOutlined, GithubOutlined, LinkedinFilled, MailFilled} from '@ant-design/icons'
import './custom-dock.css'

const Icons = {
    home: (props:any) => <HomeOutlined className="text-black" {...props}/>,
    github: (props: any) => <GithubOutlined {...props}/>,
    linkedin: (props:any) => <LinkedinFilled {...props}/>,
    email: (props: any) => <MailFilled {...props}/>
  }


function CustomDock() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Trigger sticky state after scrolling down 300px
      if (window.scrollY > window.innerHeight * 0.75) {
        setIsSticky(true)
        console.log('HERE')
      } else {
        setIsSticky(false)
      }
    }
    console.log('TEST')

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const dockData = {
     navbar: [
    { href: "#", icon: Icons.home, label: "Home" },
    ],
    contact: {
      social: {
        GitHub: {
          name: "GitHub",
          url: "#",
          icon: Icons.github,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "#",
          icon: Icons.linkedin,
        },
        email: {
          name: "Send Email",
          url: "#",
          icon: Icons.email,
        },
      },
    },
    }

  return (
    <>
    <Dock direction="middle" 
    // className={`bg-white/20 custom-dock fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-4${
    //   isSticky ? "is-sticky fixed top-4 left-1/2 -translate-x-1/2" : "relative top-[75vh]"
    // }`}
    className={`bg-white/20 custom-dock fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-[5vh]`}
    iconMagnification={70}
      >
        {dockData.navbar.map((item) => (
            <DockIcon className='custom-dock-icon' key={item.label}>
                <item.icon  />
            </DockIcon>
        ))}
        {Object.entries(dockData.contact.social).map(([name, social]) => (
            <DockIcon className='custom-dock-icon' key={name}>
                <social.icon  />
            </DockIcon>
        ))}
    </Dock>
    </> 
  )
}

export default CustomDock
