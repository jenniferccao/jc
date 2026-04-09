import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface ScrollingGalleryProps {
    images: string[];
    endItem?: ReactNode;
}

const ScrollingGallery = ({ images, endItem }: ScrollingGalleryProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current && scrollRef.current.children.length > 0) {
            const container = scrollRef.current;
            const firstChild = container.children[0] as HTMLElement;
            const lastChild = container.children[container.children.length - 1] as HTMLElement;

            const startScroll = firstChild.clientWidth / 2;
            const endScroll = (container.scrollWidth - container.clientWidth) - (lastChild.clientWidth / 2);

            const effectiveRange = endScroll - startScroll;
            let progress = 0;
            if (effectiveRange > 0) {
                progress = (container.scrollLeft - startScroll) / effectiveRange;
            }

            setScrollProgress(Math.max(0, Math.min(1, progress)));
        }
    };

    useEffect(() => {
        if (scrollRef.current && scrollRef.current.children.length > 0) {
            const container = scrollRef.current;
            const firstChild = container.children[0] as HTMLElement;
            container.scrollTo({ left: firstChild.clientWidth / 2, behavior: 'instant' });
        }

        handleScroll();
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-full flex items-center overflow-x-auto snap-x snap-mandatory gap-8 px-[50vw] pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
                {images.map((src, index) => (
                    <div key={index} className="flex-shrink-0 snap-center relative w-[78vw] md:w-[58vw] lg:w-[46vw] aspect-[4/3]">
                        <div className="absolute inset-0 rounded-2xl bg-foreground translate-y-2 translate-x-2 z-0"></div>
                        <div className="relative z-10 h-full w-full bg-foreground border-[3px] border-foreground rounded-2xl overflow-hidden">
                            <img
                                src={src}
                                alt={`Gallery Item ${index + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                ))}

                {endItem && (
                    <div className="flex-shrink-0 snap-center min-w-[220px] md:min-w-[260px] flex items-center justify-center">
                        {endItem}
                    </div>
                )}
            </div>

            <div className="w-full mt-6 flex items-center justify-center gap-1 md:gap-2 pointer-events-none">
                {images.map((_, i) => {
                    const threshold = i / (images.length - 1);
                    return (
                        <div
                            key={i}
                            className={`w-3 h-3 md:w-3 md:h-3 rounded-full border-2 border-foreground transition-colors duration-300 ${scrollProgress >= threshold - 0.05 ? 'bg-foreground' : 'bg-background'
                                }`}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default ScrollingGallery;
