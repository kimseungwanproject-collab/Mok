import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');

// Read all projects
export async function GET() {
  try {
    const fileData = await fs.readFile(dataFilePath, 'utf-8');
    const projects = JSON.parse(fileData);
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error reading projects:', error);
    return NextResponse.json({ error: 'Failed to read projects' }, { status: 500 });
  }
}

// Create a new project
export async function POST(request: Request) {
  try {
    const newProject = await request.json();
    const fileData = await fs.readFile(dataFilePath, 'utf-8');
    const projects = JSON.parse(fileData);
    
    // Generate a new ID
    const maxId = projects.reduce((max: number, p: any) => Math.max(max, parseInt(p.id)), 0);
    newProject.id = (maxId + 1).toString();
    
    projects.push(newProject);
    
    await fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2));
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Error adding project:', error);
    return NextResponse.json({ error: 'Failed to add project' }, { status: 500 });
  }
}

// Update a project
export async function PUT(request: Request) {
  try {
    const updatedProject = await request.json();
    const fileData = await fs.readFile(dataFilePath, 'utf-8');
    let projects = JSON.parse(fileData);
    
    const index = projects.findIndex((p: any) => p.id === updatedProject.id);
    if (index !== -1) {
      projects[index] = updatedProject;
      await fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2));
      return NextResponse.json(updatedProject);
    } else {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

// Delete a project
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }
    
    const fileData = await fs.readFile(dataFilePath, 'utf-8');
    let projects = JSON.parse(fileData);
    
    const initialLength = projects.length;
    projects = projects.filter((p: any) => p.id !== id);
    
    if (projects.length < initialLength) {
      await fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2));
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
