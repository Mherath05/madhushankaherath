
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Download } from "lucide-react";
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
    <div className="min-h-screen bg-gray-900 text-white">
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

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Designing for
                  <span className="block text-green-400">Amazing</span>
                  <span className="block">People</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-lg">
                  Aspiring software & web developer creating user interfaces with over 2 years of experience as a student developer
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full">
                  Hire Me! <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-green-400"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-400"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-400"></div>
                  </div>
                  <span className="text-sm text-gray-400">1K+ Projects</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="H.M. Madhushanka Herath Kumara"
                  className="w-full h-full object-cover rounded-full border-4 border-green-400/30"
                />
                <div className="absolute -top-4 -right-4 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  UI/UX Designer
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Webflow Developer
                </div>
                <div className="absolute top-1/2 -right-8 bg-green-300 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Product Designer
                </div>
              </div>
            </div>
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
