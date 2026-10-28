import { Award, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

const education = [
    {
        school: "University of Texas at Arlington",
        degree: "Master of Science, Information Systems",
        location: "Arlington, TX",
        duration: "Jan 2025 - Dec 2026",
    },
    {
        school: "Thadomal Shahani Engineering College",
        degree: "Bachelor of Technology, Information Technology",
        location: "Mumbai, India",
        duration: "Sep 2020 - Jun 2024",
    },
];

const certifications = [
    "Introduction to Data Management - Meta (2026)",
    "Data Science Methodology - IBM (2026)",
    "Introduction to AI - Coursera (2025)",
    "Google Data Analytics Professional Certificate - Google (2024)",
];

export default function EducationAndCertifications() {
    return (
        <section id="education" className="mt-36">
            <SectionTitle
                title="Education & Certifications"
                description="An Information Systems foundation supported by applied data, analytics, and AI coursework."
            />

            <div className="mt-16 grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
                <div className="space-y-5">
                    {education.map((item, index) => (
                        <motion.article
                            key={item.school}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7"
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 220, damping: 35 }}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 text-indigo-300">
                                        <GraduationCap className="size-4" />
                                        <p className="text-sm font-medium">{item.school}</p>
                                    </div>
                                    <h3 className="mt-3 text-lg font-semibold text-white">{item.degree}</h3>
                                </div>
                                <span className="whitespace-nowrap text-sm text-white/60">{item.duration}</span>
                            </div>
                            <p className="mt-4 flex items-center gap-2 text-sm text-white/60">
                                <MapPin className="size-4" />
                                {item.location}
                            </p>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7"
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 35 }}
                >
                    <div className="flex items-center gap-2 text-indigo-300">
                        <Award className="size-4" />
                        <h3 className="text-base font-semibold text-white">Certifications</h3>
                    </div>
                    <ul className="mt-5 space-y-4 text-sm leading-6 text-white/70">
                        {certifications.map((certification) => (
                            <li key={certification} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                {certification}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
