import Image from "next/image";
import prisma from "../utils/db";
import { MovieCard } from "./MovieCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";

async function getData(userId: string) {
    
    const data = await prisma.movie.findMany({
        select: {
            id: true,
            overview: true,
            title: true,
            WatchLists: {
                where:{
                    userId: userId
                }
            },
            imageString: true,
            youtubeString: true,
            release: true,
            age: true,
            duration: true
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 4,
    });
    return data;
}

export default async function RecentlyAdded() {
    const session = await getServerSession(authOptions)
    const userId = session?.user?.email as string
    const data = await getData(userId);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-6">
            {data.map((movie) => (
                <div key={movie.id} className="relative h-48">
                    <Image
                        src={movie.imageString}
                        alt="Movie"
                        className="rounded-sm absolute w-full h-full object-cover"
                        width={500}
                        height={400}
                    />
                    <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                        <div className=" bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
                            <Image
                                src={movie.imageString}
                                alt={movie.title}
                                width={800}
                                height={800}
                                className="absolute -z-10 w-full h-full rounded-lg object-cover"
                            />
                            <MovieCard
                                title={movie.title}
                                overview={movie.overview}
                                movieId={movie.id}
                                watchListId={movie.WatchLists[0]?.id}
                                youtubeUrl={movie.youtubeString}
                                watchList={movie.WatchLists.length > 0 ? true : false}
                                key={movie.id}
                                age={movie.age}
                                duration={movie.duration}
                                year={movie.release}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
