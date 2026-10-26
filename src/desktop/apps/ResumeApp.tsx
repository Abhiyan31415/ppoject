import { Download } from "lucide-react";
import { profile } from "@/lib/data";

export default function ResumeApp() {
  return (
    <div className="resume">
      <div className="toolbar">
        <span className="muted">Abhiyan Khanal · Resume</span>
        <a className="aqua-btn small" href={profile.resumeUrl} download="Abhiyan-Khanal-Resume.pdf">
          <Download size={13} /> Download
        </a>
      </div>
      <iframe src={`${profile.resumeUrl}#view=FitH`} title="Resume" />
    </div>
  );
}
