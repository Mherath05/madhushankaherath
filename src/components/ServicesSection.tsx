
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
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
  );
};

export default ServicesSection;
