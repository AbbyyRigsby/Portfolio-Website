import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutMe } from "../Components/AboutMe";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactsSection } from "../Components/ContactsSection";
import { Footer } from "../Components/Footer";
import { PublishSection } from "../Components/Publications";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    { /* Theme toggle button */}
        <ThemeToggle />
        {/* Background Effect */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutMe />
            <SkillsSection />
            <ProjectsSection />
            <PublishSection />
            <ContactsSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>;
};