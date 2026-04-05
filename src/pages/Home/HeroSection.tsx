import About from "./About";
import Button from "../../components/Button";

const HeroSection = () => {
  return (
    <div
      className="w-full min-h-screen md:min-h-0 md:aspect-[1512/2000] bg-green flex items-center flex-col pt-[10vh] md:pt-[20vh] bg-[url('/bgimg.png')] bg-cover bg-[center_top] md:bg-[center_-800px]"
    >
      <h1 className="text-protrude text-background text-center leading-none">
        JEN'S<br className="md:hidden" /> PORTFOLIO
      </h1>
      <h3 className="text-subtitle text-center mt-3 md:mt-5 px-4">SOFTWARE + DESIGN PROJECTS</h3>

      <div className="flex gap-3 md:gap-4 mt-5 md:mt-20">
        <Button text="HIRE ME" color="yellow" width="w-[100px] md:w-[150px]" />
        <Button text="MAIN SITE" color="blue" width="w-[100px] md:w-[150px]" />
      </div>

      <img src="/logo_detailed.png" alt="logo" className="mt-10 md:mt-24 w-[50vw] md:w-[400px] max-w-[400px]" />
      <About />
      <div className="relative w-full mt-auto flex justify-center">
        <img src="/bottomgraphics.png" alt="bottom graphics" className="w-full block" />
        <img src="/planeprop.png" alt="plane propeller" className="absolute bottom-[11%] right-[19%] w-[1.6%] origin-center animate-[spin_2s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroSection;
