import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "AI Research Assistant",
            shortDescription:
                "Full-stack AI assistant with local LLM inference + real-time web search.",
            description:
                "A production-ready AI Research Assistant powered by a locally hosted Mistral model using llama.cpp. The system combines FastAPI backend inference, optional real-time web search grounding, conversation memory, and a modern React frontend deployed on Vercel.",
            metrics: [
                { label: "Category", value: "AI Application" },
                { label: "Focus", value: "LLM + Web Search" },
                { label: "Status", value: "Deployed" },
            ],
            stack: [
                "Python",
                "FastAPI",
                "llama.cpp",
                "Mistral-7B",
                "React",
                "Vercel",
                "DuckDuckGo Search",
            ],
            image: "/projects/ai-research-assistant/ai-research-assistant.png",
            live: "https://ai-research-assistant-web.vercel.app/",
            github: "https://github.com/hitenbahrani/ai-research-assistant",
            details: {
                highlights: [
                    "Local LLM inference using llama.cpp + Mistral 7B",
                    "FastAPI backend with structured chat completion",
                    "Optional real-time web search grounding",
                    "Context-based strict grounding mode",
                    "Modern React frontend deployed on Vercel",
                ],
                architecture: [
                    "React (Vite) frontend deployed on Vercel",
                    "FastAPI backend for LLM orchestration",
                    "llama.cpp model loading with CPU/GPU control",
                    "Web search augmentation using DuckDuckGo",
                    "Environment-based deployment architecture",
                ],
            },
        },
        {
            title: "AI Decision Intelligence & Governance Platform",
            shortDescription:
                "Enterprise-style AI governance simulation platform.",
            description:
                "Built an enterprise-style AI decision governance system simulating how regulated organizations deploy AI responsibly. The platform enforces policy-driven decisions, provides SHAP explainability, audits fairness, and delivers executive dashboard insights.",
            metrics: [
                { label: "Category", value: "AI Governance" },
                { label: "Focus", value: "ML + Responsible AI" },
                { label: "Status", value: "Completed" },
            ],
            stack: [
                "Python",
                "Scikit-learn",
                "SHAP",
                "Streamlit",
                "Fairness Auditing",
            ],
            image:
                "/projects/ai-decision-intelligence-governance-platform/dashboard-overview.png",
            github:
                "https://github.com/hitenbahrani/ai-decision-intelligence-platform",
            details: {
                highlights: [
                    "Policy-driven credit decisions",
                    "SHAP-based explainability",
                    "Fairness auditing using 80% rule",
                    "Offline model governance",
                    "Executive Streamlit dashboard",
                ],
                architecture: [
                    "Offline training & evaluation",
                    "Artifact promotion pipeline",
                    "Policy decision engine",
                    "Explainability & fairness layer",
                    "Read-only executive dashboard",
                ],
            },
        },
    ];

    return (
        <section id="projects" className="mt-32">
            <SectionTitle
                title="Featured Projects"
                description="Production-ready AI systems focused on real-world impact and scalability."
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
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0b1220] p-8"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 30, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 28 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-6 top-6 text-white/60 hover:text-white text-lg"
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
                                        {selectedProject.details.highlights.map(
                                            (item) => (
                                                <li key={item}>{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-white mb-3">
                                        System Architecture
                                    </h3>
                                    <ul className="space-y-2 text-sm text-white/70 list-disc pl-5">
                                        {selectedProject.details.architecture.map(
                                            (item) => (
                                                <li key={item}>{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}