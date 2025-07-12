import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Github, ExternalLink, Smartphone, Globe, Brain, Bus, Map, Heart } from 'lucide-react';

const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Gantabya",
      subtitle: "Travel Companion App",
      description: "A comprehensive travel companion featuring in-app chat, trail definition, weather tracking, and facility tracking using OpenStreetMap for enhanced group trip coordination and city-to-city travel.",
      icon: <Map className="w-8 h-8" />,
      technologies: ["Flutter", "OpenStreetMap API", "Real-time Chat", "Weather API"],
      features: [
        "In-app chat for group coordination",
        "Trail definition and mapping",
        "Real-time weather tracking",
        "Facility tracking with OpenStreetMap",
        "Group trip management"
      ],
      github: "https://github.com/Abhiyan31415/Elsendero",
      color: "from-green-400 to-blue-500",
      category: "Mobile App"
    },
    {
      id: 2,
      title: "Cogni Care",
      subtitle: "Dementia Care Support",
      description: "CogniCare is a mobile application developed to support dementia patients and their caregivers in managing daily activities, ensuring safety, and improving communication.",
      icon: <Heart className="w-8 h-8" />,
      technologies: ["Mobile Development", "Real-time Tracking", "Healthcare", "Firebase"],
      features: [
        "Medication reminders",
        "Real-time location tracking",
        "Caregiver communication chat",
        "Emergency alerts system",
        "Activity monitoring",
        "User-friendly interface for seniors"
      ],
      github: "https://github.com/anujpaude1/dementia",
      color: "from-pink-400 to-red-500",
      category: "Healthcare"
    },
    {
      id: 3,
      title: "Hamro Bus",
      subtitle: "Bus Booking Platform",
      description: "Hamro Bus is a mobile application designed for intercity bus travel in Nepal, offering a seamless experience for both passengers and bus operators.",
      icon: <Bus className="w-8 h-8" />,
      technologies: ["Mobile App", "Payment Integration", "Admin Panel", "Real-time Booking"],
      features: [
        "Browse available buses",
        "Interactive seat selection",
        "Secure online payment",
        "Admin panel for operators",
        "Schedule management",
        "Real-time booking tracking"
      ],
      github: "https://github.com/Abhiyan31415/HamroBus",
      color: "from-yellow-400 to-orange-500",
      category: "Transportation"
    },
    {
      id: 4,
      title: "Evolutionary Creatures",
      subtitle: "Genetic Algorithm Simulation",
      description: "This project simulates the evolutionary development of virtual creatures using genetic algorithms. Creatures evolve over generations with neural network brains.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Genetic Algorithms", "Neural Networks", "Simulation", "AI/ML"],
      features: [
        "Virtual creature simulation",
        "Genetic algorithm implementation",
        "Neural network evolution",
        "Species competition",
        "Mutation and reproduction",
        "Adaptive behavior development"
      ],
      github: "https://github.com/ankitrajmehta/genetic_algo",
      color: "from-purple-400 to-indigo-500",
      category: "AI/ML"
    }
  ];

  return (
    <section id="showcase" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world applications solving complex problems across different domains
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          <div className="lg:col-span-1 space-y-4">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  selectedProject === index
                    ? `bg-gradient-to-r ${project.color} text-white shadow-2xl`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`p-3 rounded-lg ${selectedProject === index ? 'bg-white/20' : 'bg-gray-700'}`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className={`text-sm ${selectedProject === index ? 'text-white/80' : 'text-gray-400'}`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                    selectedProject === index ? 'bg-white/20 text-white' : 'bg-gray-700 text-gray-300'
                  }`}>
                    {project.category}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 h-full">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${projects[selectedProject].color} mb-4`}>
                    {projects[selectedProject].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {projects[selectedProject].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button
                    className={`bg-gradient-to-r ${projects[selectedProject].color} text-white hover:opacity-90 flex items-center space-x-2`}
                    onClick={() => window.open(projects[selectedProject].github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
