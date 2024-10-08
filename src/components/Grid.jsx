import Image from "next/image";
import {allData} from "@/allData";

const items = allData

export default function Grid() {
    return (<>
        <div className="lg:px-10">
            <div className="flex items-center space-x-2 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-frame">
                    <line x1="22" x2="2" y1="6" y2="6"/>
                    <line x1="22" x2="2" y1="18" y2="18"/>
                    <line x1="6" x2="6" y1="2" y2="22"/>
                    <line x1="18" x2="18" y1="2" y2="22"/>
                </svg>
                <h2 className="font-semibold text-3xl">
                    title
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full py-4 px-4">
                {items.map((item, index) => (<a key={index} href="/g/1" target="_blank">
                    <div
                        className="flex items-center justify-start space-x-1 h-20 rounded-lg p-2 w-full bg-[#FFFFFF] dark:bg-[#232323] dark:text-white border dark:border-gray-500">
                        <div className="w-1/6 h-full flex items-center justify-center">
                            {/*<Image src={item.imageUrl} alt="nextjs" width={35} height={35} className="rounded-lg"/>*/}
                            <Image src={item.imageUrl} alt="nextjs" width={35} height={35} className="rounded-lg"/>
                        </div>
                        <div className="w-5/6 h-full flex flex-col items-start justify-center">
                            <div className="font-semibold text-sm">
                                {item.title}
                            </div>
                            <div className="line-clamp-2 overflow-ellipsis overflow-hidden text-gray-500 text-xs">
                                {item.desc}
                            </div>
                        </div>
                    </div>
                </a>))}
            </div>
        </div>
    </>)
}
