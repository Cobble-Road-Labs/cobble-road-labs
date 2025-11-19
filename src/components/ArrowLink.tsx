import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ArrowLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function ArrowLink({ href, children, className='' }: ArrowLinkProps) {
    return (
        <Link href={href} className={`${className} flex items-left gap-4 md:gap-5 lg:gap-6 font-body font-semibold text-base md:text-lg lg:text-xl text-primary 
                                    hover:text-accent hover:gap-5 hover:md:gap-6 hover:lg:gap-7 transition-all duration-200 ease-in-out`}>
            {children}
            <ChevronRight className="transition-transform text-base md:text-lg lg:text-xl md:mt-0.5 lg:mt-0.75"/>
        </Link>
    );
}