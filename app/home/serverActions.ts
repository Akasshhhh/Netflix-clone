"use server"
import { revalidatePath } from "next/cache"
import prisma from "../utils/db"
import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth"

export async function addToWatchlist(formData: FormData){
    "use server"
    const movieId = formData.get('movieId')
    const pathname = formData.get('pathname') as string
    const session = await getServerSession(authOptions)
    const userId = session?.user?.email as string

    const data = await prisma.watchList.create({
        data: {
            userId: userId,
            movieId: Number(movieId),
        }
    })

    revalidatePath(pathname)
}

export async function deleteFromWatchlist(formData: FormData){
    "use server"
    const watchlistId = formData.get('watchlistId') as string
    const pathname = formData.get('pathname') as string
    const data = await prisma.watchList.delete({
        where:{
            id: watchlistId
        }
    })

    revalidatePath(pathname)
}