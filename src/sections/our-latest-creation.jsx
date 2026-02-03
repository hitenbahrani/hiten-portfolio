import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "AI Decision Intelligence & Governance Platform",
            shortDescription:
                "Built an enterprise-style AI decision governance system simulating how regulated organizations deploy AI responsibly.",
            description:
                "Built an enterprise-style AI decision governance system simulating how regulated organizations deploy AI responsibly. The platform enforces policy-driven credit decisions, provides SHAP-based explanations, audits fairness using disparate impact metrics, and delivers insights through an executive Streamlit dashboard.",
            metrics: [
                { label: "Type", value: "AI / Decision Intelligence" },
                { label: "Stack", value: "Python · ML · Governance" },
                { label: "Status", value: "Completed" },
            ],
            stack: [
                "Python",
                "Scikit-learn",
                "SHAP",
                "Streamlit",
                "Responsible AI",
                "Fairness Auditing",
            ],
            github: "https://github.com/hitenbahrani/ai-decision-intelligence-platform",

            // ✅ Details that show in popup
            details: {
                highlights: [
                    "Policy-driven credit decisions (approve / review / reject)",
                    "SHAP-based explainability with regulator-friendly reason codes",
                    "Fairness auditing using disparate impact + 80% rule checks",
                    "Offline model governance with approved artifacts only",
                    "Executive-facing Streamlit dashboard for decision insights",
                ],
                architecture: [
                    "Offline model training & evaluation",
                    "Artifact promotion (models, thresholds, reports)",
                    "Policy engine for decision control",
                    "Explainability & fairness audit layer",
                    "Read-only executive dashboard",
                ],
            },
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

            {/* Cards */}
            <div className="mt-16 grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition cursor-pointer"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.12,
                            type: "spring",
                            stiffness: 260,
                            damping: 50,
                        }}
                        onClick={() => setSelectedProject(project.details ? project : null)}
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
                            {project.shortDescription || project.description}
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

                        {/* GitHub link only for Project 1 */}
                        {project.github && (
                            <div className="mt-6">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-block text-sm font-medium text-white underline underline-offset-4 hover:text-white/80"
                                >
                                    View on GitHub →
                                </a>
                            </div>
                        )}

                        {/* View details hint only if it has details */}
                        {project.details && (
                            <div className="mt-4 text-xs text-white/50 hover:text-white/80 transition">
                                Click to view details →
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0b1220]/95 backdrop-blur p-8 relative"
                            initial={{ y: 40, opacity: 0, scale: 0.98 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 30, opacity: 0, scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 260, damping: 28 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-4 top-4 text-white/60 hover:text-white text-lg"
                                aria-label="Close"
                            >
                                ✕
                            </button>

                            <h2 className="text-xl font-semibold text-white">
                                {selectedProject.title}
                            </h2>

                            <p className="mt-2 text-sm text-white/70">
                                {selectedProject.description}
                            </p>

                            {/* Highlights */}
                            <div className="mt-6">
                                <h3 className="text-sm font-semibold text-white mb-2">
                                    Key Highlights
                                </h3>
                                <ul className="space-y-2 text-sm text-white/70 list-disc pl-5">
                                    {selectedProject.details.highlights.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Architecture */}
                            <div className="mt-6">
                                <h3 className="text-sm font-semibold text-white mb-2">
                                    System Architecture
                                </h3>
                                <ul className="space-y-2 text-sm text-white/70 list-disc pl-5">
                                    {selectedProject.details.architecture.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Stack chips */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {selectedProject.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* GitHub button */}
                            {selectedProject.github && (
                                <div className="mt-6">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-sm font-medium text-white underline underline-offset-4 hover:text-white/80"
                                    >
                                        View on GitHub →
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}