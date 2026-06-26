import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Clock } from 'lucide-react';

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Ananya Rao",
      qualification: "MBBS, MD (General Medicine)",
      specialty: "General Physician & Family Medicine Specialist",
      experience: "12+ Years of Experience",
      bio: "Dr. Rao specializes in complete family medical care, lifestyle disease management, and preventative screening. She is dedicated to guiding patients through clear diagnostic explanations.",
      availability: "Mon - Sat: 9:00 AM - 1:00 PM"
    },
    {
      name: "Dr. Rajesh Shenoy",
      qualification: "MBBS, DNB (Internal Medicine)",
      specialty: "Consultant Physician & Diabetologist",
      experience: "15+ Years of Experience",
      bio: "Dr. Shenoy specializes in diabetic management, cardiac risk evaluations, and chronic disorder treatment. He emphasizes active patient education and customized healthcare programs.",
      availability: "Mon - Sat: 4:00 PM - 8:00 PM"
    }
  ];

  return (
    <section id="doctors" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-3">
            Our Medical Experts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Doctors
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg">
            Consult with our highly qualified physicians who are committed to your health and family care.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card flex flex-col rounded-3xl border border-slate-100/80 shadow-md hover:shadow-xl hover:border-slate-200 transition-all duration-300 overflow-hidden"
            >
              {/* Doctor Visual Placeholder Header */}
              <div className="relative h-44 bg-gradient-teal flex items-center justify-center border-b border-slate-100">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full" />
                
                {/* SVG Avatar Illustration */}
                <div className="w-24 h-24 rounded-full bg-white shadow-md border-2 border-teal-100/50 flex items-center justify-center overflow-hidden">
                  <svg className="w-16 h-16 text-teal-500/80" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12c0 2.822 1.2 5.362 3.127 7.145L12 14.25l6.685 4.847zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z" clipRule="evenodd" />
                    <circle cx="12" cy="9.75" r="3" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 text-left space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                    {doctor.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-teal-700 font-semibold text-sm">
                    <GraduationCap className="w-4 h-4 text-teal-600" />
                    <span>{doctor.qualification}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mt-2.5 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    <Award className="w-4 h-4 text-teal-500" />
                    <span>{doctor.specialty}</span>
                  </div>

                  <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-700 bg-teal-50/50 rounded-lg px-3 py-2 w-fit">
                    <Award className="w-3.5 h-3.5" />
                    <span>{doctor.experience}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-500 text-xs mt-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{doctor.availability}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
