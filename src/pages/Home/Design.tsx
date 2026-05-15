import { useEffect, useRef, useState } from 'react';

import ScrollingGallery from "../../components/ScrollingGallery";
import Button from "../../components/Button";

const Design = () => {
    const bgImageRef = useRef<HTMLImageElement | null>(null);
    const [bgLoaded, setBgLoaded] = useState(false);

    useEffect(() => {
        if (bgImageRef.current?.complete) {
            setBgLoaded(true);
        }
    }, []);

    // Exactly 3 aspect ratios: Horizontal (4:3), Tall (2:3), Square (1:1)
    const designs = [
        "https://cdn.dribbble.com/userupload/9327013/file/original-efd255f169a45139f1454c2d70e1cab8.png?resize=1504x1127&vertical=center",
        "https://cdn.dribbble.com/userupload/6368391/file/original-f3a11c0d831f40222b65edea506c1a9b.jpeg?resize=1504x1203&vertical=center",
        "https://cdn.dribbble.com/userupload/9408730/file/original-d03ea85a15da94c3b5685a0dc323f007.png?resize=2048x1401&vertical=center",
        "https://cdn.dribbble.com/userupload/11243687/file/original-e238407a42bf9fff40388293f9840807.png?resize=2048x1352&vertical=center",
        "https://cdn.dribbble.com/userupload/47329075/file/ec7693fcd8454cdb1510e1dff7bcf627.png?resize=2048x1534&vertical=center",
        "https://cdn.dribbble.com/userupload/30468861/file/original-4870de527e62862ecd953706d5bd1809.png?resize=2048x1489&vertical=center",
    ];

    return (
        <div id="design" className="scroll-mt-28 md:scroll-mt-32 relative overflow-hidden flex flex-col items-center w-full pb-10">
            <img
                ref={bgImageRef}
                src="/bgimgdesign.png"
                alt=""
                aria-hidden="true"
                loading="eager"
                onLoad={() => setBgLoaded(true)}
                className={`absolute inset-0 z-0 h-full w-full object-cover object-bottom transition-opacity duration-[1800ms] ease-out ${
                    bgLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            />

            <div className="relative z-10 flex items-center justify-center pt-10 pb-10 md:pt-20 md:pb-16">
                <h1 className="text-foreground font-goof text-3xl md:text-5xl tracking-wide home-reveal">DESIGN</h1>
            </div>

            <div className="relative z-10 w-full home-reveal home-delay-1">
                <ScrollingGallery
                    images={designs}
                    endItem={<Button text="SEE MORE" link="https://dribbble.com/jencao" target="_blank" color="pink" width="w-[160px]" />}
                />
            </div>

            <div className="relative z-10 w-[80vw] flex items-center justify-center mt-10 md:mt-20 home-reveal home-delay-2">
                <h1 className="text-protrude text-background text-3xl md:text-5xl tracking-wide">THANKS FOR THE VISIT :)</h1>
            </div>
        </div>
    );
};

export default Design;