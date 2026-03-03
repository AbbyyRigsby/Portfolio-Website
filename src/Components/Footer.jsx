import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-6 px-4 bg-card relative border-t border-border mt-12 pt-4 flex flex-wrap justify-between items-center text-center">
            {" "}
            <p className="text-sm text-muted-foreground">
                <i>&copy; {new Date().getFullYear()} Rigsby.co, All rights reserved.</i>
            </p>

            <a href="#hero">
                <ArrowUp />
            </a>
        </footer>
    );
};