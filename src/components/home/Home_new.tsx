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
          <NavigationMenu className="w-full flex-1 bg-black/30 backdrop-blur-lg border border-gray-700 p-2 pl-3 md:pl-6 rounded-lg">
            <NavigationMenuList className="flex flex-wrap justify-between items-center gap-2">
              <NavigationMenuItem className="flex-shrink-0 text-lg md:text-2xl font-bold">
                <TypingLoop/>
              </NavigationMenuItem>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-4">
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="font-semibold text-white text-sm md:text-lg cursor-pointer hover:text-purple-400 transition-colors"
                    onClick={() => scrollToSection('home')}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="font-semibold text-white text-sm md:text-lg cursor-pointer hover:text-purple-400 transition-colors"
                    onClick={() => scrollToSection('journey')}
                  >
                    Journey
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="font-semibold text-white text-sm md:text-lg cursor-pointer hover:text-purple-400 transition-colors"
                    onClick={() => scrollToSection('showcase')}
                  >
                    Projects
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="font-semibold text-white text-sm md:text-lg cursor-pointer hover:text-purple-400 transition-colors"
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
              
              <NavigationMenuItem>
                <NavigationMenuItem className="font-semibold">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 text-xs md:text-sm px-3 py-2">
                    <a href="Abhiyan-Khanal-cv (3).pdf" download>
                      <span className="hidden md:inline">Download Resume</span>
                      <span className="md:hidden">CV</span>
                    </a>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuItem>
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

        <div className="p-3 md:p-5 flex flex-col lg:flex-row-reverse gap-4 lg:gap-6 max-w-full overflow-hidden">
          {/* Profile Card - Mobile First */}
          <Card className="w-full lg:w-1/3 flex flex-col p-4 md:p-5 items-center">
            <div className="text-center space-y-3 md:space-y-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
                Abhiyan <span className="text-blue-600 block sm:inline">— MERN Developer</span>
              </h1>

              <div className="flex justify-center gap-4 md:gap-6 text-gray-700">
                <a href="https://www.linkedin.com/in/abhiyan-khanal-4406b2248" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://github.com/Abhiyan31415" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 md:w-6 md:h-6 hover:text-black transition-colors" />
                </a>
                <a href="mailto:abhiyankhanal7@gmail.com">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 hover:text-red-500 transition-colors" />
                </a>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <img
                src="/DSC00609.JPG"
                alt="Abhiyan's Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md"
              />
            </div>
          </Card>

          {/* About Me Card */}
          <Card className="flex-1 p-4 md:p-6 rounded-2xl shadow-lg text-gray-800 space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">👋 About Me</h2>
            <p className="text-sm md:text-base">
              Hey there! I'm <span className="font-semibold">Abhiyan Khanal</span>, a Computer Engineering undergraduate 
              passionate about building intelligent systems and crafting seamless user experiences.
            </p>
            <p className="text-sm md:text-base">
              I specialize in <span className="font-medium">AI/ML</span> and 
              <span className="font-medium"> full-stack development</span>, focusing on clean code and elegant solutions.
            </p>
            <p className="text-sm md:text-base">
              Always learning and exploring new technologies to build impactful software that makes a difference.
            </p>
          </Card>
        </div>
      </div>
    )
}
export default Home;
