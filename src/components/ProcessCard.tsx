'use client';

import React from "react";

interface ProcessCardProps {
    heading: string;
    description: string;
    icon: React.ReactNode;
    link?: React.ReactNode;
    className?: string;
    iconSize?: number;
}

interface IconPropsWithSize {
    size?: number;
    className?: string;
}

export default function ProcessCard({ heading, description, icon, link, className }: ProcessCardProps) {

    const [windowWidth, setWindowWidth] = React.useState(0);

    React.useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let iconSize = 48; // default size
    if (windowWidth >= 1024) { // large screens
        iconSize = 64;
    }

    const sizedIcon = React.isValidElement(icon) ?
        React.cloneElement(icon as React.ReactElement<IconPropsWithSize>, {
            size: iconSize,
            className: 'text-accent',
        }) : icon;

    return (
        <div className={`bg-background rounded-2xl overflow-hidden h-full shadow-2xl shadow-black/10 ${className}`}>
            <div className="w-full h-full max-w-full max-h-full bg-secondary/50 p-4 lg:p-6 gap-4 md:gap-5 lg:gap-6 flex flex-col items-center md:items-start">
                {sizedIcon}
                <h3 className="text-center font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary">{heading}</h3>
                <p className="font-sans font-normal text-base md:text-lg lg:text-xl text-center md:text-left">{description}</p>
                <div className="mt-auto">
                    {link}
                </div>
            </div>
        </div>
    );
}