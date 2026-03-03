import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hello, my name is</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Abby</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Rigsby</span>
                </h1>

                <p className="text-lg md:txt-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Associate Level Software Engineer with with a passion for system building and optimizing.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div 
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
     >
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}