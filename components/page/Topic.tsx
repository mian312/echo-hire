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
}

const Topic: React.FC<TopicProps> = ({ Icon, Title, Time }) => {
    return (
        <Card className="border-gray-800 max-w-sm">
            <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-lg flex items-center justify-center">
                        <Image 
                            src={Icon} 
                            alt={Title} 
                            width={32} 
                            height={32}
                            className="object-contain"
                        />
                    </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-2">
                    {Title}
                </CardTitle>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{Time} mins</span>
                </div>
            </CardHeader>
            <CardFooter className="pt-0 pb-6">
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                    Start Now
                </button>
            </CardFooter>
        </Card>
    )
}

export default Topic