import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Building2, Expand } from 'lucide-react';
import { notFound } from 'next/navigation';

async function getProject(id: string) {
  const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');
  try {
    const fileData = await fs.readFile(dataFilePath, 'utf-8');
    const projects = JSON.parse(fileData);
    return projects.find((p: any) => p.id === id) || null;
  } catch (error) {
    return null;
  }
}

// Generate static params for existing projects at build time
export async function generateStaticParams() {
  const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');
  try {
    const fileData = await fs.readFile(dataFilePath, 'utf-8');
    const projects = JSON.parse(fileData);
    return projects.map((p: any) => ({
      id: p.id.toString(),
    }));
  } catch (error) {
    return [];
  }
}

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);

  if (!project) {
    notFound();
  }

  // Google Maps Embed URL using standard query format
  const mapQuery = encodeURIComponent(`${project.title}, ${project.location}`);
  const mapUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link href="/portfolio" className="inline-flex items-center text-mok-navy hover:text-mok-orange font-medium mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-10 animate-fade-in-up">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-mok-navy mb-4">
            {project.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Image & Description */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl mb-8 bg-gray-200">
              {project.image ? (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" alt="Placeholder" fill className="object-cover opacity-50" />
                </div>
              )}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-mok-navy mb-4">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                {project.description || "Detailed project description coming soon."}
              </p>
            </div>
          </div>

          {/* Right Column: Sidebar Info & Map */}
          <div className="lg:col-span-1 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Project Info Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-mok-navy mb-6 border-b pb-4">Project Details</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Building2 className="w-6 h-6 text-mok-orange mt-0.5 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Category</p>
                    <p className="text-base font-semibold text-gray-900">{project.category}</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-mok-orange mt-0.5 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Location</p>
                    <p className="text-base font-semibold text-gray-900">{project.location}</p>
                  </div>
                </li>

                {project.sqft && (
                  <li className="flex items-start">
                    <Expand className="w-6 h-6 text-mok-orange mt-0.5 mr-4" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Size</p>
                      <p className="text-base font-semibold text-gray-900">{project.sqft}</p>
                    </div>
                  </li>
                )}
              </ul>

              <div className="mt-8 pt-6 border-t">
                <Link href="/#contact" className="w-full block text-center bg-mok-orange hover:bg-orange-600 text-white font-bold py-3 px-4 rounded transition-colors shadow-md">
                  Discuss a Similar Project
                </Link>
              </div>
            </div>

            {/* Google Map Card */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <h3 className="text-lg font-bold text-mok-navy mb-4 px-2">Location Map</h3>
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden bg-gray-100">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapUrl}
                  title={`${project.title} Location`}
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
