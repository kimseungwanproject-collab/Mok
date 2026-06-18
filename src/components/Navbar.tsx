import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white">
      <div className="text-mok-navy border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="MOK Contracting LLC Logo" 
                  width={240} 
                  height={80} 
                  className="h-14 w-auto object-contain" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-mok-orange transition-colors font-medium">Home</Link>
              <Link href="#services" className="text-gray-600 hover:text-mok-orange transition-colors font-medium">Services</Link>
              <Link href="#portfolio" className="text-gray-600 hover:text-mok-orange transition-colors font-medium">Portfolio</Link>
              <Link href="#contact" className="text-gray-600 hover:text-mok-orange transition-colors font-medium">Contact</Link>
            </nav>

            {/* CTA & Contact */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-mok-navy">
                <Phone className="w-4 h-4 mr-2 text-mok-orange" />
                <span className="font-semibold text-sm">(703) 447-9513</span>
              </div>
              <Link href="#contact" className="bg-mok-orange hover:bg-orange-600 text-white px-6 py-2 rounded font-bold transition-all transform hover:scale-105 shadow-md text-sm">
                FREE QUOTE
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-mok-navy hover:text-mok-orange focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
