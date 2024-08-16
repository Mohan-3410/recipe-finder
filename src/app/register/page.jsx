'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { axiosClient } from '@/utils/axiosClient'
import { useRouter } from 'next/navigation';
const images = [
  '/burger.jpg',  // Replace with the actual paths of your images
  '/icecream.jpeg',  // Replace with the actual paths of your images
  '/recipe.jpg'  // Replace with the actual paths of your images 
];

export default function Register() {
  const router = useRouter()
  const [currentImage, setCurrentImage] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axiosClient.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {name: username, email, password });
      router.push('/login')
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user');
    }
  };
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex w-1/2 bg-green-100 items-center justify-center relative">
        <Image
          src={images[currentImage]}
          alt="Changing Image"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold cursive mb-3">Recipe Finder</h1>
            <p className="text-gray-500">Create an account on <span className='text-primary cursive'>Recipe Finder</span></p>
          </div>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Create Account
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
            <FaGoogle size={20} />
            <span className="ml-2">Sign up with Google</span>
          </button>
          <div className="text-center mt-4">
            <a href="/login" className="text-sm text-gray-500 hover:underline">
              Already have an account? Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
