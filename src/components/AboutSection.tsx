
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm an undergraduate at Rajarata University of Sri Lanka, passionate about becoming a software or web developer.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-400">Education</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium">B.Sc. (Hons) Information Systems</p>
                <p className="text-gray-400">Rajarata University of Sri Lanka</p>
                <p className="text-gray-400">Expected Graduation: 2026</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-green-400">Goal</h3>
              <p className="text-gray-400 leading-relaxed">
                My primary goal is to showcase my skills and projects to future clients, employers, 
                or collaborators. I'm dedicated to creating innovative solutions and contributing to 
                meaningful projects in the tech industry.
              </p>
            </div>
            
            <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
              alt="Coding workspace"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
