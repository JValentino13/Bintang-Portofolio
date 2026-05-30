"use client"

import "../globals.css"
import { useEffect } from "react";
import { useTheme } from "@/components/themeContext";

export default function Contact() {
    const { setDark } = useTheme();

    useEffect(() => {
        setDark(true);

        return () => {
            setDark(false)
        };
    }, []);

    return (
        <main className="flex min-h-screen flex-col gap-7 items-center justify-center bg-black text-white relative">
            <div className="w-fit flex flex-col gap-5">

                <div className="flex flex-row gap-3 justify-center items-center self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64L12 9.548l6.545-4.91l1.528-1.145C21.69 2.28 24 3.434 24 5.457" />
                    </svg>

                    <p className="font-medium text-[20px]">bintang@example.com</p>
                </div>

                <div className="flex flex-col gap-1 justify-center items-center">
                    <p className="font-medium text-[20px]">Personal Contact</p>

                    {/* Watermark */}
                    <p className="font-medium text-[300px] -my-25">VENZZY</p>
                </div>

                <div className="flex flex-col gap-1 justify-center items-start self-start mt-3">
                    <div className="flex flex-row gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                        </svg>

                        <p className="font-medium text-[20px]">venzzy.exe</p>
                    </div>

                    <div className="flex flex-row gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12" />
                        </svg>

                        <p className="font-medium text-[20px]">Bibin</p>
                    </div>
                </div>

            </div>
        </main>
    )
}