import { BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/data";

export default function CertificationsApp() {
  return (
    <div className="doc">
      <ul className="cert-list">
        {certifications.map((c) => (
          <li key={c.name} className={c.featured ? "featured" : ""}>
            <BadgeCheck size={20} className="cert-icon" />
            <div>
              <p className="cert-name">{c.name}</p>
              <p className="muted">
                {c.issuer} · {c.year}
              </p>
              {c.credentialId && (
                <p className="muted mono small">Credential ID {c.credentialId}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
