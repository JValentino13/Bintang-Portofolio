"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./themeContext";

export default function Navbar() {
    const pathName = usePathname();
    const [mounted, setMounted] = useState(false);
    const { dark } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const navLinkClass = dark
      ? "text-white hover:bg-white hover:text-black px-5 py-1 transition-all duration-300"
      : "text-black hover:bg-black hover:text-white px-5 py-1 transition-all duration-300";

    const activeNavClass = dark
      ? "bg-white text-black px-5 py-1"
      : "bg-black text-white px-5 py-1";

    if (!mounted) return null;

    return (
        <nav className="h-fit w-full px-30 pt-10 bg-transparent flex flex-row justify-between cursor-pointer fixed z-9999">
          {/* Logo */}
          <div>
            <Link href="/" className={`font-bold text-[20px] ${dark ? 'text-white' : 'text-black'}`}>VENZZY</Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-row gap-10">
            <Link href="/" className={`${pathName === '/' ? activeNavClass : navLinkClass }`}>Index</Link>
            <Link href="/portofolio" className={`${pathName === '/portofolio' ? activeNavClass : navLinkClass }`}>Portofolio</Link>
          </div>

          {/* Get in Touch */}
          <div>
            <Link href="/contact" className={`text-[20px] ${pathName === '/contact' ? activeNavClass : navLinkClass }`}>Get In Touch</Link>
          </div>
        </nav>
    )
}