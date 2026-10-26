import { Github, Linkedin, Mail } from "lucide-react";
import { aboutCards, profile } from "@/lib/data";

const bio = aboutCards.find((c) => c.type === "text")?.content as string;
const now = aboutCards.find((c) => c.type === "list")?.content as string[];
const likes = aboutCards.find((c) => c.type === "tags")?.content as string[];

export default function AboutApp({ open }: { open: (id: string) => void }) {
  return (
    <div className="about">
      <div className="about-head">
        <img className="avatar" src={profile.photo} alt="Abhiyan Khanal" />
        <h1>{profile.name}</h1>
        <p className="muted">
          {profile.role} · {profile.location}
        </p>
        <p className="status">
          <span className="dot" /> {profile.availability}
        </p>
      </div>

      <p className="about-bio">{bio}</p>

      <h2 className="label">Right now</h2>
      <ul className="plain-list">
        {now.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="label">Things I like working on</h2>
      <div className="tags">
        {likes.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="button-row">
        <button className="aqua-btn primary" onClick={() => open("projects")}>
          See my projects
        </button>
        <button className="aqua-btn" onClick={() => open("resume")}>
          Resume
        </button>
      </div>

      <div className="link-row">
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github size={14} /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={14} /> LinkedIn
        </a>
        <a href={`mailto:${profile.email}`}>
          <Mail size={14} /> Email
        </a>
      </div>
    </div>
  );
}
