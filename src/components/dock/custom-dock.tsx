import { useState } from 'react'
import { Dock, DockIcon } from '../ui/dock'
import {HomeOutlined, GithubOutlined, LinkedinFilled, MailFilled} from '@ant-design/icons'

const Icons = {
    home: (props:any) => <HomeOutlined className="text-black" {...props}/>,
    github: (props: any) => <GithubOutlined {...props}/>,
    linkedin: (props:any) => <LinkedinFilled {...props}/>,
    email: (props: any) => <MailFilled {...props}/>
  }

function CustomDock() {
  const [count, setCount] = useState(0)
  
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
    <Dock direction="middle" className="bg-white">
        {dockData.navbar.map((item) => (
            <DockIcon key={item.label}>
                <item.icon  />
            </DockIcon>
        ))}
        {Object.entries(dockData.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
                <social.icon  />
            </DockIcon>
        ))}
    </Dock>
    </> 
  )
}

export default CustomDock
