import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <img 
                src="/INMOBI.png" 
                alt="Inmobi Export" 
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="flex items-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <span>info@inmobi.com.tr</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>+90 542 723 10 85</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Mahmudiye Mah. No:57/A İnegöl Bursa</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}