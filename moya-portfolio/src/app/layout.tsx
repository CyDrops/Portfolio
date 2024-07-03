import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ReactNode } from "react";
import { inter } from "./fonts";
import classNames from "classnames";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
    title: "Moya Portfolio",
    description: "Generated by JB Moya",
};

export default function RootLayout({
    children,
    about,
    skills,
    projects,
    contacts,
}: {
    children: ReactNode;
    about: ReactNode;
    skills: ReactNode;
    projects: ReactNode;
    contacts: ReactNode;
}) {
    const svgStyle = {
        position: "fixed",
        userSelect: "none",
        pointerEvents: "none",
        zIndex: "1",
    };

    return (
        <html
            lang="en"
            className={classNames(`duration-700`, inter.className)}
            data-theme="dark"
        >
            <body className="">
                {/* <rect width="100%" height="100%" filter="url(#noiseFilter)" /> */}
                {/* viewBox="0 0 300 300"  */}
                <div className="hehe">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <filter id="noiseFilter">
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="2.45"
                                numOctaves="1"
                                stitchTiles={"stitch"}
                            />
                        </filter>
                    </svg>
                </div>

                <div className="w-full">
                    <StoreProvider>
                        <Navbar />
                        <main
                            className={classNames(
                                "sm:max-w-3xl max-w-xl  mx-auto px-2 text-custom-content-2"
                            )}
                        >
                            {children}
                            {about}
                            {skills}
                            {projects}
                            {contacts}
                        </main>

                        {/* <Navbar useFooter /> */}
                    </StoreProvider>
                </div>
            </body>
        </html>
    );
}
