"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react'
interface SidebarProps {
    children: ReactNode;
}
type Tab = "tab1" | "tab2" | "tab3" | "tab4";

export type disciplineScore = {
    teamRound: {
        series: string[],
    },
    roundTwo: {
        first: string[],
        second: string[],
        third: string[],
        fourth: string[],
        fifth: string[],
        sixth: string[],
    },
    roundThree: {
        first: string[],
        second: string[],
        third: string[],
        fourth: string[],
        fifth: string[],
        sixth: string[],
    },
};

const disciplineScoreState = {
    teamRound: {
        series: ['TPT001'],
    },
    roundTwo: {
        first: ['TPT002'],
        second: ['TPT002'],
        third: ['TPT002'],
        fourth: ['TPT002'],
        fifth: ['TPT002'],
        sixth: ['TPT002'],
    },
    roundThree: {
        first: ['TPT002'],
        second: ['TPT002'],
        third: ['TPT002'],
        fourth: ['TPT002'],
        fifth: ['TPT002'],
        sixth: ['TPT002'],
    },
};

export const TumblingScoreContext = React.createContext(
    disciplineScoreState);

export default function TrampetTabs({ children }: React.PropsWithChildren<SidebarProps>) {
    const path = usePathname();
    console.log(path);

    const [activeTab, setActiveTab] = useState<Tab>("tab1");;
    const [disciplineScore, setDisciplineScore] = useState<disciplineScore>(disciplineScoreState);

    useEffect(() => {
        switch (path) {
            case '/trampet':
                setActiveTab("tab1");
                break;
            case '/trampet/roundTwo':
                setActiveTab("tab2");
                break;
            case '/trampet/roundThree':
                setActiveTab("tab3");
                break;
            case '/trampet/score':
                setActiveTab("tab4");
                break;
            default:
                break;
        }
    }, [path]);

    return (
        <>
            <TumblingScoreContext.Provider value={disciplineScore}>
                <div className="flex border-b">
                    <Link href="/trampet" className={`block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200py-2 px-4 ${activeTab === "tab1" ? "border-b-4 white-blue-500" : ""}`} >
                        Team Round
                    </Link>
                    <Link href="/trampet/roundTwo" className={`block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200py-2 px-4 ${activeTab === "tab2" ? "border-b-4 white-blue-500" : ""}`}>
                        Round Two
                    </Link>
                    <Link href="/trampet/roundThree" className={`block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200py-2 px-4 ${activeTab === "tab3" ? "border-b-4 white-blue-500" : ""}`}>
                        Round Three
                    </Link>
                    <Link href="/trampet/score" className={`block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200py-2 px-4 ${activeTab === "tab4" ? "border-b-4 white-blue-500" : ""}`}>
                        Score Overview
                    </Link>
                </div>
                <div className="flex-grow">{children}</div>
            </TumblingScoreContext.Provider>
        </>
    )
}