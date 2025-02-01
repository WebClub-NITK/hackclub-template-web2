"use client"; // Ensures the component runs on the client-side

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // For redirecting users

export default function LandingPage() {
  const { data: session } = useSession(); // Get session data
  const router = useRouter();

  const handleGetStarted = () => {
    if (session) {
      router.push("/dashboard"); // Redirect to dashboard if logged in
    } else {
      router.push("/auth/signin"); // Otherwise, redirect to login page
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white flex flex-col justify-center items-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Welcome to HackClub Website
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          Join the community and explore various opportunities, challenges, and learning resources.
        </p>
      </header>

      <div className="flex space-x-4">
        <button
          onClick={handleGetStarted}
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started
        </button>
        
      </div>
    </div>
  );
}
