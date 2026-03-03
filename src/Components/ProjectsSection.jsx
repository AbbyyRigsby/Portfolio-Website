const projects = [
    {
      id: 1,
      title: "Logistical Optimization Tool",
      description: "Dedicated API for optimizing delivery routes and schedules for a logistics company, enhancing efficiency and reducing costs.",
      image: "/projectAssets/image.png",  
      tags: ["Python", "Django", "JSON"],
      githubURL: "https://github.com/AbbyyRigsby/LogisticsProject_Backend"
    },
    {
        id: 2,
        title: "Private Cloud Stack",
        description: "Private cloud stack built for university research. Prioritized keeping data confidential and portable on-premises.",
        image: "/projectAssets/private_cloud.jpg",
        tags: ["Kubernetes", "Docker", "Prometheus", "Grafana", "Spark", "PostgreSQL"],
        githubURL: "private"
    }
];

export const ProjectsSection = () => {
    return <section
            id="projects"
            className="py-24 px-4 relative">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                        Featured <span className="text-primary">Projects</span> 
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Collection of projects made during and past my time in college.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols;3 gap-8">
                        {projects.map((project, key) => (
                            <div key={key} 
                                 className ="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img src={project.image} 
                                         alt={project.title} 
                                         className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale-50 hover:grayscale-0"/>
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-6 sm:px-2 md:px-4">{project.description}</p>
                            <p className="text-primary font-medium py-3">
                                {project.githubURL === "private" || !project.githubURL ? (
                                    /* This displays if the URL is a specific value (like "private") or missing */
                                    <span className="text-muted-foreground italic cursor-not-allowed">
                                    Link not available
                                    </span>
                                ) : (
                                    <a 
                                    href={project.githubURL} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:underline cursor-pointer"
                                    >
                                    View on GitHub
                                    </a>
                                )}
                                </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

};