import { motion } from "framer-motion"

import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import w1 from "../assets/w1.png"
import w2 from "../assets/w2.png"


const testimonials = [
    {
        name: "Rahul Mehta",
        role: "Senior Developer (Mentor)",
        review:
            "Siddique is a quick learner and understands concepts deeply. As a fresher, his dedication and consistency are impressive. He grasps new technologies fast and writes clean, structured code.",
        image: m1,
    },
    {
        name: "Aman Verma",
        role: "Project Teammate",
        review:
            "Working with Siddique during our project was smooth and productive. He handled both frontend and backend tasks confidently. He always completes work on time and with great attention to detail.",
        image: m2,
    },
    {
        name: "Priya Deshmukh",
        role: "Small Business Owner",
        review:
            "Siddique built a clean and user-friendly website for my business. Even as a fresher, he communicated professionally and delivered exactly what I needed. Excellent attitude and skills.",
        image: w1,
    },
    {
        name: "Neha Khurana",
        role: "Training Supervisor",
        review:
            "Siddique shows strong potential as a MERN developer. He is disciplined, understands requirements clearly, and always puts in extra effort to improve his skills. Great future ahead!",
        image: w2,
    },
];


export default function Testimonials() {
    return (
        <section id="testimonials" className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20">
            <motion.h2 className="text-4xl font-bold mb-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                What People Say
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={t.name + 1}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1">
                        <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
                            loading="lazy"
                        />
                        <p className="text-gray-200 italic mb-4">
                            {t.review}
                        </p>
                        <h3 className="text-lg font-semibold">
                            {t.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                            {t.role}
                        </p>
                    </motion.div>
                ))}

            </div>

        </section>
    )
}