import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { GraduationCap, Code, Briefcase, Award, Calendar } from 'lucide-react';

const InteractiveTimeline: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  const timelineEvents = [
    {
      id: 1,
      date: "July 2023",
      title: "Started BE in Computer Engineering",
      subtitle: "Pulchowk Campus, Lalitpur",
      description: "Began my journey in Computer Engineering at the prestigious Pulchowk Campus, diving deep into technology and problem-solving.",
      icon: <GraduationCap className="w-6 h-6" />,
      category: "Education",
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Enrolled in one of Nepal's top engineering programs",
        "Started building foundation in computer science",
        "Joined tech communities and study groups"
      ]
    },
    {
      id: 2,
      date: "2023",
      title: "Node.js & Express Mastery",
      subtitle: "Backend Development Certification",
      description: "Completed comprehensive course on backend development with Express and MongoDB, laying the foundation for full-stack development.",
      icon: <Code className="w-6 h-6" />,
      category: "Learning",
      color: "from-green-500 to-emerald-500",
      achievements: [
        "Mastered Node.js and Express.js",
        "Learned MongoDB and database design",
        "Built first full-stack applications"
      ]
    },
    {
      id: 3,
      date: "2023-2024",
      title: "MERN Stack Projects",
      subtitle: "Gantabya & Hamro Bus Development",
      description: "Built comprehensive full-stack applications for travel and ticket booking using the MERN stack and Flutter, serving real-world use cases.",
      icon: <Briefcase className="w-6 h-6" />,
      category: "Projects",
      color: "from-purple-500 to-violet-500",
      achievements: [
        "Developed Gantabya travel companion app",
        "Created Hamro Bus booking platform",
        "Implemented real-time features and payment systems",
        "Gained experience with mobile development"
      ]
    },
    {
      id: 4,
      date: "2024",
      title: "Healthcare Innovation",
      subtitle: "Cogni Care Development",
      description: "Developed a comprehensive dementia care app with real-time tracking, chat, and caregiver tools, addressing critical healthcare needs.",
      icon: <Award className="w-6 h-6" />,
      category: "Innovation",
      color: "from-pink-500 to-rose-500",
      achievements: [
        "Built healthcare-focused mobile application",
        "Implemented real-time location tracking",
        "Created caregiver communication system",
        "Designed user-friendly interface for seniors"
      ]
    },
    {
      id: 5,
      date: "2024",
      title: "AI/ML Exploration",
      subtitle: "Nepal AI School & Genetic Algorithms",
      description: "Attended Annual Nepal AI School and developed evolutionary creatures simulation using genetic algorithms and neural networks.",
      icon: <Code className="w-6 h-6" />,
      category: "AI/ML",
      color: "from-orange-500 to-amber-500",
      achievements: [
        "Completed Nepal AI School program",
        "Implemented genetic algorithm simulations",
        "Worked with neural networks",
        "Explored evolutionary computation"
      ]
    },
    {
      id: 6,
      date: "2025",
      title: "Machine Learning Specialization",
      subtitle: "Advanced AI Certification",
      description: "Currently pursuing Machine Learning Specialization to deepen understanding of AI and its applications in software development.",
      icon: <Award className="w-6 h-6" />,
      category: "Current",
      color: "from-cyan-500 to-blue-500",
      achievements: [
        "Advancing machine learning expertise",
        "Applying AI to real-world problems",
        "Building intelligent applications"
      ]
    },
    {
      id: 7,
      date: "Present",
      title: "Freelance Full-Stack Developer",
      subtitle: "Building the Future",
      description: "Working as a freelance full-stack developer, creating scalable applications and exploring new technologies while maintaining a passion for innovation.",
      icon: <Briefcase className="w-6 h-6" />,
      category: "Career",
      color: "from-indigo-500 to-purple-500",
      achievements: [
        "Delivering production-ready software",
        "Working with diverse tech stacks",
        "Collaborating with international clients",
        "Continuously learning and growing"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % timelineEvents.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="timeline" className="py-12 md:py-20 px-3 md:px-6 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            From student to full-stack developer - tracking my evolution in the tech world
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-purple-400 h-full opacity-30"></div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-6 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400 h-full opacity-30"></div>

          {/* Timeline Events */}
          <div className="space-y-6 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:justify-start justify-start' : 'md:justify-end justify-start'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute z-10 ${
                  index % 2 === 0 ? 'md:left-1/2 left-6' : 'md:left-1/2 left-6'
                } transform -translate-x-1/2`}>
                  <div
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-all duration-500 ${
                      activeEvent === index
                        ? `bg-gradient-to-r ${event.color} scale-150 shadow-lg`
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    onClick={() => setActiveEvent(index)}
                  ></div>
                </div>

                {/* Event Card */}
                <div 
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12 md:pl-0'
                  }`}
                  onClick={() => setActiveEvent(index)}
                >
                  <Card
                    className={`cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      activeEvent === index
                        ? `bg-gradient-to-r ${event.color} text-white shadow-2xl scale-105`
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className={`p-2 md:p-3 rounded-lg ${activeEvent === index ? 'bg-white/20' : 'bg-gray-700'}`}>
                          {event.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                            <span className={`text-xs md:text-sm font-medium ${activeEvent === index ? 'text-white/80' : 'text-gray-400'}`}>
                              {event.date}
                            </span>
                          </div>
                          <h3 className="text-lg md:text-xl font-bold mb-1 break-words">{event.title}</h3>
                          <p className={`text-xs md:text-sm mb-2 ${activeEvent === index ? 'text-white/80' : 'text-gray-400'} break-words`}>
                            {event.subtitle}
                          </p>
                          <div className={`text-xs px-2 py-1 rounded-full inline-block mb-3 ${
                            activeEvent === index ? 'bg-white/20 text-white' : 'bg-gray-700 text-gray-300'
                          }`}>
                            {event.category}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Event Details */}
        {activeEvent !== null && (
          <div className="mt-8 md:mt-16">
            <Card className="bg-gray-800/50 backdrop-blur-lg border border-gray-700">
              <CardContent className="p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <div className={`inline-flex p-3 md:p-4 rounded-full bg-gradient-to-r ${timelineEvents[activeEvent].color} mb-4`}>
                      {timelineEvents[activeEvent].icon}
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                      {timelineEvents[activeEvent].title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                      {timelineEvents[activeEvent].description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm md:text-base">Key Achievements</h4>
                    <div className="space-y-3">
                      {timelineEvents[activeEvent].achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm md:text-base">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default InteractiveTimeline;
