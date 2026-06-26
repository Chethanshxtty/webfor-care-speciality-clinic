import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, UserCheck, HeartPulse } from 'lucide-react';

export default function About() {
  const badges = [
    {
      icon: UserCheck,
      title: "Experienced Doctors",
      desc: "Consultations with highly qualified, compassionate general and speciality physician practitioners."
    },
    {
      icon: ShieldCheck,
      title: "Trustworthy Care",
      desc: "Patient-first clinical approach focused on accurate diagnosis and individualized treatment plans."
    },
    {
      icon: Clock,
      title: "Quick Consultations",
      desc: "Streamlined slot booking by direct phone call ensures minimal waiting times at the clinic."
    },
    {
      icon: HeartPulse,
      title: "Walk-Ins Welcome",
      desc: "Emergency consults and walk-ins accommodated promptly alongside our regular scheduled bookings."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Info Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider">
              About Our Clinic
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Boutique Clinic Dedicated to Your Well-Being
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At <strong className="text-slate-800 font-semibold">Care Speciality Clinic</strong>, we believe that medical care should be accessible, personal, and meticulous. Located in Bendoor, Mangaluru, we cater to families and individuals looking for trustworthy general medicine and clinical guidance.
            </p>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Our clinic combines expert medical knowledge with a calm, patient-friendly environment. We avoid the clinical rush to spend quality time understanding your health history and addressing every concern you have.
            </p>
          </div>

          {/* Graphical/Illustrative Placeholder */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-teal border border-teal-100/50 p-8 flex items-center justify-center shadow-inner overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Graphic Element */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center border border-teal-50">
                  <HeartPulse className="w-10 h-10 text-teal-600 animate-pulse" style={{ animationDuration: '2s' }} />
                </div>
                <span className="text-slate-800 font-bold text-lg">Care Speciality Clinic</span>
                <span className="text-teal-700 font-medium text-sm">Serving Bendoor, Mangaluru</span>
                <div className="w-32 h-1 bg-teal-600/25 rounded-full" />
              </div>
              
              {/* Subtle background circles */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-teal-500/5 rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-sky-500/5 rounded-full" />
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-slate-900">Why Patients Choose Us</h3>
            <p className="text-slate-500 mt-2 text-sm">We ensure you get high-quality care with maximum convenience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {badges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-start p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 hover:border-slate-200/50 transition-all duration-300 group text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-teal-600 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-base group-hover:text-teal-700 transition-colors duration-300">
                    {badge.title}
                  </h4>
                  <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                    {badge.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
