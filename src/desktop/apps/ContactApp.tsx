import { useState } from "react";
import { Github, Linkedin, Send } from "lucide-react";
import { profile } from "@/lib/data";

/** Looks like a Mail compose window; "Send" hands off to the visitor's email app. */
export default function ContactApp() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const send = () => {
    const q = new URLSearchParams({ subject, body }).toString().replace(/\+/g, "%20");
    window.location.href = `mailto:${profile.email}?${q}`;
  };

  return (
    <form
      className="mail"
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
    >
      <div className="mail-toolbar">
        <button type="submit" className="aqua-btn primary small">
          <Send size={13} /> Send
        </button>
        <span className="muted small">Opens in your email app</span>
      </div>
      <label className="mail-field">
        <span>To:</span>
        <input value={profile.email} readOnly />
      </label>
      <label className="mail-field">
        <span>Subject:</span>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Hi Abhiyan"
        />
      </label>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Tell me a bit about your project or idea…"
        aria-label="Message"
      />
      <div className="mail-footer">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={14} /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github size={14} /> GitHub
        </a>
      </div>
    </form>
  );
}
