import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Download, Star, Code, Zap } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const projects = [
    {
      title: "E-Learning Website",
      description: "Platform to connect students with teachers",
      tech: ["Spring Boot", "React", "MySQL"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop"
    },
    {
      title: "Python Chatbot",
      description: "Helps automate computer tasks",
      tech: ["Python", "AI/ML"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop"
    },
    {
      title: "E-commerce Website",
      description: "Site for selling products",
      tech: ["WordPress", "PHP", "MySQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
      title: "Gaming Website",
      description: "Platform for downloading Android and PC games",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop"
    },
    {
      title: "Student Management System",
      description: "A mini project to manage student data",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop"
    }
  ];

  const skills = [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Spring Boot", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "WordPress", level: 90 }
  ];

  const services = [
    {
      title: "Web Design & Development",
      description: "Custom websites built with modern technologies"
    },
    {
      title: "WordPress Development",
      description: "Professional WordPress sites for businesses"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design for better experiences"
    },
    {
      title: "Custom Solutions",
      description: "Tailored websites for tutors and small businesses"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-green-400">MHK</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-green-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-green-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-green-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
              <a href="#services" className="hover:text-green-400 transition-colors">Services</a>
              <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
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

      {/* About Section */}
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

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-400">Technologies I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-400 transition-colors">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-400">{skill.level}%</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400">Some of my recent work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" className="bg-green-500 hover:bg-green-600">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-green-400/20 text-green-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-xl text-gray-400">What I can do for you</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-green-400 transition-colors text-center">
                <CardHeader>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400">Let's work together</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">madhushankaherath2@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-400">0742113676</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Colombo</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" className="bg-gray-700 hover:bg-gray-600">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full min-h-[120px] p-3 bg-gray-700 border border-gray-600 rounded-md text-white resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 H.M. Madhushanka Herath Kumara. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Animated Background Elements */}
      <div className="fixed bottom-0 left-0 w-full h-20 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 pointer-events-none">
        <div className="flex items-center justify-center h-full space-x-8 animate-pulse">
          <span className="text-green-400 font-semibold">Discover</span>
          <span className="text-blue-400 font-semibold">Design</span>
          <span className="text-purple-400 font-semibold">Develop</span>
          <span className="text-green-400 font-semibold">Discover</span>
          <span className="text-blue-400 font-semibold">Design</span>
          <span className="text-purple-400 font-semibold">Develop</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
