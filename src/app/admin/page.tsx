'use client';
import { useState, useEffect } from 'react';
import { Pencil, Trash2, Plus, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function AdminDashboard() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    category: 'Retail Stores',
    sqft: '',
    description: '',
    image: ''
  });

  const categories = ["Retail Stores", "Restaurants", "Commercial Offices", "Other"];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (error) {
      console.error('Failed to fetch projects', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    setUploading(true);
    const file = e.target.files[0];
    const data = new FormData();
    data.append('image', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setFormData({ ...formData, image: result.imageUrl });
      } else {
        alert('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading image', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Location validation for Google Maps embed
    if (!formData.location || formData.location.trim().length < 5) {
      alert("Please enter a valid, complete location (e.g., 'Reston, VA') so Google Maps can display it correctly.");
      return;
    }

    const method = editingProject ? 'PUT' : 'POST';
    const body = editingProject ? { ...formData, id: editingProject.id } : formData;

    try {
      const res = await fetch('/api/projects', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      
      if (res.ok) {
        setIsFormOpen(false);
        setEditingProject(null);
        resetForm();
        fetchProjects();
      } else {
        alert('Failed to save project');
      }
    } catch (error) {
      console.error('Error saving project', error);
      alert('Failed to save project');
    }
  };

  const handleEdit = (project: any) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      location: project.location,
      category: project.category,
      sqft: project.sqft,
      description: project.description,
      image: project.image
    });
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchProjects();
      } else {
        alert('Failed to delete project');
      }
    } catch (error) {
      console.error('Error deleting project', error);
      alert('Failed to delete project');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      location: '',
      category: 'Retail Stores',
      sqft: '',
      description: '',
      image: ''
    });
  };

  const openNewForm = () => {
    setEditingProject(null);
    resetForm();
    setIsFormOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-mok-navy">Portfolio Management</h1>
          <p className="text-gray-600 mt-1">Add, edit, or remove projects from the portfolio.</p>
        </div>
        <button 
          onClick={openNewForm}
          className="bg-mok-orange hover:bg-orange-600 text-white px-4 py-2 rounded shadow flex items-center transition-colors font-semibold"
        >
          <Plus className="w-5 h-5 mr-1" />
          Add Project
        </button>
      </div>

      {isFormOpen && (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8 animate-fade-in-up">
          <h2 className="text-xl font-bold mb-6 border-b pb-2">{editingProject ? 'Edit Project' : 'New Project'}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
                <input required type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-mok-orange" placeholder="e.g. JINYA Ramen Bar" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <input required minLength={5} type="text" name="location" value={formData.location} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-mok-orange" placeholder="e.g. Reston, VA" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-mok-orange bg-white">
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Square Footage</label>
                <input type="text" name="sqft" value={formData.sqft} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-mok-orange" placeholder="e.g. 5,000 sq ft" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea name="description" value={formData.description} onChange={handleInputChange} rows={3} className="w-full px-4 py-2 border rounded-md outline-none focus:ring-1 focus:ring-mok-orange resize-none" placeholder="Project details..."></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Image *</label>
              <div className="flex items-center gap-4">
                <div className="relative border-2 border-dashed border-gray-300 rounded-md p-4 w-full md:w-1/2 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-8 w-8 text-gray-400" />
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      {uploading ? 'Uploading...' : 'Click to upload or drag and drop'}
                    </span>
                  </div>
                </div>
                {formData.image && (
                  <div className="relative w-32 h-32 rounded border shadow overflow-hidden">
                    <Image src={formData.image} alt="Preview" fill className="object-cover" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <button type="button" onClick={() => setIsFormOpen(false)} className="px-4 py-2 border text-gray-700 rounded hover:bg-gray-50 font-medium">Cancel</button>
              <button type="submit" disabled={uploading || !formData.title || !formData.image} className="px-4 py-2 bg-mok-navy text-white rounded hover:bg-slate-800 font-medium disabled:opacity-50">
                {editingProject ? 'Update Project' : 'Save Project'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Projects List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No projects found. Add one above.</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location / Size</th>
                <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 relative rounded overflow-hidden shadow-sm">
                        <Image src={project.image} alt="" fill className="object-cover" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{project.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{project.location}</div>
                    <div className="text-xs text-gray-400">{project.sqft}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-3">
                      <button onClick={() => handleEdit(project)} className="text-mok-navy hover:text-blue-700 transition-colors" title="Edit">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(project.id)} className="text-red-500 hover:text-red-700 transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
