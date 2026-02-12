import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        // ✅ PROJECT 1 — AI RESEARCH ASSISTANT
        {
            title: "AI Research Assistant",
            shortDescription:
                "Full-stack AI assistant with local LLM inference + real-time web search, deployed on Vercel.",
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
            github: "https://github.com/hitenbahrani/ai-research-assistant",
            live: "https://ai-research-assistant-web.vercel.app/",
            image: "/projects/ai-research-assistant/ai-research-assistant.png",
            details: {
                highlights: [
                    "Local LLM inference using llama.cpp + Mistral 7B",
                    "FastAPI backend with structured chat completion",
                    "Optional real-time web search grounding",
                    "Context-based strict grounding mode",
                    "Deployed frontend on Vercel",
                ],
                architecture: [
                    "React (Vite) frontend deployed on Vercel",
                    "FastAPI backend for LLM orchestration",
                    "llama.cpp model loading with GPU/CPU control",
                    "Web search augmentation using DuckDuckGo",
                ],
            },
        },

        // ✅ PROJECT 2 — AI DECISION PLATFORM
        {
            title: "AI Decision Intelligence & Governance Platform",
            shortDescription:
                "Enterprise-style AI decision governance simulation platform.",
            description:
                "Built an enterprise-style AI decision governance system simulating how regulated organizations deploy AI responsibly. Includes policy enforcement, explainability with SHAP, fairness auditing, and executive Streamlit dashboard.",
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
            github:
                "https://github.com/hitenbahrani/ai-decision-intelligence-platform",
            image:
                "/projects/ai-decision-intelligence-governance-platform/dashboard-overview.png",
            details: {
                highlights: [
                    "Policy-driven credit decisions (approve / review / reject)",
                    "SHAP-based explainability with regulator-friendly reason codes",
                    "Fairness auditing using disparate impact metrics",
                    "Offline model governance workflow",
                    "Executive Streamlit dashboard",
                ],
                architecture: [
                    "Offline model training & evaluation",
                    "Policy engine for decision control",
                    "Explainability & fairness audit layer",
                    "Executive dashboard for monitoring",
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

            {/* PROJECT CARDS */}
            <div className="mt-16 grid gap-10 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition cursor-pointer"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 30,
                        }}
                        onClick={() => setSelectedProject(project)}
                    >
                        {/* Screenshot Preview */}
                        {project.image && (
                            <div className="mb-6 overflow-hidden rounded-xl border border-white/10 bg-black">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover object-top transition duration-500 hover:scale-105"
                                />
                            </div>
                        )}

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

                        {/* Stack */}
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

                        {/* Buttons */}
                        <div className="mt-6 flex gap-4">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:bg-white/10"
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
                                    className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:bg-white/10"
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
                        className="fixed inset-0 z-50 bg-black/80 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <div className="min-h-screen flex items-start justify-center py-20 px-4">
                            <motion.div
                                className="w-full max-w-4xl rounded-2xl border border-white/10 bg-[#0b1220]/95 backdrop-blur p-8 relative"
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 30, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() =>
                                        setSelectedProject(null)
                                    }
                                    className="absolute right-6 top-6 text-white/60 hover:text-white text-lg"
                                >
                                    ✕
                                </button>

                                <h2 className="text-2xl font-semibold text-white">
                                    {selectedProject.title}
                                </h2>

                                <p className="mt-3 text-white/70">
                                    {selectedProject.description}
                                </p>

                                {/* Modal Screenshot */}
                                {selectedProject.image && (
                                    <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full object-cover"
                                        />
                                    </div>
                                )}

                                {/* Highlights */}
                                <div className="mt-8">
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

                                {/* Architecture */}
                                <div className="mt-8">
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
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}