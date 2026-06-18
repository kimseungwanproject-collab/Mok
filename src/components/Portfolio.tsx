'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const categories = ["All Projects", "Retail Stores", "Restaurants", "Commercial Offices", "Other"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (res.ok) {
          const data = await res.json();
          setPortfolioItems(data);
        }
      } catch (error) {
        console.error("Failed to load portfolio items", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredItems = portfolioItems.filter(item => 
    activeCategory === "All Projects" ? true : item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-mok-navy mb-4">Our Portfolio</h2>
          <p className="text-gray-600 text-lg">
            150+ Successful Projects Across the DMV Region
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-mok-orange text-white shadow-md transform scale-105" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Link href={`/portfolio/${item.id}`} key={item.id} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer block">
                <div className="relative h-64 w-full bg-gray-100">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-mok-navy/90 via-mok-navy/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-mok-orange text-sm font-bold mb-1">{item.category}</p>
                  <h4 className="text-white text-xl font-bold mb-2">{item.title}</h4>
                  <div className="flex items-center text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                    {item.sqft && (
                      <>
                        <span className="mx-2">•</span>
                        {item.sqft}
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
