import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import TiltedImage from "../components/tilt-image";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center -mt-16 text-center">
            {/* Background radial glow */}
            <motion.svg
                className="absolute -z-10 w-full -mt-40 md:mt-0"
                width="1440"
                height="676"
                viewBox="0 0 1440 676"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#a)" />
                <defs>
                    <radialGradient
                        id="a"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="rotate(90 428 292)scale(812)"
                    >
                        <stop offset="0.6" stopColor="#6366F1" stopOpacity="0" />
                        <stop offset="1" stopColor="#6366F1" />
                    </radialGradient>
                </defs>
            </motion.svg>

            {/* Name */}
            <motion.h1
                className="mt-44 font-semibold tracking-tight
                           text-5xl leading-[1.15]
                           md:text-6xl md:leading-[1.1]
                           max-w-3xl"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220, damping: 45 }}
            >
                Hiten{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Bahrani
                </span>
            </motion.h1>

            {/* Role */}
            <motion.h2
                className="mt-3 text-lg md:text-xl font-medium text-indigo-400"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
            >
                Data Scientist . Software Engineer . AI/ML Engineer
            </motion.h2>

            {/* Description */}
            <motion.p
                className="mt-6 max-w-xl text-base text-white/70 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                I build data-driven systems that move beyond dashboards — from analytics
                pipelines to intelligent AI applications. Currently pursuing my Master’s
                in Information Systems at UTA, focused on scalable, real-world impact.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
                className="mt-8 flex items-center gap-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {/* View Work */}
                <a
                    href="#projects"
                    className="flex items-center gap-2 rounded-lg
                               bg-indigo-600 px-7 h-11
                               text-white font-medium
                               hover:bg-indigo-700
                               active:scale-95 transition"
                >
                    View Work
                    <ArrowRight className="size-5" />
                </a>

                {/* Resume Download (FIXED) */}
                <a
                    href="/HITEN_BAHRANI_Resume.pdf"
                    download="HITEN_BAHRANI_Resume.pdf"
                    className="flex items-center h-11 px-8
                               rounded-lg border border-white/20
                               text-white/80
                               hover:bg-white/10 hover:text-white
                               active:scale-95 transition"
                >
                    <Download className="size-5 mr-2" />
                    Resume
                </a>
            </motion.div>

            {/* Hero visual (UNCHANGED) */}
            <TiltedImage />
        </section>
    );
}
