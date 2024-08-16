'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeSwitcher } from '@/utils/themeSwitcher';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu';
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import UserAvatar from "./userAvatar"
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { axiosClient } from '@/utils/axiosClient';

const UserMenu = () => {
    const router = useRouter();
    const userData = useSelector(state => state.working.myProfile)
    const path = usePathname();
    const handleFavouriteRecipe = () => {
        router.push('/favorites');
    }; 

    const handleLogOut = async () => {
        localStorage.removeItem('key_access_token');
        await axiosClient.post('/api/auth/logout')
        router.push('/');
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
            <UserAvatar userData={userData} />
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
