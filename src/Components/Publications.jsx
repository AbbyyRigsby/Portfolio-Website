const publish = [
    {
        title: "Poseidon: A Low-Overhead Application for Ensuring Autonomous Drone Compliance with National Airspace Regulations",
        authors: "Jordan Shropshire, Micah Isreal, Abby Rigsby, Kevin Zheng",
        image: "/projectAssets/poseidon.jpg",
        description: "This paper proposes software architecture for drones in order to track current drone location and adjust security compliance in accordance to the current country's security laws.",
        publishURL: "https://ieeexplore.ieee.org/document/10971550"
    }
]

export const PublishSection = () => { 
    return <section
        id="publications"
        className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured <span className="text-primary">Publications</span> 
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Official publications in which I've contributed to during my time as a Research Assistant at the University of South Alabama.
                </p>

                {publish.map((pub, key) => (
                            <div key={key} 
                                 className ="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img src={pub.image} 
                                         alt={pub.title} 
                                         className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale-50 hover:grayscale-0"/>
                                </div>

                            <h3 className="text-xl font-semibold mb-2 py-4"> {pub.title}</h3>
                            <h4 className="text-lg font-semibold mb-2 text-muted-foreground">{pub.authors}</h4>
                            <p className="text-muted-foreground text-sm mb-6 sm:px-2 md:px-4">{pub.description}</p>

                             <p className="text-primary font-medium py-3">
                                {pub.publishURL === "private" || !pub.publishURL ? (
                                    /* This displays if the URL is a specific value (like "private") or missing */
                                    <span className="text-muted-foreground italic cursor-not-allowed">
                                    Link not available
                                    </span>
                                ) : (
                                    <a 
                                    href={pub.publishURL} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:underline cursor-pointer"
                                    >
                                    View Publication
                                    </a>
                                )}
                                </p>
                        </div>
                    ))}


            </div>
    </section>
};