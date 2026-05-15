import { useState } from 'react';

const About = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div
            id="lineup"
            className="scroll-mt-28 md:scroll-mt-32 relative z-10 mt-[5vh] md:mt-[10vh] mb-[6vh] flex flex-col items-center home-reveal home-delay-4"
        >
            <div className="relative w-[95vw] md:w-[70vw] aspect-[2445/2070] overflow-hidden">
                <img
                    src="/lineup.png"
                    alt="lineup"
                    className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-[1400ms] ease-out ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="eager"
                    onLoad={() => setIsLoaded(true)}
                />
            </div>
        </div>
    );
};

export default About;