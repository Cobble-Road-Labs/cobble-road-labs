'use client';

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";
import { useState } from 'react';

interface ServiceCardProps {
    service: {
        serviceName: string;
        slug: { current: string };
        thumbnail: any;
        cardDescription: string;
    };
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const { serviceName, slug, thumbnail, cardDescription } = service;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            href={`/services/${slug.current}`}
            className={`flex flex-col gap-0 items-left rounded-2xl transition-all border-2 border-secondary/50
                       duration-300 group overflow-hidden hover:border-secondary shadow-primary/20 shadow-lg
                       ${isHovered ? 'bg-secondary' : 'bg-secondary/50 text-primary'}`}
        >
            <div className="relative w-full aspect-4/3">
                <Image src={urlFor(thumbnail).url()} alt={serviceName} fill className="object-cover "/>
            </div>
            <div className="flex flex-col p-4 md:p-6 gap-4 md:gap-5 lg:gap-6">
                <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl'>{serviceName}</h3>
                {cardDescription && (
                    <p className="font-sans text-base md:text-lg lg:text-xl text-center">{cardDescription}</p>
                )}
                <div className={`flex items-left font-sans font-semibold text-base md:text-lg lg:text-xl  transition-all gap-4 justify-center
                         ${isHovered ? 'gap-6' : 'gap-4'}
                      `}>
                    View service
                    <ChevronRight size={16} className={`mt-1 md:mt-1.75 transition-transform duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`}/>
                </div>
            </div>
        </Link>
    );
}