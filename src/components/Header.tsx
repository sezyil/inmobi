import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-4 space-y-4 lg:space-y-0">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start">
            <Link href="/" className="cursor-pointer">
              <img 
                src="/INMOBI.png" 
                alt="Inmobi Export" 
                className="h-10 sm:h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-gray-300 text-center lg:text-left">
            <div className="flex items-center space-x-2">
              <span>info@inmobi.com.tr</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>+90 542 723 10 85</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="hidden sm:inline">Mahmudiye Mah. No:57/A İnegöl Bursa</span>
              <span className="sm:hidden">İnegöl Bursa</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}