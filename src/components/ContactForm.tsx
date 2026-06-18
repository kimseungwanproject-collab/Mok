import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-mok-navy mb-4">Get Your Free Project Estimate</h2>
          <p className="text-gray-600 text-lg">
            Let's Transform Your Space - Quick Response Within 24 Hours
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left: Form (60%) */}
          <div className="w-full lg:w-3/5 p-8 md:p-12">
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" id="fullName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mok-orange focus:border-mok-orange outline-none transition-colors" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mok-orange focus:border-mok-orange outline-none transition-colors" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mok-orange focus:border-mok-orange outline-none transition-colors" placeholder="(123) 456-7890" required />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Project Location</label>
                  <input type="text" id="location" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mok-orange focus:border-mok-orange outline-none transition-colors" placeholder="City, State" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                  <select id="projectType" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mok-orange focus:border-mok-orange outline-none transition-colors bg-white">
                    <option>Retail Store</option>
                    <option>Restaurant</option>
                    <option>Commercial Office</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Project Timeline</label>
                  <select id="timeline" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mok-orange focus:border-mok-orange outline-none transition-colors bg-white">
                    <option>ASAP</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>6+ months</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="sqft" className="block text-sm font-medium text-gray-700 mb-1">Estimated Square Footage</label>
                  <input type="text" id="sqft" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mok-orange focus:border-mok-orange outline-none transition-colors" placeholder="e.g., 2,500 sq ft" />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Project Budget Range</label>
                  <select id="budget" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mok-orange focus:border-mok-orange outline-none transition-colors bg-white">
                    <option>Select Budget</option>
                    <option>Under $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k - $250k</option>
                    <option>$250k - $500k</option>
                    <option>$500k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Tell us about your project</label>
                <textarea id="details" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mok-orange focus:border-mok-orange outline-none transition-colors resize-none" placeholder="Please provide any specific requirements or details..."></textarea>
              </div>

              <div className="flex items-center">
                <input id="siteVisit" type="checkbox" className="h-4 w-4 text-mok-orange focus:ring-mok-orange border-gray-300 rounded cursor-pointer" />
                <label htmlFor="siteVisit" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  I would like to schedule a site visit
                </label>
              </div>

              <button type="button" className="w-full bg-mok-orange hover:bg-orange-600 text-white font-bold py-3 px-4 rounded transition-colors shadow-md flex justify-center items-center">
                Submit Request
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
                <Clock className="w-4 h-4 mr-1 text-mok-orange" />
                We'll respond within 24 hours
              </p>
            </form>
          </div>

          {/* Right: Contact Info (40%) */}
          <div className="w-full lg:w-2/5 bg-mok-navy text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-mok-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Call Us Today</p>
                    <p className="text-lg font-semibold">(703) 447-9513</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-mok-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email Us</p>
                    <p className="text-base font-semibold break-all">mokcontractinginfo@<br/>mokcontracting.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-mok-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Our Location</p>
                    <p className="text-lg font-semibold">Based in Fairfax, VA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-2 h-2 bg-mok-orange mr-2 rounded-full"></span>
                Proudly Serving the DMV Region:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                <li>• Fairfax County, VA</li>
                <li>• Loudoun County, VA</li>
                <li>• Arlington, VA</li>
                <li>• Montgomery County, MD</li>
                <li>• Prince George's County, MD</li>
                <li>• Washington, DC Metro Area</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
