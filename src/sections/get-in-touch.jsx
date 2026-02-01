import SectionTitle from "../components/section-title";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function GetInTouch() {
    return (
        <section id="contact" className="mt-40">
            <SectionTitle
                title="Get in Touch"
                description="Interested in collaborating on AI projects or have a question? I'd love to hear from you."
            />

            <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                {/* LEFT COLUMN */}
                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 180, damping: 30 }}
                >
                    <h3 className="text-xl font-semibold text-white">
                        Let’s Connect
                    </h3>

                    <p className="mt-4 text-sm text-white/60 max-w-md">
                        Whether you’re looking for a Data Scientist, research collaborator,
                        or just want to chat about machine learning — I’m always open to
                        meaningful conversations.
                    </p>

                    {/* Info cards */}
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            <Mail className="size-5 text-indigo-400" />
                            <div>
                                <p className="text-xs text-white/50">Email</p>
                                <p className="text-sm text-white">
                                    bahranihiten@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            <MapPin className="size-5 text-indigo-400" />
                            <div>
                                <p className="text-xs text-white/50">Location</p>
                                <p className="text-sm text-white">
                                    Arlington, Texas
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="mt-6 flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/hitenbahrani/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-lg border border-white/10 bg-white/5
                                       hover:bg-indigo-600/20 transition"
                        >
                            <Linkedin className="size-4 text-white/70 group-hover:text-indigo-400 transition" />
                        </a>

                        <a
                            href="https://github.com/hitenbahrani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 rounded-lg border border-white/10 bg-white/5
                                       hover:bg-indigo-600/20 transition"
                        >
                            <Github className="size-4 text-white/70 group-hover:text-indigo-400 transition" />
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN – FORM (FORMSPREE CONNECTED) */}
                <motion.form
                    action="https://formspree.io/f/xrelgzye"
                    method="POST"
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 space-y-5"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 180, damping: 30, delay: 0.1 }}
                >
                    <div>
                        <label className="text-sm text-white">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your name"
                            className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-white">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="your@email.com"
                            className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-white">Message</label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            placeholder="Tell me about your project or question..."
                            className="mt-2 w-full resize-none rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 py-3 text-sm font-medium text-white hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
}