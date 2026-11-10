import type { ReactNode } from "react";
import { Bus, Dna, FileCheck2, HeartPulse, Mail, Map as MapIcon, Terminal as TerminalIcon, User } from "lucide-react";
import { projects } from "@/lib/data";
import { AppTile, DocIcon, FolderIcon, LogoTile } from "./icons";
import AboutApp from "./apps/AboutApp";
import ProjectsApp from "./apps/ProjectsApp";
import ProjectApp from "./apps/ProjectApp";
import ExperienceApp from "./apps/ExperienceApp";
import SkillsApp from "./apps/SkillsApp";
import CertificationsApp from "./apps/CertificationsApp";
import ResumeApp from "./apps/ResumeApp";
import ContactApp from "./apps/ContactApp";
import TerminalApp from "./apps/TerminalApp";

export type AppId = string;

export type AppDef = {
  id: AppId;
  title: string;
  /** Short label under the desktop icon */
  label: string;
  icon: (size?: number) => ReactNode;
  render: (ctx: { open: (id: AppId) => void; close: () => void }) => ReactNode;
};

const projectIcons: Record<string, typeof MapIcon> = {
  gantabya: MapIcon,
  "hamro-bus": Bus,
  "dda-drug-portal": FileCheck2,
  cognicare: HeartPulse,
  "evolutionary-creatures": Dna,
};

const projectApps: AppDef[] = projects.map((p) => ({
  id: `project:${p.slug}`,
  title: p.name,
  label: p.shortName ?? p.name,
  icon: (size) =>
    p.logo ? (
      <LogoTile src={p.logo} size={size} />
    ) : (
      <AppTile icon={projectIcons[p.slug]} from={p.color[0]} to={p.color[1]} size={size} />
    ),
  render: () => <ProjectApp project={p} />,
}));

export const apps: AppDef[] = [
  {
    id: "about",
    title: "About Abhiyan",
    label: "About",
    icon: (size) => <FolderIcon color="#5aa9f2" size={size} />,
    render: ({ open }) => <AboutApp open={open} />,
  },
  {
    id: "projects",
    title: "Projects",
    label: "Projects",
    icon: (size) => <FolderIcon color="#f2b84b" size={size} />,
    render: ({ open }) => <ProjectsApp open={open} />,
  },
  {
    id: "experience",
    title: "Work.txt",
    label: "Work",
    icon: (size) => <FolderIcon color="#8b8cf6" size={size} />,
    render: () => <ExperienceApp />,
  },
  {
    id: "skills",
    title: "Skills",
    label: "Skills",
    icon: (size) => <FolderIcon color="#4cc38a" size={size} />,
    render: () => <SkillsApp />,
  },
  {
    id: "certifications",
    title: "Certifications",
    label: "Certificates",
    icon: (size) => <FolderIcon color="#f2798c" size={size} />,
    render: () => <CertificationsApp />,
  },
  ...projectApps,
  {
    id: "resume",
    title: "Resume.pdf",
    label: "Resume.pdf",
    icon: (size) => <DocIcon size={size} />,
    render: () => <ResumeApp />,
  },
  {
    id: "terminal",
    title: "Terminal",
    label: "Terminal",
    icon: (size) => <AppTile icon={TerminalIcon} from="#4b5563" to="#111827" size={size} />,
    render: ({ open, close }) => <TerminalApp open={open} close={close} />,
  },
  {
    id: "contact",
    title: "New Message",
    label: "Contact",
    icon: (size) => <AppTile icon={Mail} from="#7cc4ff" to="#1d7fe0" size={size} />,
    render: () => <ContactApp />,
  },
];

export const appById = Object.fromEntries(apps.map((a) => [a.id, a])) as Record<AppId, AppDef>;

/** Icons shown on the desktop, top to bottom, in two columns. */
export const desktopIcons: AppId[] = [
  "about",
  "projects",
  "experience",
  "skills",
  "certifications",
  "resume",
  ...projectApps.map((a) => a.id),
  "terminal",
  "contact",
];

export const dockApps: { id: AppId; icon: (size?: number) => ReactNode }[] = [
  { id: "about", icon: (s) => <AppTile icon={User} from="#9fd0ff" to="#2f80ed" size={s} /> },
  { id: "projects", icon: (s) => <FolderIcon color="#f2b84b" size={s} /> },
  ...projectApps.slice(0, 2).map((a) => ({ id: a.id, icon: a.icon })),
  { id: "terminal", icon: appById.terminal.icon },
  { id: "resume", icon: appById.resume.icon },
  { id: "contact", icon: appById.contact.icon },
];
