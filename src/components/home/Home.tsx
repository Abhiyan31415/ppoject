import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import TypingLoop from "./TypingLoop";
const Home:React.FC=()=>{
    return(
        <div>
    <NavigationMenu className="w-full flex-2 bg-slate-200  p-2 pl-6 rounded-lg">
    <NavigationMenuList className="justify-start">
    <NavigationMenuItem className="w-1/3 ml-0 text-2xl font-bold">
     <TypingLoop/>
    </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuList className="justify-start">
    <NavigationMenuItem>
      <NavigationMenuLink className="font-semibold  text-1.5xl ml-">Home</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuLink className="font-semibold  text-1.5xl">About Me</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuLink className="font-semibold  text-1.5xl ">Contact</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuLink className="font-semibold  text-1.5xl">Download Resume</NavigationMenuLink>
    </NavigationMenuItem>
    </NavigationMenuList>

  
</NavigationMenu>

        </div>
    )
}
export default Home;
