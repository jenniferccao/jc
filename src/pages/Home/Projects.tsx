import Project from "../../components/Project";
import Button from "../../components/Button";

const Projects = () => {
    return (
        <div id="projects" className="flex flex-col items-center pb-10 w-full bg-[url('/bgimgproj.png')] bg-cover bg-top bg-no-repeat">
            <div className="flex items-center justify-center bg-green w-full h-[3vh] md:h-[5vh]">
                <p className="text-background font-sans text-xs md:text-sm font-bold tracking-wide">BACKGROUND IMAGES BELOW TAKEN BY ME :)</p>
            </div>

            <div className="flex items-center justify-center">
                <h1 className="text-foreground text-center font-goof leading-none text-3xl md:text-5xl mt-10 md:mt-10">PROJECTS</h1>
            </div>

            <div className="flex items-center justify-center flex-col gap-10 mt-10">
                <Project
                    name="PRERIDE"
                    description="An app that predicts relative difficulty of segments of a given bike route based on hill gradients and wind data of a given day."
                    stack="React, Typescript, OpenMeteo, Mapbox"
                    link="https://preride.vercel.app/"
                />

                <Project
                    name="BINGO BUD"
                    description="A web-based bingo card scanner and marker, helping people keep track of multiple cards and calls."
                    stack="React, Typescript, Tesseract OCR"
                    link="https://bingobud.vercel.app/"
                />

                <Project
                    name="CHIRP IT!"
                    description="A Google Chrome extension for accessible learning by letting users interact with webpages through voice."
                    stack="Javascript, Chrome Extension API, ElevenLabs"
                    link="https://github.com/jenniferccao/Chirp"
                    image="/chirp.png"
                />

                <div className="w-full flex justify-end">
                    <Button text="SEE MORE" link="https://github.com/jenniferccao" color="pink" width="w-[150px]" />
                </div>
            </div>

        </div >
    );
};

export default Projects;
