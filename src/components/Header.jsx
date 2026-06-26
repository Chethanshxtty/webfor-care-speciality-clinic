import React from 'react';
import { Phone, Activity } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <a 
          href="https://maps.google.com/?q=Care+Speciality+Clinic,+Upper+Bendoor+2nd+Cross+Rd,+Bendoor,+Mangaluru,+Karnataka+575002"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 group"
          title="Open Care Speciality Clinic on Google Maps"
        >
          <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100 group-hover:bg-teal-100 transition-colors duration-300">
            <Activity className="w-5 h-5 text-teal-600" aria-hidden="true" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-slate-800 tracking-tight text-base sm:text-lg leading-tight group-hover:text-teal-600 transition-colors duration-300">
              Care Speciality Clinic
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide uppercase group-hover:text-teal-500 transition-colors duration-300">
              Bendoor, Mangaluru
            </span>
          </div>
        </a>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="tel:08242224403"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 active:bg-teal-800 transition-all duration-300 shadow-sm shadow-teal-600/10 hover:shadow-md hover:shadow-teal-600/20 group"
            aria-label="Call clinic to book appointment"
          >
            <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </header>
  );
}
