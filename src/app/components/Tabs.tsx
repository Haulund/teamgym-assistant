"use client";
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { ReactNode, use, useEffect, useState } from 'react'
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
        series: ['FwT001', 'FwT002'],
    },
    roundTwo: {
        first: ['FwT003', 'FwT004'],
        second: ['FwT001', 'FwT002'],
        third: ['FwT001', 'FwT002'],
        fourth: ['FwT001', 'FwT002'],
        fifth: ['FwT001', 'FwT002'],
        sixth: ['FwT001', 'FwT002'],
    },
    roundThree: {
        first: ['FwT001', 'FwT002'],
        second: ['FwT001', 'FwT002'],
        third: ['FwT001', 'FwT002'],
        fourth: ['FwT001', 'FwT002'],
        fifth: ['FwT001', 'FwT002'],
        sixth: ['FwT001', 'FwT002'],
    },
};

export const TumblingScoreContext = React.createContext(
    disciplineScoreState);

export default function Tabs({ children }: React.PropsWithChildren<SidebarProps>) {
    const path = usePathname();
    console.log(path);

    const [activeTab, setActiveTab] = useState<Tab>("tab1");;
    const [disciplineScore, setDisciplineScore] = useState<disciplineScore>(disciplineScoreState);

    useEffect(() => {
        switch (path) {
            case '/tumbling':
                setActiveTab("tab1");
                break;
            case '/tumbling/roundTwo':
                setActiveTab("tab2");
                break;
            case '/tumbling/roundThree':
                setActiveTab("tab3");
                break;
            case '/tumbling/score':
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
                    <Link href="/tumbling" className={`block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200py-2 px-4 ${activeTab === "tab1" ? "border-b-4 white-blue-500" : ""}`} >
                        Team Round
                    </Link>
                    <Link href="/tumbling/roundTwo" className={`block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200py-2 px-4 ${activeTab === "tab2" ? "border-b-4 white-blue-500" : ""}`}>
                        Round Two
                    </Link>
                    <Link href="/tumbling/roundThree" className={`block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200py-2 px-4 ${activeTab === "tab3" ? "border-b-4 white-blue-500" : ""}`}>
                        Round Three
                    </Link>
                    <Link href="/tumbling/score" className={`block w-full p-4 hover:bg-gray-200 hover:text-black transition duration-200py-2 px-4 ${activeTab === "tab4" ? "border-b-4 white-blue-500" : ""}`}>
                        Score Overview
                    </Link>
                </div>
                <div className="flex-grow">{children}</div>
            </TumblingScoreContext.Provider>
        </>
    )
}
