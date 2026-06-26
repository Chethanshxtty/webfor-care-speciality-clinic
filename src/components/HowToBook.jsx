import React from 'react';
import { motion } from 'motion/react';
import { Phone, CalendarCheck, ClipboardCheck } from 'lucide-react';

export default function HowToBook() {
  const steps = [
    {
      num: "01",
      icon: Phone,
      title: "Call Our Reception",
      desc: "Reach out to our clinic directly by clicking our Call Now button to speak with our receptionist."
    },
    {
      num: "02",
      icon: CalendarCheck,
      title: "Share Preferred Slot",
      desc: "Tell us your preferred date, time, and patient name. Our reception team will verify availability."
    },
    {
      num: "03",
      icon: ClipboardCheck,
      title: "Receive Confirmation",
      desc: "We will confirm your appointment slot immediately over the phone call."
    }
  ];

  return (
    <section id="how-to-book" className="py-20 sm:py-24 bg-gradient-teal relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-teal-100/50 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sky-100/50 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-3">
            Easy Booking
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How to Book an Appointment
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg">
            We support direct bookings. There are no complicated forms or online payment steps required.
          </p>
        </div>

        {/* Visual Steps Container */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-teal-200/50 -translate-y-12 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-teal-100/40 shadow-md hover:shadow-lg transition-shadow duration-300 relative text-center"
                >
                  {/* Step Number Badge */}
                  <div className="absolute top-4 right-6 text-2xl font-black text-teal-600/10 tracking-widest select-none">
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-6 border border-teal-100">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-3">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Prompt & Buttons */}
        <div className="text-center max-w-md mx-auto space-y-6">
          <p className="text-slate-600 font-medium text-sm sm:text-base">
            Ready to book? Get in touch with our receptionist right now:
          </p>
          
          <div className="flex justify-center w-full px-4 sm:px-0">
            {/* Call Now */}
            <a
              href="tel:08242224403"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              aria-label="Call clinic to book appointment"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call 0824 222 4403
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
