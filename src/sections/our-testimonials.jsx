import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function OurTestimonials() {
    const experiences = [
        {
            role: "Graduate Teaching Assistant",
            org: "University of Texas at Arlington",
            duration: "Jan 2026 – Present",
            points: [
                "Analyzed student performance data across assignments and exams to identify common error patterns in Python logic, output formatting, and edge cases.",
                "Applied structured grading rubrics and scoring datasets to ensure consistent and fair evaluation across a large volume of submissions.",
                "Generated data-driven feedback reports highlighting frequent mistakes and improvement areas, contributing to improved overall class performance.",
            ],
        },
        {
            role: "Data Scientist Intern",
            org: "ParticleBlack · Chennai, India",
            duration: "Jun 2024 – Dec 2024",
            points: [
                "Built ETL pipelines to preprocess 50,000+ interaction logs and performed feature engineering to support predictive modeling workflows.",
                "Developed predictive models using Python, Pandas, and scikit-learn, improving response accuracy by 25% and reducing resolution time by 30%.",
                "Designed interactive dashboards using Tableau and Power BI to track key metrics, improving application efficiency by 15%.",
            ],
        },
        {
            role: "Data Scientist Intern",
            org: "YHills · Noida, India",
            duration: "Jun 2023 – Dec 2023",
            points: [
                "Collected and preprocessed 10,000+ trip records with advanced feature engineering on distance, time, and traffic patterns.",
                "Built a Taxi Fare Prediction model achieving 92% accuracy and reducing prediction error by 18%.",
                "Optimized training pipelines on AWS (EC2, S3), reducing model training time by 25% and improving scalability.",
            ],
        },
    ];

    return (
        <section className="relative mt-36" id="experience">
            <SectionTitle
                title="Work Experience"
                description="A timeline of my hands-on experience across data science, analytics, and software engineering roles."
            />

            <div className="relative mt-20 max-w-4xl mx-auto">

                {/* Vertical gradient line */}
                <div className="absolute left-6 top-0 h-full w-[2px]
                                bg-gradient-to-b from-indigo-500/80
                                via-indigo-500/40 to-transparent" />

                <div className="space-y-16 pl-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.12,
                                type: "spring",
                                stiffness: 220,
                                damping: 35,
                            }}
                            className="relative"
                        >
                            {/* Timeline Node */}
                            <div
                                className="absolute -left-[46px] top-6
                                           size-4 rounded-full
                                           bg-indigo-500
                                           shadow-[0_0_18px_rgba(99,102,241,0.9)]"
                            />

                            {/* Card */}
                            <div className="rounded-2xl border border-white/10
                                            bg-white/5 backdrop-blur
                                            p-6 md:p-7
                                            hover:border-indigo-400/40
                                            transition">

                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            {exp.role}
                                        </h3>
                                        <p className="mt-1 text-sm text-white/65">
                                            {exp.org}
                                        </p>
                                    </div>

                                    <span className="flex items-center gap-2
                                                     text-sm text-indigo-400 whitespace-nowrap">
                                        <Briefcase className="size-4" />
                                        {exp.duration}
                                    </span>
                                </div>

                                {/* Bullet points */}
                                <ul className="mt-4 space-y-2
                                               text-sm text-white/70
                                               list-disc list-inside">
                                    {exp.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}