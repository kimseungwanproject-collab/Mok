import { Store, UtensilsCrossed, Building2, HardHat, PenTool, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

export default function ServicesOverview() {
  const coreServices = [
    {
      title: "Retail Store Buildouts",
      description: "Transform your retail vision into reality with comprehensive buildout services tailored to your unique brand identity.",
      icon: <Store className="w-8 h-8 text-mok-orange" />,
      features: ["Interior demolition & preparation", "Custom millwork & displays", "Lighting design & installation"]
    },
    {
      title: "Restaurant & Cafe Fit-Outs",
      description: "Bringing your culinary vision to life with expert commercial kitchen setups, dining area construction, and health code compliance.",
      icon: <UtensilsCrossed className="w-8 h-8 text-mok-orange" />,
      features: ["Commercial kitchen setups", "Hood & ventilation systems", "ADA compliant restrooms"]
    },
    {
      title: "Commercial Tenant Spaces",
      description: "Professional buildouts for every business type, from law firms and medical suites to specialty showrooms.",
      icon: <Building2 className="w-8 h-8 text-mok-orange" />,
      features: ["Space assessment & planning", "Open office & private layouts", "IT & data infrastructure"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Site Analysis",
      description: "Free site analysis to pre-identify electrical, mechanical, and plumbing modification costs.",
      icon: <ClipboardCheck className="w-6 h-6 text-white" />
    },
    {
      step: 2,
      title: "Design Collaboration",
      description: "Partnering with top design firms and providing value engineering reviews to reduce costs.",
      icon: <PenTool className="w-6 h-6 text-white" />
    },
    {
      step: 3,
      title: "Construction Expertise",
      description: "Extensive experience across retail, office, restaurant, and full-service establishments.",
      icon: <HardHat className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-mok-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-mok-orange font-bold tracking-wider uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-mok-navy mb-4">Tailored Tenant Improvements for Your Business</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            At MOK Contracting LLC, we specialize in transforming commercial properties into customized workspaces that meet the unique needs of our clients. We handle every aspect of the buildout process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {coreServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-mok-orange group-hover:scale-110 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-mok-navy mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-500">
                      <span className="text-mok-orange mr-2 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="inline-flex items-center text-mok-navy font-semibold hover:text-mok-orange transition-colors">
                  Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Core Value / Process Section */}
        <div className="bg-mok-navy rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-mok-orange/10 blur-3xl"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our 3-Step Buildout Process</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">Combining experience, resources, and a solid reputation to deliver maximum value at competitive prices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-16 h-16 rounded-full bg-mok-orange flex items-center justify-center mb-4 shadow-lg border-4 border-mok-navy z-10">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-mok-navy text-xs font-bold flex items-center justify-center border-2 border-mok-navy">
                    {step.step}
                  </div>
                </div>
                {/* Connecting Line (hidden on mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 w-1/3 h-0.5 bg-gradient-to-r from-mok-orange to-transparent -z-0" style={{ left: `${(index * 33.33) + 16.66}%` }}></div>
                )}
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-300 px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
