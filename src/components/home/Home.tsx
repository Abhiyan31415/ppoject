import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
  import {
    Button
  } from "@/components/ui/button"
  import {
    Card
  } from "@/components/ui/card"
  import { Mail, Linkedin, Github } from 'lucide-react';
  import TypingLoop from "./TypingLoop";

const Home:React.FC=()=>{
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
      <div id="home" className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen overflow-x-hidden">
        <div className="p-3 md:p-5">
          {/* Single Navigation Bar with Two Flex Containers */}
          <NavigationMenu className="w-full bg-black/30 backdrop-blur-lg border border-gray-700 p-2 md:p-3 rounded-lg">
            <NavigationMenuList className="flex justify-between items-center w-full">
              
              {/* First Flexbox - Fixed width container for dynamic text */}
              <div className="w-64 md:w-80 flex-shrink-0 overflow-hidden">
                <div className="text-lg md:text-2xl font-bold text-center">
                  <TypingLoop/>
                </div>
              </div>
              
              {/* Second Flexbox - Static navigation items (never moves) */}
              <div className="flex items-center gap-8 flex-shrink-0 min-w-0 flex-1 justify-end">
                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8">
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      className="font-semibold text-white text-sm md:text-lg cursor-pointer hover:text-purple-400 transition-colors whitespace-nowrap"
                      onClick={() => scrollToSection('home')}
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      className="font-semibold text-white text-sm md:text-lg cursor-pointer hover:text-purple-400 transition-colors whitespace-nowrap"
                      onClick={() => scrollToSection('journey')}
                    >
                      Journey
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      className="font-semibold text-white text-sm md:text-lg cursor-pointer hover:text-purple-400 transition-colors whitespace-nowrap"
                      onClick={() => scrollToSection('showcase')}
                    >
                      Projects
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      className="font-semibold text-white text-sm md:text-lg cursor-pointer hover:text-purple-400 transition-colors whitespace-nowrap"
                      onClick={() => scrollToSection('contact')}
                    >
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </div>
                
                {/* Resume Button */}
                <NavigationMenuItem>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 text-xs md:text-sm px-3 py-2">
                    <a href="Abhiyan-Khanal-cv (3).pdf" download>
                      <span className="hidden md:inline">Download Resume</span>
                      <span className="md:hidden">CV</span>
                    </a>
                  </Button>
                </NavigationMenuItem>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-3 pb-3">
          <div className="flex justify-center gap-4 bg-black/20 backdrop-blur-lg border border-gray-700 rounded-lg p-3 overflow-x-auto">
            <button 
              className="font-semibold text-white text-sm cursor-pointer hover:text-purple-400 transition-colors whitespace-nowrap"
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className="font-semibold text-white text-sm cursor-pointer hover:text-purple-400 transition-colors whitespace-nowrap"
              onClick={() => scrollToSection('journey')}
            >
              Journey
            </button>
            <button 
              className="font-semibold text-white text-sm cursor-pointer hover:text-purple-400 transition-colors whitespace-nowrap"
              onClick={() => scrollToSection('showcase')}
            >
              Projects
            </button>
            <button 
              className="font-semibold text-white text-sm cursor-pointer hover:text-purple-400 transition-colors whitespace-nowrap"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </div>
        </div>

        <div className="p-3 md:p-5 flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-full overflow-hidden">
          {/* Profile Card - 20% width on desktop */}
          <Card className="w-full lg:w-1/5 flex flex-col p-4 md:p-5 items-center">
            <div className="text-center space-y-3 md:space-y-4">
              <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold text-gray-900 tracking-tight">
                Abhiyan <span className="text-blue-600 block sm:inline">— MERN Developer</span>
              </h1>

              <div className="flex justify-center gap-3 md:gap-4 text-gray-700">
                <a href="https://www.linkedin.com/in/abhiyan-khanal-4406b2248" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://github.com/Abhiyan31415" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:text-black transition-colors" />
                </a>
                <a href="mailto:abhiyankhanal7@gmail.com">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:text-red-500 transition-colors" />
                </a>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <img
                src="/DSC00609.JPG"
                alt="Abhiyan's Profile"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-md"
              />
            </div>
          </Card>

          {/* About Me Card - 80% width on desktop */}
          <Card className="flex-1 lg:w-4/5 p-4 md:p-6 rounded-2xl shadow-lg text-gray-800 space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">👋 About Me</h2>
            <p className="text-sm md:text-base">
              Hey there! I'm <span className="font-semibold">Abhiyan Khanal</span>, a curious and driven Computer Engineering undergraduate 
              with a deep interest in building things that matter. I enjoy solving real-world problems through code—whether it's crafting intelligent systems, 
              streamlining user experiences, or experimenting with cutting-edge technologies.
            </p>
            <p className="text-sm md:text-base">
              My work often blends creativity with logic. I'm especially passionate about <span className="font-medium">AI/ML</span>, 
              <span className="font-medium"> full-stack development</span>, and projects that push the boundaries of what's possible with software. 
              I believe in writing clean, thoughtful code and designing systems that are as elegant as they are efficient.
            </p>
            <p className="text-sm md:text-base">
              Beyond the screen, I'm constantly learning, exploring new ideas, and seeking out challenges that help me grow—both as an engineer and a person. 
              Whether I'm debugging an algorithm or designing an intuitive UI, I aim to build with purpose and impact.
            </p>
          </Card>
        </div>
      </div>
    )
}
export default Home;
