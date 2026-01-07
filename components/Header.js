"use client"

import { useState } from "react"
import Link from "next/link"
import {Menu, X, Zap} from "lucide-react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        {name: 'home', href: '/'},
        {name:"services", href: '/services'},
        {name:"À propos", href: '/about'},
        {name:"Contact", href: '/contact'},
    ]

    return (
        <header className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="p-2 bg-primary rounded-lg group-hover:bg-primary/90 transition-colors">
                                <Zap className="h-5 w-5 text-white"/>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">NextVibe</span>
                        </Link>
                    </div>

                    {/* desktop nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.name}
                            href= {link.href}
                            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary dark:hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* action btn */}
                    <div className="hidden md:flex items-center">
                        <Link href="/contact"
                        className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full  text-sm font-medium transition-all shadow-primary/25 hover:shadow-primary/40 active:scale-95"
                        >
                            Démarrer
                        </Link>
                    </div>

                    {/* mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden absolute w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            >
                <div className="px-4 pt-2 pb-6 space-y-6">
                    {navLinks.map((link) => (
                        <Link key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="black px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-primary transition-colors"
                            >
                                {link.name}
                        </Link>
                    ))}

                    <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                        <Link href="/contact"
                        className="block w-full text-center bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg text-base font-medium transition-all shadow-lg"
                        >
                            Démarrer un Projet
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}