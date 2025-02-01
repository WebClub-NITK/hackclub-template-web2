"use client"; // Make sure this is a client component

import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function SessionProviderWrapper({ children }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
