'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Link href="/" className="cursor-pointer">
                <img 
                  src="/INMOBI.png" 
                  alt="Inmobi Export" 
                  className="h-10 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Premium furniture export from Türkiye to worldwide markets. Traditional craftsmanship meets modern design with international quality standards.
            </p>
            <div className="text-sm text-gray-400">
              <p>Mahmudiye Mah. No:57/A İnegöl Bursa</p>
              <p>Türkiye</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link 
                  href="/" 
                  className={`hover:text-white transition-colors ${
                    pathname === '/' ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`hover:text-white transition-colors ${
                    pathname === '/about' ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <span className="font-medium">Email:</span> info@inmobi.com.tr
              </p>
              <p>
                <span className="font-medium">Phone:</span> +90 542 723 10 85
              </p>
              <p>
                <span className="font-medium">Address:</span> Mahmudiye Mah. No:57/A İnegöl Bursa
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Inmobi Export. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              Premium Furniture Export from Türkiye | İnegöl, Bursa
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
