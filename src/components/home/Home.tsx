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
const Home:React.FC=()=>{
    return(
        <div>
    <NavigationMenu className="w-full flex-2 bg-slate-200 p-2 rounded-md">
    <NavigationMenuList className="justify-evenly">
    <NavigationMenuItem>
      <NavigationMenuLink>Item One</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink>Item One</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink>Item One</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink>Item One</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

        </div>
    )
}
export default Home;
