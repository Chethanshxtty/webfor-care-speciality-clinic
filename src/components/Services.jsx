import React from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  HeartHandshake, 
  Activity, 
  Baby, 
  Syringe, 
  ClipboardCheck 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "General Consultation",
      desc: "Diagnosis and treatment of common acute health issues, general physical examinations, and wellness advice."
    },
    {
      icon: HeartHandshake,
      title: "Preventive Care & Health Checkups",
      desc: "Comprehensive health assessments, blood pressure checks, cholesterol monitoring, and lifestyle evaluations."
    },
    {
      icon: Activity,
      title: "Chronic Disease Management",
      desc: "Ongoing medical care and personalized treatment plans for diabetes, hypertension, asthma, and thyroid issues."
    },
    {
      icon: Baby,
      title: "Pediatric & Family Care",
      desc: "Consultations for pediatric issues, childhood illness, adolescent development support, and adult care."
    },
    {
      icon: Syringe,
      title: "Vaccination & Immunization",
      desc: "Routine vaccinations and adult immunization programs to safeguard your family against seasonal illnesses."
    },
    {
      icon: ClipboardCheck,
      title: "Lab Referrals & Diagnostics",
      desc: "Arranging clinical blood tests, urine diagnostics, scans, and expert review of report findings."
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-3">
            Our Medical Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Care for Your Health
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg">
            We provide a wide array of primary healthcare services to assist you at every step of your health journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card flex flex-col p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-teal-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mt-3 flex-grow">
                  {service.desc}
                </p>
                
                {/* Subtle bottom arrow design element */}
                <div className="mt-6 flex items-center text-teal-600 text-xs font-semibold tracking-wider uppercase group-hover:translate-x-1.5 transition-transform duration-300">
                  Book Slot via Call &rarr;
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
