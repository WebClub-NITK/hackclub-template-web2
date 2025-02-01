"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.push("/auth/signin");
    };

    if (!session) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 to-black text-white">
                <h2 className="text-3xl">You need to sign in to view this page</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 to-black text-white">
            <h1 className="text-4xl font-bold">Welcome, {session.user.name || session.user.email}!</h1>
            <button
                onClick={handleLogout}
                className="mt-6 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg"
            >
                Logout
            </button>
        </div>
    );
}
