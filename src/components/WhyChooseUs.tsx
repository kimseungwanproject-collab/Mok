"use client";

import { CheckCircle2, Target, HeartHandshake, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const differentiators = [
    {
      title: "Client-Centric Approach",
      description: "Dedicated to understanding and fulfilling your specific needs.",
      icon: <Target className="w-6 h-6 text-mok-orange" />
    },
    {
      title: "Personalized Service",
      description: "Direct access and tailored solutions for every project.",
      icon: <HeartHandshake className="w-6 h-6 text-mok-orange" />
    },
    {
      title: "Mid-Sized Quality, Small-Business Agility",
      description: "High-end results with the responsiveness of a boutique firm.",
      icon: <Zap className="w-6 h-6 text-mok-orange" />
    },
    {
      title: "Long-Term Relationships",
      description: "We build partnerships that last well beyond the final walkthrough.",
      icon: <CheckCircle2 className="w-6 h-6 text-mok-orange" />
    }
  ];

  return (
    <section className="py-20 bg-mok-navy text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Mission & Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-mok-orange font-bold tracking-wider uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
              Building Lasting Relationships Through Excellence
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              MOK Contracting LLC combines experience, resources, and a solid reputation to deliver maximum value at competitive prices for every client.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md border-l-4 border-mok-orange p-6 rounded-r-lg mb-8">
              <h4 className="text-xl font-bold mb-2">Our Mission</h4>
              <p className="text-gray-200 italic">
                "To build lasting relationships by delivering high-quality spaces with integrity, commitment, and pride."
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Customer satisfaction is our highest priority at MOK Contracting. We take a hands-on approach, ensuring you receive expert guidance on site analysis, design, and material selection.
            </p>
          </motion.div>

          {/* Right Side: Differentiators */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {differentiators.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
