import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, HelpCircle } from 'lucide-react';

export default function Location() {
  const mapQuery = "Care Speciality Clinic, Upper Bendoor 2nd Cross Rd, Bendoor, Mangaluru, Karnataka 575002";
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;

  return (
    <section id="location" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider mb-3">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Clinic Location
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg">
            Conveniently located in Bendoor, Mangaluru. Easy access and plenty of local parking spaces.
          </p>
        </div>

        {/* Location Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Text/Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm text-left">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100/60 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Clinic Address</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5">
                    Care Speciality Clinic,<br />
                    VVF3+69X, Upper Bendoor 2nd Cross Rd,<br />
                    Bendoor, Mangaluru,<br />
                    Karnataka - 575002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100/60 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Landmark & Parking</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                    Located on Upper Bendoor 2nd Cross Road. Just a short walk from the main Bendoor Junction / Bendoor Well. Easily reachable by auto and private vehicles. Safe roadside parking available.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200/50 mt-8 lg:mt-0">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                aria-label="Get directions to clinic on Google Maps"
              >
                <Navigation className="w-5 h-5" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Interactive Map Card */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-100 shadow-md min-h-[350px] lg:min-h-full relative group">
            {/* Embedded Google Map Frame */}
            <iframe
              title="Google Map location of Care Speciality Clinic"
              src={embedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
