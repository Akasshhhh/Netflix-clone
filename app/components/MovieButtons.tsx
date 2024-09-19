"use client"

import { Button } from "@/components/ui/button"
import { InfoIcon, PlayCircle } from "lucide-react"
import { useState } from "react"
import PlayVideoModal from "./PlayVideoModal"

interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    release: number;
    age: number;
    duration: number;
    id: number
}

export default function MovieButtons({ title, overview, youtubeUrl, release, age, duration, id }: iAppProps) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setOpen(!open)} className="text-lg font-medium ">
                <PlayCircle className="mr-2 h-6 w-6" /> Play
            </Button>
            <Button onClick={() => setOpen(!open)} className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white">
                <InfoIcon className="mr-2 h-6 w-6" /> Learn More
            </Button>
            <PlayVideoModal age={age} changeState={setOpen} duration={duration} overview={overview} release={release} state={open} title={title} youtubeUrl={youtubeUrl} key={id} />
        </>
    )
}