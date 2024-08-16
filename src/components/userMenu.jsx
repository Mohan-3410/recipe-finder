'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeSwitcher } from '@/utils/themeSwitcher';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu';
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';

const UserMenu = ({userData}) => {
    const router = useRouter();
    const path = usePathname();
    const handleFavouriteRecipe = () => {
        router.push('/favorites');
    };

    const handleLogOut = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/logout`;
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                {userData !== undefined ?   <Image src={userData?.avatar?.url || userData?.name.charat[0]} alt={"logo of " + userData?.name} width={36} height={36} className='rounded-full'/> :<FaUserCircle size={32} />  }
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                    <ThemeSwitcher />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {!path.includes('favorites') && <DropdownMenuItem onClick={handleFavouriteRecipe} className="cursor-pointer">
                    Favorites Recipe
                </DropdownMenuItem>}
                <DropdownMenuGroup></DropdownMenuGroup>
                <DropdownMenuItem onClick={handleLogOut} className="cursor-pointer">
                    Logout
                    {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;
