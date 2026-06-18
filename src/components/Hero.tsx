import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Modern Commercial Tenant Space"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-mok-navy/90 via-mok-navy/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-mok-orange/20 text-mok-orange text-sm font-semibold tracking-wider mb-6 border border-mok-orange/30">
            SERVING VIRGINIA, MARYLAND & DC
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-md">
            DMV Region's Trusted <span className="text-mok-orange">Tenant Buildout</span> & Retail Experts
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed drop-shadow">
            From shell spaces to full-scale renovations, our expertise ensures seamless execution and exceptional quality, minimizing downtime for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-mok-orange rounded shadow-lg hover:bg-orange-600 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1">
              Get Your Free Estimate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 backdrop-blur-sm border border-white/30 rounded hover:bg-white/20 transition-all">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Stats/Badges Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-mok-navy/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-white/10">
            <div className="px-4">
              <p className="text-2xl font-bold text-mok-orange">150+</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider mt-1">Projects Completed</p>
            </div>
            <div className="px-4">
              <p className="text-2xl font-bold text-mok-orange">25+</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider mt-1">Cities in DMV</p>
            </div>
            <div className="px-4">
              <p className="text-2xl font-bold text-mok-orange">98%</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider mt-1">Client Satisfaction</p>
            </div>
            <div className="px-4">
              <p className="text-2xl font-bold text-mok-orange">6-12</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider mt-1">Week Avg. Completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
