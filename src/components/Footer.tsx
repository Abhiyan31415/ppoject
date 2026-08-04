export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-warm">
          Built with React · Vite · Tailwind CSS · TypeScript
        </p>
        <p className="text-xs text-warm">
          Designed and Developed by{" "}
          <span className="text-warm">Abhiyan Khanal</span>
        </p>
      </div>
    </footer>
  );
}
