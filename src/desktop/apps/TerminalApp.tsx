import { useEffect, useRef, useState, type ReactNode } from "react";
import { certifications, experience, profile, projects, skills } from "@/lib/data";

/* ------------------------------------------------------------------ */
/* A tiny pretend file system                                          */
/* ------------------------------------------------------------------ */

type File = { kind: "file"; content: string[]; opens?: string };
type Dir = { kind: "dir"; children: Record<string, Node> };
type Node = File | Dir;

const file = (content: string[], opens?: string): File => ({ kind: "file", content, opens });
const dir = (children: Record<string, Node>): Dir => ({ kind: "dir", children });

const fs: Dir = dir({
  "about.txt": file(
    [
      `${profile.name}, ${profile.role.toLowerCase()} from ${profile.location}.`,
      profile.subtitle + ".",
      "",
      profile.tagline,
    ],
    "about",
  ),
  "work.txt": file(
    experience.flatMap((e) => [`[${e.period}] ${e.role}`, e.description, ""]),
    "experience",
  ),
  "skills.json": file(JSON.stringify(skills, null, 2).split("\n"), "skills"),
  "certifications.txt": file(
    certifications.map((c) => `✓ ${c.name} (${c.issuer}, ${c.year})`),
    "certifications",
  ),
  "contact.txt": file(
    [`email     ${profile.email}`, `github    ${profile.github}`, `linkedin  ${profile.linkedin}`],
    "contact",
  ),
  "resume.pdf": file(["%PDF-1.7 ... binary file. try: open resume.pdf"], "resume"),
  projects: dir(
    Object.fromEntries(
      projects.map((p) => [
        `${p.slug}.md`,
        file(
          [`# ${p.name}`, "", p.description, "", ...p.features.map((f) => `- ${f}`), "", `stack: ${p.tech.join(", ")}`, `code:  ${p.github}`],
          `project:${p.slug}`,
        ),
      ]),
    ),
  ),
  ".secret": file(["you found it 🎉  the real secret is: ship small, ship often."]),
});

const resolve = (cwd: string[], path = ""): string[] | null => {
  const parts = path.startsWith("~") || path.startsWith("/") ? [] : [...cwd];
  for (const seg of path.replace(/^~\/?|^\//, "").split("/")) {
    if (!seg || seg === ".") continue;
    if (seg === "..") parts.pop();
    else parts.push(seg);
  }
  return getNode(parts) ? parts : null;
};

const getNode = (parts: string[]): Node | null => {
  let node: Node = fs;
  for (const p of parts) {
    if (node.kind !== "dir" || !node.children[p]) return null;
    node = node.children[p];
  }
  return node;
};

const pathLabel = (cwd: string[]) => (cwd.length ? `~/${cwd.join("/")}` : "~");

/* ------------------------------------------------------------------ */
/* Commands                                                            */
/* ------------------------------------------------------------------ */

const COMMANDS = [
  "help", "ls", "cd", "pwd", "cat", "tree", "open", "whoami", "neofetch", "projects", "skills",
  "ping", "guess", "cowsay", "theme", "echo", "date", "history", "github", "linkedin", "email",
  "clear", "exit",
];

const SUGGESTIONS = ["help", "neofetch", "ls", "cat about.txt", "projects", "ping", "guess"];

const THEMES = ["default", "green", "amber", "blue"] as const;
type Theme = (typeof THEMES)[number];

const PROMPT_USER = "abhiyan@portfolio";

type Line = { id: number; node: ReactNode };

const C = ({ c, children }: { c: string; children: ReactNode }) => <span className={`t-${c}`}>{children}</span>;

const LOGO = [
  "    _    _  __",
  "   / \\  | |/ /",
  "  / _ \\ | ' / ",
  " / ___ \\| . \\ ",
  "/_/   \\_\\_|\\_\\",
];

export default function TerminalApp({ open, close }: { open: (id: string) => void; close: () => void }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [hIndex, setHIndex] = useState(-1);
  const [theme, setTheme] = useState<Theme>("default");
  const [busy, setBusy] = useState(false);
  // Number-guessing game state (null when not playing)
  const [game, setGame] = useState<{ target: number; tries: number } | null>(null);
  const nextId = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const print = (...nodes: ReactNode[]) =>
    setLines((ls) => [...ls, ...nodes.map((node) => ({ id: nextId.current++, node }))]);

  // Short typed-out greeting
  useEffect(() => {
    const greeting = [
      <span key="g1">
        Last login: {new Date().toDateString()} on ttys001
      </span>,
      <span key="g2">
        Welcome! I&apos;m <C c="accent">{profile.name}</C>. This terminal is a fun way to look around.
      </span>,
      <span key="g3">
        Type <C c="cmd">help</C> or tap a suggestion below. <C c="muted">(Tab completes, ↑/↓ for history)</C>
      </span>,
      <span key="g4">&nbsp;</span>,
    ];
    let i = 0;
    const t = window.setInterval(() => {
      const node = greeting[i++];
      setLines((ls) => [...ls, { id: nextId.current++, node }]);
      if (i >= greeting.length) window.clearInterval(t);
    }, 160);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const promptNode = (cmd: string, dirLabel = pathLabel(cwd)) => (
    <span>
      <C c="user">{PROMPT_USER}</C> <C c="path">{dirLabel}</C> <C c="muted">%</C> {cmd}
    </span>
  );

  const runGuess = (raw: string) => {
    if (!game) return;
    const n = Number(raw.trim());
    if (raw.trim() === "q" || raw.trim() === "quit") {
      print(<C c="muted">game over, the number was {game.target}</C>);
      setGame(null);
      return;
    }
    if (!Number.isInteger(n) || n < 1 || n > 100) {
      print(<C c="muted">type a whole number from 1 to 100 (or q to quit)</C>);
      return;
    }
    const tries = game.tries + 1;
    if (n === game.target) {
      print(<C c="ok">🎉 got it in {tries} {tries === 1 ? "try" : "tries"}! {tries <= 7 ? "binary search would be proud." : ""}</C>);
      setGame(null);
    } else {
      print(<span>{n < game.target ? "↑ higher" : "↓ lower"}</span>);
      setGame({ ...game, tries });
    }
  };

  const ping = async () => {
    const url = "https://api.abhiyankhanal1.com.np/health";
    print(<C c="muted">PING api.abhiyankhanal1.com.np (Oracle Cloud VM, my Elsendero backend)</C>);
    setBusy(true);
    for (let i = 1; i <= 3; i++) {
      const t0 = performance.now();
      try {
        // no-cors: the API only allows the Elsendero sites, but timing a round trip still works.
        await fetch(url, { cache: "no-store", mode: "no-cors" });
        const ms = Math.round(performance.now() - t0);
        print(
          <span>
            reply {i}: <C c="ok">ok</C> time=<C c="accent">{ms} ms</C>
          </span>,
        );
      } catch {
        print(<C c="err">reply {i}: request failed (server asleep or blocked)</C>);
      }
    }
    setBusy(false);
  };

  const run = (raw: string) => {
    const trimmed = raw.trim();
    print(game ? <span><C c="muted">guess&gt;</C> {raw}</span> : promptNode(raw));
    if (trimmed) setHistory((h) => [trimmed, ...h].slice(0, 50));
    setHIndex(-1);

    if (game) return runGuess(trimmed);
    if (!trimmed) return;

    const [cmd, ...args] = trimmed.split(/\s+/);
    const arg = args.join(" ");

    switch (cmd.toLowerCase()) {
      case "help":
        print(
          <C c="muted">navigation</C>,
          <span>  <C c="cmd">ls</C> [-a]  <C c="cmd">cd</C> &lt;dir&gt;  <C c="cmd">pwd</C>  <C c="cmd">cat</C> &lt;file&gt;  <C c="cmd">tree</C>  <C c="cmd">open</C> &lt;file&gt;</span>,
          <C c="muted">about me</C>,
          <span>  <C c="cmd">whoami</C>  <C c="cmd">neofetch</C>  <C c="cmd">projects</C>  <C c="cmd">skills</C>  <C c="cmd">github</C>  <C c="cmd">linkedin</C>  <C c="cmd">email</C></span>,
          <C c="muted">fun</C>,
          <span>  <C c="cmd">ping</C> (my live server)  <C c="cmd">guess</C>  <C c="cmd">cowsay</C> &lt;text&gt;  <C c="cmd">theme</C> [{THEMES.join("|")}]</span>,
          <C c="muted">other</C>,
          <span>  <C c="cmd">echo</C>  <C c="cmd">date</C>  <C c="cmd">history</C>  <C c="cmd">clear</C>  <C c="cmd">exit</C></span>,
        );
        break;

      case "ls": {
        const showHidden = args.includes("-a");
        const target = resolve(cwd, args.filter((a) => a !== "-a")[0] ?? "");
        const node = target && getNode(target);
        if (!node) return print(<C c="err">ls: no such file or directory: {arg}</C>);
        if (node.kind === "file") return print(<span>{target!.at(-1)}</span>);
        const names = Object.keys(node.children).filter((n) => showHidden || !n.startsWith("."));
        print(
          <span className="t-ls">
            {names.map((n) => (
              <button
                key={n}
                className={node.children[n].kind === "dir" ? "t-dir" : "t-file"}
                onClick={() => {
                  const abs = `~/${[...target!, n].join("/")}`;
                  run(node.children[n].kind === "dir" ? `cd ${abs}` : `cat ${abs}`);
                }}
              >
                {n}
                {node.children[n].kind === "dir" ? "/" : ""}
              </button>
            ))}
          </span>,
        );
        break;
      }

      case "cd": {
        const target = resolve(cwd, arg || "~");
        const node = target && getNode(target);
        if (!node) return print(<C c="err">cd: no such file or directory: {arg}</C>);
        if (node.kind !== "dir") return print(<C c="err">cd: not a directory: {arg}</C>);
        setCwd(target!);
        break;
      }

      case "pwd":
        print(<span>/home/abhiyan{cwd.length ? "/" + cwd.join("/") : ""}</span>);
        break;

      case "cat": {
        if (!arg) return print(<C c="err">usage: cat &lt;file&gt;</C>);
        const target = resolve(cwd, arg);
        const node = target && getNode(target);
        if (!node) return print(<C c="err">cat: {arg}: no such file</C>);
        if (node.kind === "dir") return print(<C c="err">cat: {arg}: is a directory</C>);
        print(...node.content.map((l) => <span>{l || " "}</span>));
        if (node.opens) print(<C c="muted">tip: `open {arg}` shows the nicer version</C>);
        break;
      }

      case "tree": {
        const out: ReactNode[] = [<C c="path">~</C>];
        const walk = (d: Dir, prefix: string) => {
          const entries = Object.entries(d.children).filter(([n]) => !n.startsWith("."));
          entries.forEach(([name, node], i) => {
            const last = i === entries.length - 1;
            out.push(
              <span>
                {prefix}
                {last ? "└── " : "├── "}
                {node.kind === "dir" ? <C c="dir">{name}/</C> : name}
              </span>,
            );
            if (node.kind === "dir") walk(node, prefix + (last ? "    " : "│   "));
          });
        };
        walk(fs, "");
        print(...out);
        break;
      }

      case "open": {
        if (!arg) return print(<C c="err">usage: open &lt;file&gt;</C>);
        const target = resolve(cwd, arg);
        const node = target && getNode(target);
        if (node?.kind === "file" && node.opens) {
          print(<C c="muted">opening {arg}…</C>);
          open(node.opens);
        } else if (node?.kind === "dir") {
          print(<C c="muted">opening Finder…</C>);
          open("projects");
        } else {
          print(<C c="err">open: can&apos;t open {arg}</C>);
        }
        break;
      }

      case "whoami":
        print(<span>{profile.name.toLowerCase().replace(" ", "")}: {profile.role.toLowerCase()}, {profile.location}</span>);
        break;

      case "neofetch": {
        const info: [string, string][] = [
          ["OS", "Portfolio OS (Aqua, light)"],
          ["Host", "Pulchowk Campus, IOE"],
          ["Shell", "zsh-ish (made in React)"],
          ["Role", profile.role],
          ["Location", profile.location],
          ["Languages", skills.Languages.join(", ")],
          ["Cloud", "AWS SAA certified · Oracle VM"],
          ["Status", profile.availability],
        ];
        const rows = Math.max(LOGO.length, info.length + 2);
        print(
          ...Array.from({ length: rows }, (_, i) => {
            const art = (LOGO[i] ?? "").padEnd(16, " ");
            let right: ReactNode = "";
            if (i === 0) right = <C c="user">abhiyan@portfolio</C>;
            else if (i === 1) right = <C c="muted">-----------------</C>;
            else if (info[i - 2]) right = <span><C c="accent">{info[i - 2][0]}</C>: {info[i - 2][1]}</span>;
            return (
              <span className="t-pre">
                <C c="accent">{art}</C>
                {right}
              </span>
            );
          }),
          <span className="t-swatches">
            {["#ef4444", "#f59e0b", "#22c55e", "#06b6d4", "#3b82f6", "#a855f7", "#e5e5e5"].map((c) => (
              <i key={c} style={{ background: c }} />
            ))}
          </span>,
        );
        break;
      }

      case "projects":
        print(
          ...projects.map((p) => (
            <span>
              <button className="t-link" onClick={() => open(`project:${p.slug}`)}>
                {p.name}
              </button>{" "}
              <C c="muted">— {p.tech.join(", ")}</C>
            </span>
          )),
          <C c="muted">click a name to open it</C>,
        );
        break;

      case "skills":
        print(
          ...Object.entries(skills).map(([group, items]) => (
            <span>
              <C c="accent">{group.padEnd(14, " ")}</C>
              {items.join(" · ")}
            </span>
          )),
        );
        break;

      case "ping":
        void ping();
        break;

      case "guess":
        setGame({ target: 1 + Math.floor(Math.random() * 100), tries: 0 });
        print(<span>I picked a number from 1 to 100. Guess it! <C c="muted">(q to quit)</C></span>);
        break;

      case "cowsay": {
        const text = arg || "moo. hire abhiyan.";
        const bar = "-".repeat(text.length + 2);
        print(
          ...[` ${"_".repeat(text.length + 2)}`, `< ${text} >`, ` ${bar}`, "        \\   ^__^", "         \\  (oo)\\_______", "            (__)\\       )\\/\\", "                ||----w |", "                ||     ||"].map((l) => (
            <span className="t-pre">{l}</span>
          )),
        );
        break;
      }

      case "theme": {
        const next = (arg || THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]) as Theme;
        if (!THEMES.includes(next)) return print(<C c="err">theme: pick one of {THEMES.join(", ")}</C>);
        setTheme(next);
        print(<C c="muted">theme set to {next}</C>);
        break;
      }

      case "echo":
        print(<span>{arg}</span>);
        break;

      case "date":
        print(<span>{new Date().toString()}</span>);
        break;

      case "history":
        print(...[...history].reverse().map((h, i) => <span>{String(i + 1).padStart(4, " ")}  {h}</span>));
        break;

      case "github":
      case "linkedin": {
        const url = cmd === "github" ? profile.github : profile.linkedin;
        print(<C c="muted">opening {url}</C>);
        window.open(url, "_blank", "noopener");
        break;
      }

      case "email":
      case "contact":
        print(<C c="muted">opening a new message…</C>);
        open("contact");
        break;

      case "clear":
        setLines([]);
        break;

      case "exit":
        close();
        break;

      case "sudo":
        print(<C c="err">abhiyan is not in the sudoers file. This incident will be reported. 🙂</C>);
        break;

      case "rm":
        print(<C c="err">rm: nice try, this portfolio is read-only</C>);
        break;

      case "vim":
      case "nano":
      case "emacs":
        print(<C c="muted">let&apos;s not start that debate here. (try `cat` instead)</C>);
        break;

      default:
        print(
          <span>
            <C c="err">zsh: command not found: {cmd}</C> <C c="muted">— try `help`</C>
          </span>,
        );
    }
  };

  const complete = () => {
    const parts = input.split(" ");
    if (parts.length === 1) {
      const matches = COMMANDS.filter((c) => c.startsWith(parts[0]));
      if (matches.length === 1) setInput(matches[0] + " ");
      else if (matches.length > 1) print(promptNode(input), <span>{matches.join("  ")}</span>);
      return;
    }
    // Complete a file/dir name relative to the current directory.
    const last = parts.at(-1) ?? "";
    const base = last.includes("/") ? last.slice(0, last.lastIndexOf("/") + 1) : "";
    const target = resolve(cwd, base || ".");
    const node = target && getNode(target);
    if (!node || node.kind !== "dir") return;
    const matches = Object.keys(node.children).filter((n) => n.startsWith(last.slice(base.length)));
    if (matches.length === 1) {
      const m = matches[0];
      parts[parts.length - 1] = base + m + (node.children[m].kind === "dir" ? "/" : "");
      setInput(parts.join(" "));
    } else if (matches.length > 1) {
      print(promptNode(input), <span>{matches.join("  ")}</span>);
    }
  };

  return (
    <div className={`terminal theme-${theme}`} onClick={() => window.getSelection()?.isCollapsed && inputRef.current?.focus()}>
      <div className="t-scroll" ref={scrollRef}>
        {lines.map((l) => (
          <p key={l.id}>{l.node}</p>
        ))}
        <div className="t-input">
          {game ? <C c="muted">guess&gt;</C> : promptNode("")}
          <input
            ref={inputRef}
            value={input}
            autoFocus
            disabled={busy}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                run(input);
                setInput("");
              } else if (e.key === "Tab") {
                e.preventDefault();
                complete();
              } else if (e.key === "ArrowUp" && history.length) {
                e.preventDefault();
                const i = Math.min(hIndex + 1, history.length - 1);
                setHIndex(i);
                setInput(history[i]);
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                const i = hIndex - 1;
                setHIndex(Math.max(i, -1));
                setInput(i >= 0 ? history[i] : "");
              } else if (e.ctrlKey && e.key.toLowerCase() === "l") {
                e.preventDefault();
                setLines([]);
              } else if (e.ctrlKey && e.key.toLowerCase() === "c") {
                e.preventDefault();
                print(promptNode(input + "^C"));
                setInput("");
                setGame(null);
              }
            }}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="Terminal input"
          />
        </div>
      </div>
      <div className="t-chips" aria-label="Suggested commands">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={(e) => {
              e.stopPropagation();
              run(s);
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
