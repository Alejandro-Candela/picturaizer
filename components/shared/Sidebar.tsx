"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { Button } from "../ui/button";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <div className="flex size-full flex-col gap-2">
                <Link href="/" className="sidebar-logo">
                    <Image
                        src="/assets/images/picturaizer-logo.png"
                        alt="logo"
                        className="logo"
                        width={180}
                        height={280}
                    ></Image>
                </Link>
                <nav className="sidebar-nav">
                    <SignedIn>
                        <ul className="sidebar-nav_elements">
                            {navLinks.slice(0, 6).map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li
                                        key={link.route}
                                        className={`sidebar-nav_element group ${
                                            isActive
                                                ? "bg-purple-gradient text-white"
                                                : "text-gray-300"
                                        }`}
                                    >
                                        <Link className="sidebar-link" href={link.route}>
                                            <Image
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`${isActive && "brightness-200"}`}
                                            ></Image>
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul>
                            {navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li
                                        key={link.route}
                                        className={`sidebar-nav_element group my-2 ${
                                            isActive
                                                ? "bg-purple-gradient text-white"
                                                : "text-gray-300"
                                        }`}
                                    >
                                        <Link className="sidebar-link" href={link.route}>
                                            <Image
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`${isActive && "brightness-200"}`}
                                            ></Image>
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}

                            <li className="cursor-pointer gap-2 p-2">
                                <UserButton afterSignOutUrl="/" showName />
                            </li>
                        </ul>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="button bg-purple-gradient bg-cover">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
