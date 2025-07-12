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
      <div id="home" className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        <div className="p-5">
    <NavigationMenu className="w-full flex-1 bg-black/30 backdrop-blur-lg border border-gray-700 p-2 pl-6 rounded-lg">
    <NavigationMenuList className="justify-evenly">
    <NavigationMenuItem className="w-1/3 ml-0 text-2xl font-bold">
     <TypingLoop/>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink 
        className="font-semibold text-white text-1.5xl cursor-pointer hover:text-purple-400 transition-colors"
        onClick={() => scrollToSection('home')}
      >
        Home
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuLink 
      className="font-semibold text-white text-1.5xl cursor-pointer hover:text-purple-400 transition-colors"
      onClick={() => scrollToSection('journey')}
    >
      Journey
    </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuLink 
      className="font-semibold text-white text-1.5xl cursor-pointer hover:text-purple-400 transition-colors"
      onClick={() => scrollToSection('showcase')}
    >
      Projects
    </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuLink 
      className="font-semibold text-white text-1.5xl cursor-pointer hover:text-purple-400 transition-colors"
      onClick={() => scrollToSection('contact')}
    >
      Contact
    </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuItem className="font-semibold text-1.5xl">
      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
        <a href="Abhiyan-Khanal-cv (3).pdf" download>Download Resume</a>
      </Button>
    </NavigationMenuItem>
    </NavigationMenuItem>
    </NavigationMenuList>
</NavigationMenu>
      </div>
      <div className="p-5 flex gap-2 flex-row-reverse">
<Card className=" p-6  rounded-2xl shadow-lg text-gray-800 space-y-4 h-120">
  <h2 className="text-2xl font-bold text-gray-900">👋 About Me</h2>
  <p>
    Hey there! I’m <span className="font-semibold">Abhiyan Khanal</span>, a curious and driven Computer Engineering undergraduate 
    with a deep interest in building things that matter. I enjoy solving real-world problems through code—whether it’s crafting intelligent systems, 
    streamlining user experiences, or experimenting with cutting-edge technologies.
  </p>
  <p>
    My work often blends creativity with logic. I’m especially passionate about <span className="font-medium">AI/ML</span>, 
    <span className="font-medium"> full-stack development</span>, and projects that push the boundaries of what’s possible with software. 
    I believe in writing clean, thoughtful code and designing systems that are as elegant as they are efficient.
  </p>
  <p>
    Beyond the screen, I’m constantly learning, exploring new ideas, and seeking out challenges that help me grow—both as an engineer and a person. 
    Whether I'm debugging an algorithm or designing an intuitive UI, I aim to build with purpose and impact.
  </p>


</Card>
<Card className="w-1/3 flex flex-col p-5 justify-items-center">
      <div className="text-center space-y-4">
      <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
        Abhiyan <span className="text-blue-600">— A MERN Stack Developer</span>
      </h1>

      <div className="flex justify-center gap-6 mt-4 text-gray-700">
        <a href="https://www.linkedin.com/in/abhiyan-khanal-4406b2248" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://github.com/Abhiyan31415" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 hover:text-black transition-colors" />
        </a>
        <a href="mailto:abhiyankhanal7@gmail.com">
          <Mail className="w-6 h-6 hover:text-red-500 transition-colors" />
        </a>
      </div>
    </div>
      <div className="justify-items-center">
      <img
        src="/src/assets/DSC00609.JPG"
        alt="Abhiyan's Profile"
        className="w-50 h-50 rounded-full object-cover shadow-md"
      />
      </div>
</Card>
      </div>
        </div>
    )
}
export default Home;
