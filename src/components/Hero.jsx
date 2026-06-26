import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-teal pt-12 pb-20 sm:pt-20 sm:pb-32 lg:pb-36 flex items-center justify-center">
      {/* Decorative background blur blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/40 rounded-full filter blur-3xl -translate-y-12 animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full filter blur-3xl translate-y-12" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100/80 mb-6 sm:mb-8 shadow-sm">
            <CheckCircle className="w-4 h-4 text-teal-600" />
            <span className="text-xs font-semibold text-teal-800 tracking-wide">
              General Physician & Speciality Care
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-tight">
            Comprehensive Medical Care <br className="hidden sm:inline" />
            <span className="text-teal-600 font-black">For Your Whole Family</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Welcome to <strong className="text-slate-800 font-semibold">Care Speciality Clinic</strong> in Bendoor, Mangaluru. 
            We provide expert clinical consultation and diagnosis in a warm, welcoming boutique environment.
          </p>

          {/* Booking Notice */}
          <div className="mt-4 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-amber-700 bg-amber-50/60 border border-amber-100/50 rounded-lg px-3 py-1.5">
            <Calendar className="w-4 h-4 text-amber-600" />
            <span>Note: We book appointments only by Phone Call</span>
          </div>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex justify-center w-full px-4 sm:px-0">
            {/* Call Now (Pulsing, Main CTA) */}
            <a
              href="tel:08242224403"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-base transition-all duration-300 shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30 hover:-translate-y-0.5 animate-pulse-subtle"
              aria-label="Call clinic to book appointment"
            >
              <Phone className="w-5 h-5 animate-bounce" style={{ animationDuration: '2s' }} aria-hidden="true" />
              Call 0824 222 4403
            </a>
          </div>

          {/* Address Line */}
          <a
            href="https://maps.google.com/?q=Care+Speciality+Clinic,+Upper+Bendoor+2nd+Cross+Rd,+Bendoor,+Mangaluru,+Karnataka+575002"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 text-slate-500 hover:text-teal-600 text-sm transition-colors duration-200 group/address"
            title="Open Care Speciality Clinic on Google Maps"
          >
            <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0 group-hover/address:scale-110 transition-transform duration-200" />
            <span className="max-w-md underline decoration-dotted decoration-slate-300 hover:decoration-teal-600">
              Upper Bendoor 2nd Cross Rd, Bendoor, Mangaluru, 575002
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
