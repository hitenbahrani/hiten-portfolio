import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const projects = [
        {
            title: "Project 1",
            description:
                "Placeholder project description. Briefly explain the problem, your approach, and the outcome.",
            metrics: [
                { label: "Type", value: "TBD" },
                { label: "Stack", value: "TBD" },
                { label: "Status", value: "Planned" },
            ],
            stack: ["Python", "SQL", "React"],
        },
        {
            title: "Project 2",
            description:
                "Placeholder project description. Focus on technical depth or real-world relevance.",
            metrics: [
                { label: "Type", value: "TBD" },
                { label: "Stack", value: "TBD" },
                { label: "Status", value: "Planned" },
            ],
            stack: ["Databricks", "Spark", "Delta Lake"],
        },
        {
            title: "Project 3",
            description:
                "Placeholder project description. Highlight data, ML, or system design aspects.",
            metrics: [
                { label: "Type", value: "TBD" },
                { label: "Stack", value: "TBD" },
                { label: "Status", value: "Planned" },
            ],
            stack: ["Machine Learning", "Python", "Pandas"],
        },
        {
            title: "Project 4",
            description:
                "Placeholder project description. Describe your contribution and tools used.",
            metrics: [
                { label: "Type", value: "TBD" },
                { label: "Stack", value: "TBD" },
                { label: "Status", value: "Planned" },
            ],
            stack: ["React", "Tailwind", "Framer Motion"],
        },
        {
            title: "Project 5",
            description:
                "Placeholder project description. Replace this once you build the project.",
            metrics: [
                { label: "Type", value: "TBD" },
                { label: "Stack", value: "TBD" },
                { label: "Status", value: "Planned" },
            ],
            stack: ["TBD"],
        },
    ];

    return (
        <section id="projects" className="mt-32">
            <SectionTitle
                title="Featured Projects"
                description="A curated set of projects focused on data, analytics, and AI — designed with clarity, impact, and scalability."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.12,
                            type: "spring",
                            stiffness: 260,
                            damping: 50,
                        }}
                    >
                        {/* Metrics row */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {project.metrics.map((metric) => (
                                <div
                                    key={metric.label}
                                    className="rounded-xl border border-white/10 bg-white/5 py-3 text-center"
                                >
                                    <div className="text-sm font-semibold text-white">
                                        {metric.value}
                                    </div>
                                    <div className="text-xs text-white/60">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Project info */}
                        <h3 className="text-lg font-semibold text-white">
                            {project.title}
                        </h3>

                        <p className="mt-2 text-sm text-white/70">
                            {project.description}
                        </p>

                        {/* Tech stack */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}