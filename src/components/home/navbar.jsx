'use client'
import { getMyInfo } from '@/redux/slice/workingSlice';
import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import UserMenu from '../userMenu';

const Navbar = () => {
    const dispatch = useDispatch()

    const handleBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back();
        }
    };
    useEffect(()=>{
        const accessToken = localStorage.getItem('key_access_token');
        if(accessToken){
            dispatch(getMyInfo());
        }
      },[])
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
                    <UserMenu/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
