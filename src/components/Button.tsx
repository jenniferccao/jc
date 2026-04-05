interface ButtonProps {
    text: string;
    link?: string;
    color?: 'blue' | 'yellow' | 'pink';
    width?: string;
}

const Button = ({ text, link, color = 'blue', width = '' }: ButtonProps) => {
    let frontColor = '';
    let shadowColor = '';

    if (color === 'blue') {
        frontColor = 'bg-foreground text-background border-background';
        shadowColor = 'bg-background';
    } else if (color === 'yellow') {
        frontColor = 'bg-yellow text-foreground border-foreground';
        shadowColor = 'bg-foreground';
    } else if (color === 'pink') {
        frontColor = 'bg-pink text-foreground border-foreground';
        shadowColor = 'bg-foreground';
    }

    const wrapperProps = {
        className: `group relative inline-block cursor-pointer outline-none ${width}`.trim()
    };

    const shadowClasses = `absolute inset-0 rounded-xl transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1 z-0 ${shadowColor}`;
    const frontClasses = `relative block w-full z-10 border-2 px-5 py-2 md:px-8 md:py-3 rounded-xl font-bold text-md md:text-lg transition-transform duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1 uppercase tracking-normal text-center ${frontColor}`;

    if (link) {
        return (
            <a href={link} {...wrapperProps}>
                <span className={shadowClasses}></span>
                <span className={frontClasses}>{text}</span>
            </a>
        );
    }

    return (
        <button {...wrapperProps}>
            <span className={shadowClasses}></span>
            <span className={frontClasses}>{text}</span>
        </button>
    );
};

export default Button;