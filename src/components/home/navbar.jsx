'use client'
import React, { useEffect, useState } from 'react';
import UserMenu from '../userMenu'
import { FaArrowLeft } from 'react-icons/fa';
import { axiosClient } from '@/utils/axiosClient';

const Navbar = () => {
    const [userData, setUserData] = useState();

    const handleBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back();
        }
    };

    const getUser = async () => {
        try {
            const response = await axiosClient.get(`${process.env.NEXT_PUBLIC_API_URL}/login/success`)
            setUserData(response.result.user)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        getUser();
    }, [])

    return (
        <nav className="bg-primary/90 text-primary-foreground h-20 flex items-center sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center h-full px-6">
                <div className="flex items-center">
                    <button onClick={handleBack} className="hover:text-secondary-foreground font-bold flex items-center gap-2">
                        <FaArrowLeft size={28} />
                    </button>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <a href="/" className="text-3xl font-bold cursive text-primary-foreground">
                        Recipe Finder
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <UserMenu userData={userData}/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
