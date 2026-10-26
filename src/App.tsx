import Desktop from "./desktop/Desktop";
import "./desktop/desktop.css";

function NotFound() {
  return (
    <main className="not-found">
      <div className="window focused">
        <header className="titlebar">
          <h2 className="title">404</h2>
        </header>
        <div className="doc">
          <h1>Hmm, that page doesn&apos;t exist</h1>
          <p className="muted">Nothing lives at this address. You probably wanted the desktop.</p>
          <a className="aqua-btn primary" href="/">
            Take me home
          </a>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  if (window.location.pathname !== "/") return <NotFound />;
  return <Desktop />;
}
