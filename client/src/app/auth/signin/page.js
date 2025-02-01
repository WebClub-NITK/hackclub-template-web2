"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.error) {
            setError(res.error);
        } else {
            // Redirect the user on successful login
            window.location.href = "/dashboard"; // Or use `useRouter` from Next.js for routing
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Sign In</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        placeholder="Email"
                        required
                    />
                    {/* Password Input */}
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        placeholder="Password"
                        required
                    />
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-700 hover:bg-purple-800 rounded-lg text-white font-bold transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </button>
                </form>
                {/* Error Message */}
                {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
                <div className="mt-4 text-center">
                    <p>
                        Don't have an account?{" "}
                        <a href="/auth/signup" className="text-purple-700 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
