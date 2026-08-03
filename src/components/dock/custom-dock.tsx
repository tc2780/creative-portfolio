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
  const dockData = {
     navbar: [
    { href: "#top", icon: Icons.home, label: "Home" },
    ],
    contact: {
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/tc2780",
          icon: Icons.github,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/tracy-chow-6bab40189/",
          icon: Icons.linkedin,
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
    // className={`bg-white/20 custom-dock fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-[5vh]`}
    className={`border-[#ad66bc54] bg-white/20 custom-dock fixed top-0 left-0 z-50 ml-[18px] mt-[18px]`}
        // className={`border-[#ad66bc54] bg-white/20 custom-dock fixed top-0 left-1/2 -translate-x-1/2 z-50 ml-[4vh] mt-[4vh]`}

    iconMagnification={60}
    iconDistance={60}
      >
        {dockData.navbar.map((item) => (
          
          <DockIcon className='custom-dock-icon' key={item.label} >
            <a type="text" className="w-[20px]" href={item.href}>
              <item.icon  />
              </a>
          </DockIcon>
          
        ))}
        {/* <Separator orientation="vertical" className="h-full" /> */}
        {Object.entries(dockData.contact.social).map(([name, social]) => (
          
            <DockIcon className='custom-dock-icon' key={name} >
              <a type="text" className="w-[20px]"href={social.url} target="_blank">
                <social.icon  />
              </a>
            </DockIcon>
          
        ))}
    </Dock>
    </> 
  )
}

export default CustomDock
