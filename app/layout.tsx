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
                    {/* Essential Meta Tags */}
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="theme-color" content="#624cf5" />
                    
                    {/* Primary Meta Tags */}
                    <meta name="title" content="Picturaizer - AI Image Creation & Modification Platform" />
                    <meta name="description" content="Create, modify, and transform images using advanced AI technology. Generate unique artwork, edit photos, and bring your creative vision to life with Picturaizer." />
                    <meta name="keywords" content="AI image generation, image editing, artificial intelligence, digital art, photo manipulation, AI art, Picturaizer" />
                    <meta name="author" content="Picturaizer" />
                    <meta name="robots" content="index, follow" />
                    
                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Picturaizer" />
                    <meta property="og:title" content="Picturaizer - AI Image Creation & Modification Platform" />
                    <meta property="og:description" content="Create, modify, and transform images using advanced AI technology. Generate unique artwork, edit photos, and bring your creative vision to life." />
                    <meta property="og:image" content="https://picturaizer.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fpicturaizer-logo.png&w=384&q=75" />
                    <meta property="og:url" content="https://picturaizer.vercel.app/" />
                    
                    {/* Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Picturaizer - AI Image Creation & Modification Platform" />
                    <meta name="twitter:description" content="Create, modify, and transform images using advanced AI technology. Generate unique artwork, edit photos, and bring your creative vision to life." />
                    <meta name="twitter:image" content="https://picturaizer.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fpicturaizer-logo.png&w=384&q=75" />
                    
                    {/* Apple Touch Icons */}
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    
                    {/* Favicon */}
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    
                    {/* Canonical URL */}
                    <link rel="canonical" href="https://picturaizer.vercel.app/" />
                </head>
                <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
