'use client'

import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react"; 
import { ArrowRight } from 'lucide-react';

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
]

export default function Navbar() {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className='w-full fixed top-4 z-50 '>
            <nav className="mx-auto w-full max-w-[calc(100vw-32px)] md:max-w-[704px] lg:max-w-7xl flex justify-between items-center rounded-xl bg-secondary/50 shadow-xl shadow-black/10 transition-all backdrop-blur-md h-12 md:h-16 lg:h-20 px-4 py-2 lg:px-6 lg:py-3">
                {/*Logo*/}
                <div className="relative shrink-0 h-6 md:h-8 lg:h-12 w-auto aspect-109/12">
                    <Image src='/logos/Logo Light Mode Horizontal.svg' alt='Cobble Road Labs Logo' fill className='object-contain'/>
                </div>

                {/*Navigation Links*/}
                <div className='hidden lg:flex items-center font-semibold text-xl lg:gap-6 font-sans '>
                    {navItems.map((item) => {
                        const isActive = isMounted && (item.href === currentPath);
                        return (
                            <Link key={item.name} href={item.href} className={`transition-all ${isActive ? 'text-accent ': 'text-dominant'} hover:border-b-3 hover:border-accent hover:pb-3 hover:text-accent`}>
                                {item.name}
                            </Link>
                        );
                    })}
                    <Button variant='primary' href='/'>Start your project</Button>
                </div>

                {/*Menu Button*/}  
                <button 
                    onClick={toggleMenu}
                    className='flex lg:hidden justify-center items-center p-1 rounded-md h-8 w-8 md:h-12 md:w-12 bg-accent text-background cursor-pointer'
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>              
            </nav>
            
            {/*Overlay Menu*/} 
            <div className={`absolute top-16 md:top-[88px] left-1/2 -translate-x-1/2 h-[calc(100vh-96px)] md:h-[calc(100vh-128px)]
                            bg-secondary/50 backdrop-blur-md shadow-2xl shadow-black/10 rounded-xl
                            flex flex-col items-left p-4 md:p-6 gap-4 md:gap-8
                            transition-transform duration-300 ease-in-out
                            max-w-[calc(100vw-32px)] md:max-w-[704px] w-full
                            lg:hidden
                            font-sans text-3xl md:text-5xl font-black
                            ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'}
                            `}
                            
            >
                {navItems.map((item) => {
                    const isActive = isMounted && (item.href === currentPath);
                    return (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            className={`transition-all ${isActive ? 'text-accent ': 'text-dominant'} hover:border-l-3 hover:border-accent hover:pl-4 hover:md:pl-6 hover:text-accent`}
                        >
                            {item.name}
                        </Link>
                    );
                })}
                <Link href='/' className={`transition-all flex gap-4 md:gap-6 items-center hover:border-l-3 hover:border-accent hover:pl-4 hover:md:pl-6 hover:text-accent`}>
                    Start your project
                    <ArrowRight className='h-8 w-8 md:h-12 md:w-12 mt-0.5'/>
                </Link>
            </div>
        </div>
    );
}