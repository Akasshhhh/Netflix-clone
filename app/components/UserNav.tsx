"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";
export default function UserNav() {

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className=" relative h-10 w-10 rounded-sm">
                    <Avatar className=" h-10 w-10 rounded-sm">
                        <AvatarImage src="https://cybbmaffzpefjilvvatr.supabase.co/storage/v1/object/public/user-image//avatar.png" />
                        <AvatarFallback className="rounded-sm">Akash</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className=" text-sm font-medium leading-none">Akash</p>
                        <p className=" text-xs leading-none text-muted-foreground">akashisntreal@gmail.com</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={()=>signOut()}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}