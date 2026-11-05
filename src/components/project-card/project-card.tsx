import CustomCard from "../card/custom-card"
import { BlurFade } from "../ui/blur-fade"
import { Button, Image, Tooltip } from 'antd';
import { HeroVideoDialog } from "../ui/hero-video-dialog";

export interface ActionProps {
    title: string,
    key: string,
    icon: React.ReactNode,
    link: string,
}

interface ProjectCardBaseProps {
    title: string,
    description: string,
    actions?: ActionProps[]
    tags?: string[],
};

interface ProjectImgCardProps extends ProjectCardBaseProps {
    coverType: 'img',
    coverImgSrc: string,
}

interface ProjectVidCardProps extends ProjectCardBaseProps {
    coverType: 'vid',
    coverVidSrc: string,
    thumbnailSrc: string,
    thumbnailAlt: string,
};

export type ProjectCardProps = ProjectImgCardProps | ProjectVidCardProps

function projectCard(props: ProjectCardProps) {
    return (
        <>
        <BlurFade delay={0.3} inView
        offset={30}
        direction="up"
      >
        <CustomCard 
            title={props.title}
            description={props.description} 
            className=''
            cover={props.coverType == 'img' ? (
                <Image src={props.coverImgSrc} className='card-img rounded-xl'/>
            ): (
                <HeroVideoDialog 
                    className="block dark:hidden rounded-xl card-img card-video"
                    animationStyle="top-in-bottom-out"
                    videoSrc={props.coverVidSrc}
                    thumbnailSrc={props.thumbnailSrc}
                    thumbnailAlt={props.thumbnailAlt}
                />
            )}
            actions={props.actions?.map((actionProps) => (
                    <Tooltip title={actionProps.title} key={actionProps.key}>
                        <Button 
                            type="default" 
                            className=""
                            style={{padding:'20px', margin:'10px'}}
                            icon={actionProps.icon}
                            href={actionProps.link} target="_blank" 
                        >
                        </Button>
                    </Tooltip>
                )
            )}
            tags={props.tags}
          >

        </CustomCard>
      </BlurFade>
      </>
    )

}

export default projectCard