
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
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

  return (
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
  );
};

export default SkillsSection;
