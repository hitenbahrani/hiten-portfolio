import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        // =========================
        // PROJECT 1 — AI RESEARCH ASSISTANT
        // =========================
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

            live: "https://ai-research-assistant-web.vercel.app/",
            github: "https://github.com/hitenbahrani/ai-research-assistant",

            // 🔥 Screenshot preview for card
            previewImage:
                "/projects/ai-research-assistant/ai-research-assistant.png",

            // 🔥 Screenshots for modal
            screenshots: [
                "/projects/ai-research-assistant/ai-research-assistant.png",
            ],

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
                    "Conversation history handling with structured prompts",
                ],
            },
        },

        // =========================
        // PROJECT 2 — DECISION INTELLIGENCE
        // =========================
        {
            title: "AI Decision Intelligence & Governance Platform",
            shortDescription:
                "Enterprise-style AI governance simulation platform.",
            description:
                "Enterprise AI decision governance system simulating policy-driven decisions, explainability with SHAP, and fairness auditing via 80% rule checks.",

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

            previewImage:
                "/projects/ai-decision-intelligence-governance/dashboard-overview.png",

            screenshots: [
                "/projects/ai-decision-intelligence-governance/dashboard-overview.png",
            ],

            details: {
                highlights: [
                    "Policy-driven credit decision simulation",
                    "SHAP explainability engine",
                    "Fairness auditing via disparate impact",
                    "Model artifact governance",
                    "Executive Streamlit dashboard",
                ],
                architecture: [
                    "Offline model training & validation",
                    "Policy engine for decision rules",
                    "Explainability + fairness audit layer",
                    "Executive read-only dashboard",
                ],
            },
        },
    ];

    return (
        <section id="projects" className="mt-32">
            <SectionTitle
                title="Featured Projects"
                description="High-impact AI systems combining engineering depth, deployment, and real-world architecture."
            />

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
                        onClick={() =>
                            setSelectedProject(project.details ? project : null)
                        }
                    >
                        {/* 🔥 Screenshot Preview */}
                        {project.previewImage && (
                            <img
                                src={project.previewImage}
                                alt={project.title}
                                className="rounded-xl mb-6 border border-white/10"
                            />
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
                        <div className="mt-6 flex gap-4 flex-wrap">
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="px-4 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/10 transition"
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
                                    className="px-4 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/10 transition"
                                >
                                    Source Code →
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ========================= */}
            {/* MODAL */}
            {/* ========================= */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0b1220]/95 backdrop-blur p-8 relative"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 30, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-4 top-4 text-white/60 hover:text-white text-lg"
                            >
                                ✕
                            </button>

                            <h2 className="text-xl font-semibold text-white">
                                {selectedProject.title}
                            </h2>

                            <p className="mt-3 text-sm text-white/70">
                                {selectedProject.description}
                            </p>

                            {/* Screenshots inside modal */}
                            {selectedProject.screenshots && (
                                <div className="mt-6 grid gap-4">
                                    {selectedProject.screenshots.map(
                                        (img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                className="rounded-xl border border-white/10"
                                            />
                                        )
                                    )}
                                </div>
                            )}

                            {/* Highlights */}
                            <div className="mt-6">
                                <h3 className="text-sm font-semibold text-white mb-2">
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
                            <div className="mt-6">
                                <h3 className="text-sm font-semibold text-white mb-2">
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
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}