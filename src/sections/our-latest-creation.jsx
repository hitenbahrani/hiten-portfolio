import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "LLM-Powered Research Assistant",
            shortDescription:
                "Full-stack research assistant with web retrieval, grounded responses, memory, and citations.",
            description:
                "Built a full-stack research assistant that combines LLM responses with optional web retrieval for time-sensitive queries. A FastAPI backend routes queries and retrieves relevant sources, while the React frontend provides conversational memory, structured responses, and inline citations.",
            metrics: [
                { label: "Category", value: "AI Application" },
                { label: "Focus", value: "RAG + Retrieval" },
                { label: "Timeline", value: "Nov 2025 - Feb 2026" },
            ],
            stack: [
                "Python",
                "FastAPI",
                "React",
                "RAG",
                "REST APIs",
                "Vercel",
                "Render",
            ],
            image: "/projects/ai-research-assistant/ai-research-assistant.png",
            live: "https://ai-research-assistant-web.vercel.app/",
            github: "https://github.com/hitenbahrani/ai-research-assistant",
            details: {
                highlights: [
                    "LLM responses paired with optional web retrieval for time-sensitive queries",
                    "FastAPI backend that routes queries and retrieves relevant sources",
                    "React interface with conversational memory and structured responses",
                    "Inline source citations for grounded answers",
                    "Deployed across Vercel and Render",
                ],
                architecture: [
                    "React frontend for the research experience",
                    "FastAPI service for request routing and retrieval",
                    "Relevant-source retrieval to ground model context",
                    "Structured answer and citation presentation",
                    "Vercel and Render deployment",
                ],
            },
        },
        {
            title: "ML Decision Support with Explainability",
            shortDescription: "Rule-based decision support with SHAP explainability and fairness diagnostics.",
            description:
                "Built a rule-based decision-support tool that routes low-confidence predictions for human review. The project uses SHAP to examine prediction drivers and subgroup performance, with a Streamlit dashboard for confidence, threshold trade-offs, and fairness diagnostics.",
            metrics: [
                { label: "Category", value: "ML Decision Support" },
                { label: "Focus", value: "Explainability + Fairness" },
                { label: "Timeline", value: "May - Jun 2025" },
            ],
            stack: [
                "Python",
                "Scikit-learn",
                "SHAP",
                "Streamlit",
                "Fairness Diagnostics",
            ],
            image:
                "/projects/ai-decision-intelligence-governance-platform/dashboard-overview.png",
            github:
                "https://github.com/hitenbahrani/ai-decision-intelligence-platform",
            details: {
                highlights: [
                    "Rule-based policy thresholds for low-confidence predictions",
                    "Human-review routing for low-confidence decisions",
                    "SHAP analysis of factors influencing individual predictions",
                    "Subgroup performance review for potential fairness gaps",
                    "Stakeholder-facing Streamlit dashboard",
                ],
                architecture: [
                    "Predictive model produces a confidence score",
                    "Policy layer evaluates decision thresholds",
                    "Low-confidence cases are routed for human review",
                    "SHAP and subgroup analysis provide diagnostic context",
                    "Streamlit interface exposes confidence and fairness trade-offs",
                ],
            },
        },
    ];

    return (
        <section id="projects" className="mt-32">
            <SectionTitle
                title="Featured Projects"
                description="Selected analytics and AI projects centered on explainability, retrieval, and practical decision support."
            />

            {/* Cards */}
            <div className="mt-16 grid gap-8 md:grid-cols-2">
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
                        onClick={() => setSelectedProject(project)}
                    >
                        {/* Screenshot — FULL, NOT CROPPED */}
                        <div className="mb-6 overflow-hidden rounded-xl border border-white/10 bg-black">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Metrics */}
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

                        <h3 className="text-lg font-semibold text-white">
                            {project.title}
                        </h3>

                        <p className="mt-2 text-sm text-white/70">
                            {project.shortDescription}
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

                        {/* Links */}
                        <div className="mt-6 flex gap-6 text-sm font-medium">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="underline underline-offset-4 hover:text-white/80"
                                >
                                    Live App →
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="underline underline-offset-4 hover:text-white/80"
                                >
                                    Source Code →
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        // IMPORTANT: make overlay scrollable + start aligned
                        className="fixed inset-0 z-50 bg-black/70 px-4 py-10 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            // IMPORTANT: Lenis scroll bypass + real scrolling area
                            data-lenis-prevent
                            className="relative w-full max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#0b1220] p-8
                                       max-h-[calc(100vh-5rem)] overflow-y-auto"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 28 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-6 top-6 text-white/60 hover:text-white text-lg"
                                aria-label="Close"
                            >
                                ✕
                            </button>

                            <h2 className="text-2xl font-semibold text-white mb-4">
                                {selectedProject.title}
                            </h2>

                            <p className="text-sm text-white/70 mb-6">
                                {selectedProject.description}
                            </p>

                            {/* Modal Screenshot FULL */}
                            <div className="mb-8 overflow-hidden rounded-xl border border-white/10 bg-black">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-white mb-3">
                                        Key Highlights
                                    </h3>
                                    <ul className="space-y-2 text-sm text-white/70 list-disc pl-5">
                                        {selectedProject.details.highlights.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-white mb-3">
                                        System Architecture
                                    </h3>
                                    <ul className="space-y-2 text-sm text-white/70 list-disc pl-5">
                                        {selectedProject.details.architecture.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Bottom spacing so last lines never feel cut */}
                            <div className="h-6" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
