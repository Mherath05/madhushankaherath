
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Code, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-lg animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-green-300/20 rounded-full blur-md animate-pulse delay-500"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-4 h-4 border border-green-400/30 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 border border-blue-400/30 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-400/40 transform rotate-45 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-400/10 border border-green-400/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-300">Available for work</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Designing for
                </span>
                <span className="block bg-gradient-to-r from-green-400 via-green-300 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                  Amazing
                </span>
                <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  People
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-400 max-w-lg leading-relaxed">
                Aspiring software & web developer creating 
                <span className="text-green-400 font-semibold"> user interfaces </span>
                with over 2 years of experience as a student developer
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-semibold px-8 py-4 rounded-full text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105">
                Hire Me! <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 border-2 border-gray-800 flex items-center justify-center">
                    <Code className="w-5 h-5 text-black" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-gray-800 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 border-2 border-gray-800 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-2 border-gray-800 flex items-center justify-center text-xs font-bold text-white">
                    +1K
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white">1K+ Projects</p>
                  <p className="text-xs text-gray-400">Completed Successfully</p>
                </div>
              </div>
            </div>

            {/* Tech Stack Preview */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "Spring Boot", "Python", "MySQL"].map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-800/50 text-gray-300 border border-gray-700/50 px-3 py-1 backdrop-blur-sm hover:bg-gray-700/50 transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Glowing Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-2 bg-gradient-to-r from-purple-400/20 via-green-400/20 to-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              
              {/* Profile Image */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="H.M. Madhushanka Herath Kumara"
                className="absolute inset-4 w-72 h-72 lg:w-88 lg:h-88 object-cover rounded-full border-4 border-gray-800 shadow-2xl"
              />
              
              {/* Floating Labels */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-emerald-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce delay-500">
                UI/UX Designer
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce delay-1000">
                Full Stack Dev
              </div>
              <div className="absolute top-1/2 -right-12 bg-gradient-to-r from-purple-400 to-pink-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce delay-700">
                Problem Solver
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                <div className="absolute top-1/2 -right-2 w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
