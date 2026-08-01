// import { Card } from 'antd';
import { MagicCard } from '../ui/magic-card';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import './custom-card.css'


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
        {/* <MagicCard
            glowFrom="#ee4f27"
            glowTo="#6b21ef"
            mode="orb"
            className={`w-full max-w-sm rounded-xl p-0 ${props.className ?? ''}`}
        >
        <Card className="border-none bg-transparent p-0 text-white shadow-none ring-0">
            <CardHeader className="border-b border-white/15 p-4 pb-4">
            <CardTitle>Login</CardTitle>
            <CardDescription>
                Enter your credentials to access your account
            </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
            </CardContent>
            <CardFooter className="border-t border-white/15 p-4 pt-4">
            TEST
            </CardFooter>
        </Card>
        </MagicCard> */}

        {/* <MagicCard
            className="custom-magic-card p-0 shadow-none text-white rounded-xl"
            mode="orb"
            glowFrom="#c81cde"
            glowTo="#6b21ef"
            gradientFrom="#c9cf1c"
            gradientTo="#2bef21"
            gradientSize={250}
        > */}
         <MagicCard
            className="custom-magic-card p-0 shadow-none relative overflow-hidden rounded-xl text-white"
            gradientColor="#6f157b"
            mode="gradient"
            // gradientFrom="#fb07ff"
            // gradientTo="#a42f85"
            gradientSize={250}
        >
            <Card title="test" 
                className={`custom-card border-none bg-transparent p-0 shadow-none ring-0 text-white ${props.className}`}
            >
                {props.description}
            </Card>
        </MagicCard>
    </>
  )
}

export default CustomCard
