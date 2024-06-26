"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { setTheme } from "../../lib/features/themeSlice";

import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/lib/store";
import classNames from "classnames";

import { FaUser, FaProjectDiagram, FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";

const Navbar = ({ useFooter = false }: { useFooter?: boolean }) => {
    const { menuStates } = useSelector((state: RootState) => state.navbar);
    const { theme } = useSelector((state: RootState) => state.theme);

    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch(setTheme(theme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        console.log("theme", theme);
    }, [theme]);

    const menus = {
        home: {
            name: "Home",
            href: "#home",
            icon: <FaHome className="text-custom-content-2" />,
        },
        about: {
            name: "About",
            href: "#about",
            icon: <FaUser className="text-custom-content-2" />,
        },
        skills: {
            name: "Skills",
            href: "#skills",
            icon: <IoSettings className="text-custom-content-2" />,
        },
        projects: {
            name: "Projects",
            href: "#projects",
            icon: <FaProjectDiagram className="text-custom-content-2" />,
        },
        contacts: {
            name: "Contacts",
            href: "#contacts",
            icon: <RiContactsBook3Fill className="text-custom-content-2" />,
        },
    };

    return (
        <>
            <nav
                className={classNames(
                    "w-[30rem] mx-auto text-custom-content-2/65 sticky top-10 z-50"
                    // { "bg-custom-static-1/5": theme !== "dark" }
                )}
            >
                <div className="flex space-x-4 items-center">
                    {Object.entries(menus).map(([key, menu]) => (
                        <Link
                            key={key}
                            href={menu.href}
                            className={classNames(
                                "flex-1 w-full justify-center text-center hover:scale-105 hover:text-custom-content-1",
                                {
                                    "text-custom-content-1 border-b-custom-content-1 border-b transition-all duration-500 ease-in-out":
                                        menuStates[menu.name],
                                },
                            )}
                        >
                            <span className="sm:hidden aspect-square p-3">
                                {menu.icon}
                            </span>
                            <span className="hidden sm:block">{menu.name}</span>
                        </Link>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="text-2xl text-custom-content-1 p-1 m-1"
                    >
                        {theme === "dark" ? (
                            <MdDarkMode />
                        ) : (
                            <MdOutlineLightMode />
                        )}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
