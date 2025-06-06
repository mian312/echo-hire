import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface TopicProps {
    Icon: string,
    Title: string,
    Time: number,
    onClick?: () => void
}

const Topic: React.FC<TopicProps> = ({ Icon, Title, Time, onClick }) => {
    return (
        <Card className="border-gray-800 max-w-sm">
            <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                    <div className="rounded-lg flex items-center justify-center">
                        <Image 
                            src={Icon} 
                            alt={Title} 
                            width={60} 
                            height={60}
                            className="object-contain"
                        />
                    </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-2">
                    {Title}
                </CardTitle>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-3">
                    <Image
                        src="/image/time.svg"
                        alt="time"
                        width={16}
                        height={16}
                        className="object-contain"
                    />
                    <span>{Time} mins</span>
                </div>
            </CardHeader>
            <CardFooter className="pt-0 pb-6">
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors" onClick={onClick}>
                    Start Now
                </button>
            </CardFooter>
        </Card>
    )
}

export default Topic