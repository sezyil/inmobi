'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Inmobi Export
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A decade of excellence in furniture export from İnegöl to the world
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded by Seda Çelik, Inmobi Export has been a leading player in the furniture export industry for over 10 years. Based in İnegöl, the heart of Türkiye&apos;s furniture manufacturing, we have established ourselves as one of the key suppliers to numerous destinations worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our expertise spans across furniture supply for hotels, restaurants, and major government projects. We maintain strict quality controls and professional management practices to ensure every project meets international standards.
              </p>
              <p className="text-lg text-gray-600">
                With a dedicated team of 4 professionals, we provide comprehensive services from design consultation to final delivery, making us a trusted partner in the global furniture market.
              </p>
            </div>
            <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden border-2 border-gray-200 ml-4">
              <img
                src="/images/services/Furniture trade,.png"
                alt="Furniture Trade"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Our Values
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quality Excellence</h3>
              <p className="text-lg text-gray-600">
                We maintain the highest quality standards through rigorous quality control processes, ensuring every piece meets international expectations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Global Reach</h3>
              <p className="text-lg text-gray-600">
                With 10 years of experience, we have successfully delivered furniture projects to numerous countries worldwide, building lasting partnerships.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Expert Team</h3>
              <p className="text-lg text-gray-600">
                Our dedicated team of 4 professionals brings together decades of combined experience in furniture manufacturing and export.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            What We Do
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hotel Projects</h3>
              <p className="text-lg text-gray-600">
                Complete furniture solutions for hospitality industry. We provide comprehensive furniture packages for hotels, resorts, and accommodation facilities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Restaurant Supply</h3>
              <p className="text-lg text-gray-600">
                Specialized furniture for dining establishments. From fine dining to casual restaurants, we deliver quality furniture that meets the demands of the food service industry.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Government Projects</h3>
              <p className="text-lg text-gray-600">
                Large-scale institutional furniture projects. We handle complex government contracts and institutional furniture requirements with precision and reliability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quality Control</h3>
              <p className="text-lg text-gray-600">
                Rigorous quality assurance processes. Every piece undergoes strict quality control to ensure it meets international standards and client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss your furniture export needs and create something exceptional together.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Quote
          </button>
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
