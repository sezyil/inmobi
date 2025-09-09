'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Inmobi Export",
    "description": "Premium furniture export from Türkiye to worldwide markets",
    "url": "https://inmobi.com.tr",
    "logo": "https://inmobi.com.tr/INMOBI.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mahmudiye Mah. No:57/A",
      "addressLocality": "İnegöl",
      "addressRegion": "Bursa",
      "addressCountry": "Türkiye"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-542-723-10-85",
      "contactType": "customer service",
      "email": "info@inmobi.com.tr"
    },
    "sameAs": [],
    "foundingDate": "2024",
    "areaServed": "Worldwide",
    "serviceType": "Furniture Export"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Premium Furniture Export from Türkiye
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Traditional craftsmanship meets modern design with international quality standards. 
            We bring Türkiye's rich furniture heritage to global markets.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Quote
          </button>
        </div>
      </section>

             {/* Services Section */}
             <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                   Our Services
                 </h2>

                 {/* Services Grid */}
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                   <div>
                     <div className="rounded-lg overflow-hidden h-64 mb-4">
                       <img 
                         src="/images/services/furniture.jpg" 
                         alt="Furniture Export"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h3 className="text-xl font-bold text-center text-slate-900">Furniture Export</h3>
                   </div>

                   <div>
                     <div className="rounded-lg overflow-hidden h-64 mb-4">
                       <img 
                         src="/images/services/logistic.jpg" 
                         alt="Logistics"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h3 className="text-xl font-bold text-center text-slate-900">Logistics</h3>
                   </div>

                   <div>
                     <div className="rounded-lg overflow-hidden h-64 mb-4">
                       <img 
                         src="/images/services/custom design.jpg" 
                         alt="Custom Design"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h3 className="text-xl font-bold text-center text-slate-900">Custom Design</h3>
                   </div>

                   <div>
                     <div className="rounded-lg overflow-hidden h-64 mb-4">
                       <img 
                         src="/images/services/quality.jpg" 
                         alt="Quality Control"
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <h3 className="text-xl font-bold text-center text-slate-900">Quality Control</h3>
                   </div>
                 </div>
               </div>
             </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Get In Touch</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="Tell us about your furniture requirements..."
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-slate-900 text-white py-3 px-6 rounded-md font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    <Footer />
    </div>
  );
}