import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Code, Database, Globe, Smartphone, Brain, GitBranch } from 'lucide-react';

const TechJourney: React.FC = () => {
  const [activeStack, setActiveStack] = useState(0);

  const techStacks = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js"],
      color: "from-blue-500 to-cyan-500",
      description: "Building responsive, interactive user interfaces"
    },
    {
      category: "Backend",
      icon: <Code className="w-8 h-8" />,
      technologies: ["Node.js", "Express.js", "Python", "C++"],
      color: "from-green-500 to-emerald-500",
      description: "Developing robust server-side applications"
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8" />,
      technologies: ["PostgreSQL", "SQL", "MongoDB", "Supabase"],
      color: "from-purple-500 to-violet-500",
      description: "Designing efficient, scalable data solutions"
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["Flutter", "React Native", "Cross-platform"],
      color: "from-pink-500 to-rose-500",
      description: "Creating seamless mobile experiences"
    },
    {
      category: "AI/ML",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Machine Learning", "Genetic Algorithms", "Neural Networks"],
      color: "from-orange-500 to-amber-500",
      description: "Exploring artificial intelligence frontiers"
    },
    {
      category: "DevOps",
      icon: <GitBranch className="w-8 h-8" />,
      technologies: ["Git & GitHub", "Docker", "Version Control"],
      color: "from-gray-500 to-slate-500",
      description: "Streamlining development workflows"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStack((prev) => (prev + 1) % techStacks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="journey" className="py-12 md:py-20 px-3 md:px-6 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My Tech <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Full-stack developer with a passion for creating scalable solutions across web and mobile platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start max-w-full overflow-hidden">
          {/* Interactive Tech Stacks */}
          <div className="space-y-3 md:space-y-4">
            {techStacks.map((stack, index) => (
              <Card 
                key={stack.category}
                className={`cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  activeStack === index 
                    ? 'bg-gradient-to-r ' + stack.color + ' text-white shadow-2xl' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveStack(index)}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className={`p-2 md:p-3 rounded-lg ${activeStack === index ? 'bg-white/20' : 'bg-gray-700'} flex-shrink-0`}>
                      {stack.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-xl font-bold truncate">{stack.category}</h3>
                      <p className={`text-xs md:text-sm ${activeStack === index ? 'text-white/80' : 'text-gray-400'} line-clamp-2`}>
                        {stack.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Active Tech Stack Details */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-4 md:p-8 border border-gray-700">
            <div className="text-center mb-6 md:mb-8">
              <div className={`inline-flex p-3 md:p-4 rounded-full bg-gradient-to-r ${techStacks[activeStack].color} mb-4`}>
                {techStacks[activeStack].icon}
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                {techStacks[activeStack].category} Development
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {techStacks[activeStack].description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {techStacks[activeStack].technologies.map((tech, index) => (
                <div 
                  key={tech}
                  className="bg-gray-700/50 rounded-lg p-3 md:p-4 text-center transform hover:scale-105 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <span className="text-white font-medium text-sm md:text-base">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TechJourney;
