"use client";

import { useState } from "react";


export default function SignUpPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Registration successful!");
            window.location.href = "/auth/signin";
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        placeholder="Password"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-700 hover:bg-purple-800 rounded-lg text-white font-bold transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p>
                        Already have an account?{" "}
                        <a href="/auth/signin" className="text-purple-700 hover:underline">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
