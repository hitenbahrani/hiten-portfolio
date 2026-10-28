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
                "Evaluated high-volume Python programming assignments with consistent grading rubrics and close attention to data structures, algorithms, and edge-case correctness.",
                "Applied structured partial-credit criteria to ensure accurate, fair, and efficient evaluation across student submissions.",
                "Tracked recurring error patterns across cohorts, including off-by-one errors, mutation bugs, and performance issues, and shared key trends with the course instructor.",
            ],
        },
        {
            role: "Data Analyst",
            org: "ParticleBlack",
            duration: "Jun 2024 – Dec 2024",
            points: [
                "Built Python and SQL ETL workflows using joins, aggregations, and windowed metrics to prepare more than 50,000 conversational interaction logs for analysis and modelling.",
                "Analyzed conversation metadata, including turn count, intent transitions, and session length, to identify factors associated with query resolution and support chatbot-routing decisions.",
                "Developed Tableau and Power BI dashboards to monitor chatbot resolution rates and surface performance trends and potential model-drift signals for stakeholders.",
            ],
        },
        {
            role: "Data Analyst",
            org: "Mohan Group",
            duration: "Dec 2022 – Jun 2024",
            points: [
                "Integrated four record types - property, lead, booking, and payment - using SQL and Python, then built Power BI dashboards for inventory, sales velocity, conversion rates, and overdue collections.",
                "Analyzed lead-to-visit and visit-to-booking conversion metrics by marketing channel and response time to identify drop-off points and guide sales follow-up.",
                "Evaluated development sites using ArcGIS, demographics, competitor pricing, transport access, and historical sales to support management’s site-selection decisions.",
                "Mapped buyer and lead locations to define customer catchments, assess overlap between developments, and identify market-coverage gaps.",
                "Documented data sources, quality checks, and site-scoring assumptions to support reproducible reporting and analysis.",
            ],
        },
        {
            role: "Data Scientist and Machine Learning Trainee",
            org: "YHills",
            duration: "Jun 2022 – Sep 2022",
            points: [
                "Prepared and analyzed a dataset of 10,000+ taxi trip records to examine how distance, time of day, and traffic conditions influenced fare estimates.",
                "Built and evaluated linear regression and random forest models to compare predictive performance across fare-prediction approaches.",
                "Set up AWS EC2 and S3 resources to support repeatable dataset storage and model-training workflows outside the local environment.",
            ],
        },
    ];

    return (
        <section className="relative mt-36" id="experience">
            <SectionTitle
                title="Work Experience"
                description="Hands-on experience across data analysis, business intelligence, machine learning, and Python instruction."
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
