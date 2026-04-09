import ScrollingGallery from "../../components/ScrollingGallery";

const Design = () => {
    // Exactly 3 aspect ratios: Horizontal (4:3), Tall (2:3), Square (1:1)
    const designs = [
        "https://placehold.co/600x450/FFD151/3E4875?text=Horizontal",
        "https://placehold.co/400x600/FF73DC/3E4875?text=Tall",
        "https://placehold.co/500x500/42C790/3E4875?text=Square",
        "https://placehold.co/600x450/FCF5E5/3E4875?text=Horizontal",
        "https://placehold.co/400x600/FFD151/3E4875?text=Tall",
        "https://placehold.co/500x500/FF73DC/3E4875?text=Square",
    ];

    return (
        <div id="design" className="scroll-mt-28 md:scroll-mt-32 flex flex-col items-center bg-foreground w-full pb-20">
            <div className="flex items-center justify-center pt-10 pb-10 md:pt-20 md:pb-16">
                <h1 className="text-yellow font-goof text-3xl md:text-5xl tracking-wide">DESIGN - WORK IN PROGRESS</h1>
            </div>

            <ScrollingGallery images={designs} />
        </div>
    );
};

export default Design;