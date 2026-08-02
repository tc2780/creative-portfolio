// import { Card } from 'antd';
import { MagicCard } from '../ui/magic-card';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import './custom-card.css'
import catHeader from '../../assets/catHeader.png'

export interface CardProps {
    title?: string,
    className?: string,
    dates?: string,
    cover?: React.ReactNode,
    description?: string,
    tags?: string[],
    actions?: React.ReactNode[];
};

function CustomCard(props: CardProps) {


  return (
    <>
         <MagicCard
            className="custom-magic-card p-0 shadow-none relative overflow-hidden rounded-xl text-white"
            gradientColor="#6f157b"
            mode="gradient"
            gradientSize={250}
        >
            <Card title="test" 
                className={`custom-card border-none bg-transparent p-0 shadow-none ring-0 text-white ${props.className}`}
            >
                <CardContent className="relative flex flex-col items-center">
                    <div className="card-title text-center text-3xl font-bold text-white pt-4 pb-8">{props.title}</div>
                    {props.cover}
                    <div className="card-description text-center text-[18px] pt-4">{props.description}</div>
                </CardContent>
            </Card>
        </MagicCard>
    </>
  )
}

export default CustomCard
