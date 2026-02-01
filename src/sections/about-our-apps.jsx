import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function AboutOurApps() {
    const sectionData = [
        {
            title: "Data & Analytics",
            description:
                "Hands-on experience transforming raw data into insights using analytics, visualization, and statistical techniques.",
            skills: [
                "Python",
                "SQL",
                "Pandas",
                "NumPy",
                "Power BI",
                "Tableau",
            ],
        },
        {
            title: "Machine Learning & AI",
            description:
                "Building intelligent systems with modern ML techniques, large language models, and evaluation-driven workflows.",
            skills: [
                "Machine Learning",
                "LLMs",
                "Prompt Engineering",
                "RAG",
                "Feature Engineering",
                "Model Evaluation",
            ],
        },
        {
            title: "Data Engineering & Tools",
            description:
                "Designing scalable pipelines and working with modern data platforms for real-world analytics use cases.",
            skills: [
                "ETL / ELT",
                "Databricks",
                "Delta Lake",
                "Apache Spark",
                "AWS",
                "Git",
            ],
        },
    ];

    return (
        <section className="flex flex-col items-center mt-32" id="about">
            {/* Section heading */}
            <SectionTitle
                title="Skills & Technologies"
                description="A focused set of tools and technologies I use to design, build, and scale data-driven and AI-powered solutions."
            />

            {/* Cards */}
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 mt-18 gap-y-12">
                {sectionData.map((data, index) => (
                    <motion.div
                        key={data.title}
                        className="py-10 md:py-0 md:px-10 border-b border-slate-700 lg:border-b-0 lg:border-r last:border-none"
                        initial={{ y: 120, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 280,
                            damping: 60,
                        }}
                    >
                        {/* Title + description */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-white">
                                {data.title}
                            </h3>
                            <p className="text-sm text-slate-400">
                                {data.description}
                            </p>
                        </div>

                        {/* Skill chips */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {data.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}