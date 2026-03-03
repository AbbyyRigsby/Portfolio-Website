import { Code, Cable, UserRound } from "lucide-react";

export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        DevOps Engineer
                    </h3>

                    <p className="text-muted-foreground">
                        <div className="p-3">As a recent graduate, I have dedicated myself to building strong, secure systems. </div>
                        
                        <div className="p-3">Whether as a Full Stack Developer, working on both Frontend and Backend systems, or as a DevOps engineer building the foundations, I gurantee to be a flexible candidate ready for anything.</div>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">Get In Touch</a>

                    <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover-:bg-primary/10 transition.colors duration-300">
                        Download CV
                    </a>
                </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6">

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <UserRound className="h-6 w-6 text-primary" />
                            </div>  
                            <div className="text-left">
                                    <h4 className="font-semibold text-lg">Who Am I?</h4>
                                    <p className="text-muted-foreground">
                                        I'm a recent graduate with a strong passion for building strong systems and CI/CD pipelines. I also love building for my Linux dual-boot.
                                    </p>
                            </div> 
                        </div>
                    </div>


                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Cable className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">DevOps</h4>
                                <p className="text-muted-foreground">
                                    With detailed experience with both Microsoft Azure and Amazon Web Services, I am a flexible and adaptable candidate for any job.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                    
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">
                                    As someone with experience leading teams of around 20 members, I'm dedicated to proper communication and strong project foundations.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </section>
}