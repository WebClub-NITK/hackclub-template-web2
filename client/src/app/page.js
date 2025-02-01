import Link from "next/link";

export default function LandingPage() {
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
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
        <Link href="/auth/signin">
          <button className="bg-transparent border-2 border-purple-700 hover:bg-purple-700 hover:text-white text-purple-700 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </button>
        </Link>
        <Link href="/auth/signup">
          <button className="bg-transparent border-2 border-purple-700 hover:bg-purple-700 hover:text-white text-purple-700 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
