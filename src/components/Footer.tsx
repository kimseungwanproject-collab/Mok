import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-mok-navy text-white pt-16 pb-8 border-t-4 border-mok-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/logo.png" 
                alt="MOK Contracting LLC Logo" 
                width={240} 
                height={80} 
                className="brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              To build lasting relationships by delivering high-quality spaces with integrity, commitment, and pride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-2 h-2 bg-mok-orange mr-2 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-mok-orange transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-mok-orange transition-colors">Our Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-mok-orange transition-colors">Portfolio</Link></li>
              <li><Link href="/#process" className="hover:text-mok-orange transition-colors">Our Process</Link></li>
              <li><Link href="/contact" className="hover:text-mok-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-2 h-2 bg-mok-orange mr-2 rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-mok-orange transition-colors">Retail Store Buildouts</Link></li>
              <li><Link href="#" className="hover:text-mok-orange transition-colors">Restaurant & Cafe Fit-Outs</Link></li>
              <li><Link href="#" className="hover:text-mok-orange transition-colors">Commercial Tenant Spaces</Link></li>
              <li><Link href="#" className="hover:text-mok-orange transition-colors">Medical & Dental Suites</Link></li>
              <li><Link href="#" className="hover:text-mok-orange transition-colors">Professional Offices</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-2 h-2 bg-mok-orange mr-2 rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-mok-orange shrink-0" />
                <span>(703) 447-9513</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-mok-orange shrink-0" />
                <span className="break-all">mokcontractinginfo@mokcontracting.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-mok-orange shrink-0" />
                <span>Based in Fairfax, VA<br/>Proudly Serving the DMV Region</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MOK Contracting LLC. All rights reserved. | Virginia Class A Contractor
          </p>
          <div className="flex space-x-6 text-xs text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
