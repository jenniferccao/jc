import { useRef, useState, useEffect } from "react";

interface ScrollingGalleryProps {
    images: string[];
}

const ScrollingGallery = ({ images }: ScrollingGalleryProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current && scrollRef.current.children.length > 0) {
            const container = scrollRef.current;
            const firstChild = container.children[0] as HTMLElement;
            const lastChild = container.children[container.children.length - 1] as HTMLElement;

            // Define the true functional scroll range (from the centered first item to the centered last item)
            // This ignores the massive 50vw empty padding voids at both ends of the container
            const startScroll = firstChild.clientWidth / 2;
            const endScroll = (container.scrollWidth - container.clientWidth) - (lastChild.clientWidth / 2);

            const effectiveRange = endScroll - startScroll;
            let progress = 0;
            if (effectiveRange > 0) {
                progress = (container.scrollLeft - startScroll) / effectiveRange;
            }

            // Clamp mathematically between 0.0 and 1.0 (prevents dots undoing if dragging deep into the padding edge)
            setScrollProgress(Math.max(0, Math.min(1, progress)));
        }
    };

    useEffect(() => {
        if (scrollRef.current && scrollRef.current.children.length > 0) {
            // Because of the 50vw left padding, the first child's left edge natively sits exactly at the center. 
            // We just scroll the viewport right by exactly half of the child's computed width to perfectly center it.
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
            {/* Horizontal Scrolling Gallery structured like 3D Cards */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-full flex items-center overflow-x-auto snap-x snap-mandatory gap-8 px-[50vw] pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
                {images.map((src, index) => (
                    <div key={index} className="flex-shrink-0 snap-center relative">

                        {/* 3D Static Shadow Layer */}
                        <div className="absolute inset-0 rounded-2xl bg-background translate-y-2 translate-x-2 z-0"></div>

                        {/* Main Display Layer */}
                        <div className="relative z-10 bg-background border-[3px] border-background rounded-2xl overflow-hidden flex items-center justify-center">
                            <img
                                src={src}
                                alt={`Gallery Item ${index + 1}`}
                                // Mathematically limits the image to bounds that fit fully on screen, preserving true aspect ratio
                                className="w-auto h-auto min-h-[200px] max-h-[50vh] md:max-h-[60vh] max-w-[80vw] md:max-w-[70vw] object-contain"
                            />
                        </div>

                    </div>
                ))}
            </div>

            {/* Boxed Scroll Indicator Dots */}
            <div className="w-full mt-6 flex items-center justify-center gap-1 md:gap-2 pointer-events-none">
                {images.map((_, i) => {
                    const threshold = i / (images.length - 1);
                    return (
                        <div
                            key={i}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${scrollProgress >= threshold - 0.05 ? 'bg-yellow' : 'bg-background'
                                }`}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default ScrollingGallery;
