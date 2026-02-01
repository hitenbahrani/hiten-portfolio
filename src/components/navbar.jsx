import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navlinks = [
        { href: "#about", text: "About" },
        { href: "#projects", text: "Projects" },
        { href: "#experience", text: "Experience" },
        { href: "#contact", text: "Get in Touch" },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav
                className="fixed top-0 left-0 z-50 w-full
                           backdrop-blur-md bg-black/60
                           border-b border-white/10"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="h-16 px-6 md:px-16 lg:px-24
                                flex items-center justify-between">

                    {/* Name */}
                    <a
                        href="#"
                        className="text-lg font-semibold tracking-tight text-white"
                    >
                        HB
                    </a>

                    {/* Links */}
                    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70">
                        {navlinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hover:text-white transition"
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden active:scale-90 transition"
                    >
                        <MenuIcon className="size-6 text-white" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Fullscreen Menu */}
            <div
                className={`fixed inset-0 z-[100] bg-black/80 backdrop-blur
                            flex flex-col items-center justify-center
                            gap-8 text-lg text-white
                            transition-transform duration-300
                            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {navlinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-indigo-400 transition"
                    >
                        {link.text}
                    </a>
                ))}

                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-6 flex items-center justify-center
                               size-10 rounded-md
                               bg-white text-black
                               hover:bg-slate-200 transition"
                >
                    <XIcon />
                </button>
            </div>
        </>
    );
}