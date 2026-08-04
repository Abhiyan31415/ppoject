"use client";

import { useEffect, useRef, useState } from "react";
import { profile, terminalCommands } from "@/lib/data";

type Line = { text: string; type?: "cmd" | "out" | "muted" };

const INTRO: Line[] = [
  { text: "whoami", type: "cmd" },
  { text: profile.name, type: "out" },
  { text: "", type: "out" },
  { text: "Role:", type: "muted" },
  { text: "Full Stack Developer", type: "out" },
  { text: "", type: "out" },
  { text: "Status", type: "muted" },
  { text: `● ${profile.availability}`, type: "out" },
];

export default function Terminal() {
  const [history, setHistory] = useState<Line[]>([]);
  const [typedIndex, setTypedIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [introDone, setIntroDone] = useState(false);
  const [input, setInput] = useState("");
  const [log, setLog] = useState<Line[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Type out the intro sequence character by character
  useEffect(() => {
    if (introDone) return;
    if (typedIndex >= INTRO.length) {
      setIntroDone(true);
      return;
    }
    const currentLine = INTRO[typedIndex];
    if (charIndex < currentLine.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    const pause = setTimeout(
      () => {
        setHistory((h) => [...h, currentLine]);
        setTypedIndex((i) => i + 1);
        setCharIndex(0);
      },
      currentLine.type === "cmd" ? 300 : 60,
    );
    return () => clearTimeout(pause);
  }, [typedIndex, charIndex, introDone]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history, log, charIndex]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const newLog: Line[] = [...log, { text: raw, type: "cmd" }];

    if (!cmd) {
      setLog(newLog);
      return;
    }
    if (cmd === "clear") {
      setLog([]);
      return;
    }
    if (cmd === "resume") {
      newLog.push({ text: "Opening resume…", type: "out" });
      window.open(profile.resumeUrl, "_blank");
    } else if (cmd === "github") {
      newLog.push({ text: `Opening ${profile.github}`, type: "out" });
      window.open(profile.github, "_blank");
    } else if (cmd === "linkedin") {
      newLog.push({ text: `Opening ${profile.linkedin}`, type: "out" });
      window.open(profile.linkedin, "_blank");
    } else if (cmd === "contact") {
      newLog.push({ text: "Scrolling to contact…", type: "out" });
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd === "projects") {
      newLog.push({ text: "Scrolling to projects…", type: "out" });
      document
        .querySelector("#projects")
        ?.scrollIntoView({ behavior: "smooth" });
    } else if (cmd === "skills") {
      newLog.push({ text: "Scrolling to skills…", type: "out" });
      document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
    } else if (terminalCommands[cmd]) {
      terminalCommands[cmd].forEach((line) =>
        newLog.push({ text: line, type: "out" }),
      );
    } else {
      newLog.push({
        text: `command not found: ${cmd} — try "help"`,
        type: "muted",
      });
    }
    setLog(newLog);
  };

  return (
    <div
      className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-card shadow-[0_0_0_1px_rgba(45,212,191,0.04),0_20px_60px_-20px_rgba(0,0,0,0.6)]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-border bg-[#0e1417] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ef4444]/70" />
        <span className="h-3 w-3 rounded-full bg-[#f59e0b]/70" />
        <span className="h-3 w-3 rounded-full bg-[#22c55e]/70" />
        <span className="ml-2 font-mono text-xs text-warm">
          abhiyan@portfolio:~
        </span>
      </div>

      <div
        ref={scrollRef}
        className="terminal-scrollbar h-[360px] overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed"
      >
        <p className="mb-3 text-accent">abhiyan@portfolio:~$</p>

        {history.map((line, i) => (
          <TerminalLine key={i} line={line} />
        ))}

        {!introDone && typedIndex < INTRO.length && (
          <TerminalLine
            line={{
              text: INTRO[typedIndex].text.slice(0, charIndex),
              type: INTRO[typedIndex].type,
            }}
            caret
          />
        )}

        {introDone &&
          log.map((line, i) => <TerminalLine key={`log-${i}`} line={line} />)}

        {introDone && (
          <div className="flex items-center gap-2 pt-1">
            <span className="text-accent">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  runCommand(input);
                  setInput("");
                }
              }}
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal input"
              placeholder='try "help"'
              className="flex-1 bg-transparent text-warm placeholder:text-warm focus:outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function TerminalLine({ line, caret }: { line: Line; caret?: boolean }) {
  if (line.type === "cmd") {
    return (
      <p className="text-warm">
        <span className="text-accent">$ </span>
        {line.text}
        {caret && <span className="ml-0.5 animate-blink">▍</span>}
      </p>
    );
  }
  if (line.type === "muted") {
    return (
      <p className="text-warm">
        {line.text}
        {caret && <span className="ml-0.5 animate-blink">▍</span>}
      </p>
    );
  }
  return (
    <p className="text-warm">
      {line.text || "\u00A0"}
      {caret && <span className="ml-0.5 animate-blink">▍</span>}
    </p>
  );
}
