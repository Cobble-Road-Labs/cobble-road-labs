'use client';

import Link from 'next/link';
import Image from 'next/image';
import {urlFor} from '@/sanity/lib/image';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface CaseStudyCardProps{
    caseStudy: {
        title: string;
        slug: { current: string};
        thumbnail: any;
        cardDescription: string;
        linkedService: any;
    }
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
    const { title, slug, thumbnail, cardDescription, linkedService } = caseStudy;
    const [ isHovered, setIsHovered] = useState(false);

    return (
        <Link onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            href={`/case-studies/${slug.current}`}
            className={`flex flex-col gap-0 p-4 lg:p-6 items-center rounded-2xl transition-all border-2 border-secondary/50
                        duration-300 group overflow-hidden hover:border-secondary shadow-primary/20 shadow-lg md:max-w-[340px] lg:max-w-[405.33px]
                        ${isHovered ? 'bg-secondary' : 'bg-secondary/50 text-primary'}`}
        >
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <Image src={urlFor(thumbnail).url()} alt={title} fill className="object-cover"/>
            </div>
            <div className="flex flex-col mt-4 md:mt-6 gap-4 md:gap-5 lg:gap-6 h-full items-center">
                <div className={`flex items-center px-4 py-2 border border-primary rounded-full w-fit -mb-2 lg:-mb-4 duration-300 transition-all ${isHovered ? 'bg-primary text-background' : 'bg-transparent text-primary'}`}>
                    <p className="font-sans uppercase font-semibold text-center md:text-left text-xs md:text-xs lg:text-sm">{linkedService.service}</p>
                </div>
                <h3 className='font-heading text-center font-bold text-2xl md:text-3xl lg:text-4xl'>{title}</h3>
                {cardDescription && (
                    <p className="font-sans text-base md:text-lg lg:text-xl text-center">{cardDescription}</p>
                )}
                <div className={`flex items-left font-sans font-semibold text-base md:text-lg lg:text-xl  transition-all gap-4 justify-center mt-auto
                         ${isHovered ? 'gap-6' : 'gap-4'}
                      `}>
                    Read case study
                    <ChevronRight size={16} className={`mt-1 md:mt-1.75 transition-transform duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`}/>
                </div>
            </div>
        </Link>
    )
}