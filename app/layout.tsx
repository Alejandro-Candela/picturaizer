import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/react";

const IBMPlex = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
    title: "Picturaizer",
    description: "A platform to create and modify images with AI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            appearance={{
                variables: { colorPrimary: "#624cf5" },
            }}
        >
            <html lang="en" className="dark">
                <head>
                    <meta name="twitter:card" content="A platform to create and modify images with AI" />
                    <meta property="og:title" content="Picturaizer" />
                    <meta property="og:description" content="OA platform to create and modify images with AI" />
                    <meta property="og:image" content="https://picturaizer.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fpicturaizer-logo.png&w=384&q=75" />
                    <meta property="og:url" content="https://picturaizer.vercel.app/" />
                </head>
                <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
