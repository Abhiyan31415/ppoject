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
  import {
    Button
  } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import TypingLoop from "./TypingLoop";
const Home:React.FC=()=>{
    return(
      <div className="min-h-screen bg-gradient-to-br from-green-200 via-purple-200 to-pink-200">
        <div className="p-5">
    <NavigationMenu className="w-full flex-1 bg-slate-800  p-2 pl-6 rounded-lg">
    <NavigationMenuList className="justify-evenly">
    <NavigationMenuItem className="w-1/3 ml-0 text-2xl font-bold">
     <TypingLoop/>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className="font-semibold  text-white text-1.5xl ml-">Home</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuLink className="font-semibold text-white text-1.5xl">About Me</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuLink className="font-semibold text-white text-1.5xl ">Contact</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuItem className="font-semibold  text-1.5xl"><Button className="bg-white text-black hover:bg-white">Download Resume</Button></NavigationMenuItem>
    </NavigationMenuItem>
    </NavigationMenuList>
</NavigationMenu>
      </div>
      <div className="p-5 w-1/2">
<Card>
  <CardHeader>
    <CardTitle>Abhiyan Khanal</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

      </div>
        </div>
    )
}
export default Home;
