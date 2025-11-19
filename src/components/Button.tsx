import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
    href: string;
    children: ReactNode;
    className?: string;
    variant?: ButtonVariant;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    forceHover?: boolean;
}

const getVariantClasses = (variant: ButtonVariant = 'primary') => {
    switch (variant) {
        case 'secondary':
            return {
                base: 'bg-background border-2 border-primary text-primary',
                hover: 'hover:bg-secondary hover:border-secondary',
                active: 'bg-secondary border-secondary',
            };
        case 'primary' :
        default:
            return {
                base: 'bg-accent text-background ',
                hover: 'hover:bg-primary',
                active: 'bg-primary',
            };
    }
}

export default function Button({ href, children, className='', variant='primary', type, disabled, onClick, forceHover = false}: ButtonProps ) {
    const variantClasses = getVariantClasses(variant);

    const hoverOrActiveClasses = forceHover ? variantClasses.active : variantClasses.hover;

    const classes = `text-base md:text-lg lg:text-xl
                    px-6 py-3 md:px-8 md:py-4
                    rounded-lg
                    font-semibold
                    transition-all
                    cursor-pointer
                    shadow-lg shadow-black/10
                    flex justify-center items-center text-center w-fit

                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}

                    ${variantClasses.base}
                    ${hoverOrActiveClasses}

                    ${className}
                    `;

    if (type) {
        return (
            <button type={type} className={classes} onClick={onClick}>
                {children}
            </button>
        )
    }

    return (
        <Link href={href || "#"} className={classes} onClick={onClick}>
            {children}
        </Link>
    )
}