'use client'
import { axiosClient } from '@/utils/axiosClient';
import { KEY_ACCESS_TOKEN, setItem } from '@/utils/localStroageManager';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
const images = [
    '/burger.jpg',  // Replace with the actual paths of your images
    '/icecream.jpeg',  // Replace with the actual paths of your images
    '/recipe.jpg'  // Replace with the actual paths of your images 
];

export default function Login() {
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await axiosClient.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, { email, password });
            setItem(KEY_ACCESS_TOKEN, data.result.accessToken);
            router.push('/');
        } catch (error) {
            console.error('Login error', error);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex min-h-screen">
            <div className="hidden md:flex w-1/2 bg-green-100 items-center justify-center relative">
                <Image
                    src={images[currentImage]}
                    alt="Changing Image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority
                    className=""
                />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="max-w-md w-full">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold cursive mb-3">Recipe Finder</h1>
                        <p className="text-gray-500">Welcome to <span className='text-primary cursive'>Recipe Finder</span></p>
                    </div>
                    <form onSubmit={handleEmailLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Username or Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                            <div className="text-right">
                                <a href="#" className="text-sm text-gray-500 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            Sign in
                        </button>
                    </form>
                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="mx-4 text-gray-500">or</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
                    >
                        {/* <Image src="/google-icon.svg" alt="Google" width={20} height={20} /> */}
                        <FaGoogle size={20} />
                        <span className="ml-2">Sign in with Google</span>
                    </button>
                    <div className="text-center mt-4">
                        <a href="/register" className="text-sm text-gray-500 hover:underline">
                            New to Recipe Finder? Create Account
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
