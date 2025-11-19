'use client';

import Button from "./Button";
import Image from "next/image";
import { useState } from "react";

const DEFAULT_IMAGE_PATH = '/images/cta/default.png';
const HOVER_IMAGE_PATH = '/images/cta/hover.png';

interface CTASectionProps {
    heading: string;
    description: string;
}

export default function CTASection({ heading, description }: CTASectionProps) {
    const [isHovered, setIsHovered] = useState(false);

    const containerClasses = `
        flex flex-col lg:flex-row gap-6 lg:gap-8 rounded-3xl shadow-2xl shadow-black/10 p-4 pb-0 md:p-6 md:pb-0 lg:p-8 lg:pb-0 items-center
        transition-colors duration-300
        ${isHovered ? 'bg-accent' : 'bg-background'}
    `;

    const textClasses = isHovered ? 'text-background' : 'text-primary';

    const imagePath = isHovered ? HOVER_IMAGE_PATH : DEFAULT_IMAGE_PATH;

    return (
        <div className={containerClasses} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 items-center lg:items-start">
                <h1 className={`font-headings font-black text-4xl md:text-5xl lg:text-[64px] text-center lg:text-left ${textClasses}`}>{heading}</h1>
                <p className={`font-body font-normal text-base md:text-lg lg:text-xl text-center lg:text-left ${textClasses}`}>{description}</p>
                <Button href="/contact" className="mt-4" forceHover={isHovered}>Get in Touch</Button>
            </div>
            <div className="aspect-square relative transition-all duration-300 w-full">
                <Image key={imagePath} src={imagePath} alt='CTA Visual' fill className="object-contain transition-all duration-300" priority/>
            </div>
        </div>
    );
}