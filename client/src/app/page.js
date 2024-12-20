export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white flex flex-col justify-center items-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Welcome to HackClub Website</h1>
      </header>
      <footer>
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-full">
          Get Started
        </button>
      </footer>
    </div>
  );
}
