declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
  }
  
  export const Mail: FC<IconProps>;
  export const Linkedin: FC<IconProps>;
  export const Github: FC<IconProps>;
  export const MapPin: FC<IconProps>;
  export const Send: FC<IconProps>;
  export const Code: FC<IconProps>;
  export const Database: FC<IconProps>;
  export const Globe: FC<IconProps>;
  export const Smartphone: FC<IconProps>;
  export const Brain: FC<IconProps>;
  export const GitBranch: FC<IconProps>;
  export const ExternalLink: FC<IconProps>;
  export const Bus: FC<IconProps>;
  export const Map: FC<IconProps>;
  export const Heart: FC<IconProps>;
  export const GraduationCap: FC<IconProps>;
  export const Briefcase: FC<IconProps>;
  export const Award: FC<IconProps>;
  export const Calendar: FC<IconProps>;
  export const Download: FC<IconProps>;
  export const ArrowDown: FC<IconProps>;
  export const ArrowUp: FC<IconProps>;
  export const ArrowUpRight: FC<IconProps>;
  export const BadgeCheck: FC<IconProps>;
  export const Check: FC<IconProps>;
  export const FileDown: FC<IconProps>;
  export const FolderGit2: FC<IconProps>;
  export const Github: FC<IconProps>;
  export const Linkedin: FC<IconProps>;
  export const Mail: FC<IconProps>;
  export const Menu: FC<IconProps>;
  export const Search: FC<IconProps>;
  export const ShieldCheck: FC<IconProps>;
  export const Sparkles: FC<IconProps>;
  export const TerminalSquare: FC<IconProps>;
  export const User: FC<IconProps>;
  export const Wrench: FC<IconProps>;
  export const X: FC<IconProps>;
  export const Phone: FC<IconProps>;
  export const ChevronDown: FC<IconProps>;
  
  // Add other icons as needed
  const icons: Record<string, FC<IconProps>>;
  export default icons;
}
