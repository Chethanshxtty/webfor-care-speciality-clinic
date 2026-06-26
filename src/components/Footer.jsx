import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-left">
          
          {/* Clinic Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">Care Speciality Clinic</span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your boutique health clinic in Bendoor, Mangaluru. Providing general medical care and specialty consultations with a focus on trust and accessibility.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3.5 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-colors duration-200" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-colors duration-200" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-colors duration-200" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Working Hours Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Clock className="w-4.5 h-4.5 text-teal-400" />
              Working Hours
            </h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex justify-between py-1 border-b border-slate-800/40">
                <span>Mon - Sat (Morning)</span>
                <span className="text-white font-medium">9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between py-1 border-b border-slate-800/40">
                <span>Mon - Sat (Evening)</span>
                <span className="text-white font-medium">4:00 PM - 8:00 PM</span>
              </li>
              <li className="flex justify-between py-0.5">
                <span>Sunday</span>
                <span className="text-amber-500 font-semibold">Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Phone className="w-4.5 h-4.5 text-teal-400" />
              Contact Details
            </h3>
            
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:08242224403" className="text-white font-bold hover:text-teal-400 transition-colors duration-150">
                    0824 222 4403
                  </a>
                  <span className="text-xs text-slate-500">Landline / Main Desk</span>
                </div>
              </div>



              <a 
                href="https://maps.google.com/?q=Care+Speciality+Clinic,+Upper+Bendoor+2nd+Cross+Rd,+Bendoor,+Mangaluru,+Karnataka+575002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-teal-400 transition-colors duration-150 group/footer-address"
                title="Open Care Speciality Clinic on Google Maps"
              >
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5 group-hover/footer-address:scale-110 transition-transform duration-200" />
                <span className="leading-relaxed underline decoration-dotted decoration-slate-700 hover:decoration-teal-400">
                  Upper Bendoor 2nd Cross Rd, Bendoor, Mangaluru, 575002
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Lower Footer / Booking Prompt */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-white font-semibold text-sm">Need medical consultation?</p>
            <p className="text-slate-400 text-xs">Call us directly. No registration forms required.</p>
          </div>

          <div className="flex justify-center">
            <a
              href="tel:08242224403"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-xs tracking-wider uppercase transition-colors duration-150"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {currentYear} Care Speciality Clinic. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Verified Clinic | Mangaluru, Karnataka</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
