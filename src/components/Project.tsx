interface ProjectProps {
    name?: string;
    description?: string;
    stack?: string;
    image?: string;
    link?: string;
}

const Project = ({
    name,
    description,
    stack,
    image,
    link
}: ProjectProps) => {

    // Default image to the preview.png of the provided link, otherwise keep empty
    const displayImage = image || (link ? `${link.replace(/\/$/, '')}/preview.png` : undefined);

    const content = (
        <div className="relative w-[90vw] md:w-[70vw] max-w-[1000px]">
            {/* 3D Static Shadow Layer */}
            <div className="absolute inset-0 rounded-2xl bg-foreground translate-y-1.5 md:translate-y-2 translate-x-1.5 md:translate-x-2 z-0"></div>

            {/* Main Content Card */}
            <div className="relative z-10 flex flex-col md:flex-row w-full bg-background border-[2px] border-foreground rounded-2xl overflow-hidden p-6 md:p-8 min-h-[300px] gap-6 md:gap-10">

                {/* Left Side: Information */}
                <div className="flex flex-col justify-between w-full md:w-[45%]">
                    <div>
                        <h2 className="text-4xl md:text-6xl text-foreground uppercase leading-none tracking-wide">{name}</h2>
                        <p className="mt-3 md:mt-4 text-foreground/80 md:text-lg font-sans leading-relaxed">{description}</p>
                    </div>

                    <div className="mt-6 md:mt-10">
                        <p className="text-foreground md:text-lg font-sans">
                            <strong>Tech: </strong>{stack}
                        </p>
                    </div>
                </div>

                {/* Right Side: Image Placeholder */}
                <div className="w-full md:w-[55%] flex-grow relative">
                    <div className="w-full h-[250px] md:h-full bg-foreground flex items-center justify-center overflow-hidden">
                        {displayImage ? (
                            <img src={displayImage} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-background/50 font-sans text-sm">Image Placeholder</span>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="block outline-none decoration-none">
                {content}
            </a>
        );
    }

    return content;
};

export default Project;
