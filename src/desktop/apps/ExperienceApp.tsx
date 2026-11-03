import { achievements, experience, profile } from "@/lib/data";

export default function ExperienceApp() {
  return (
    <div className="doc textedit">
      {experience.map((job) => (
        <section key={job.role}>
          <p className="label">{job.period}</p>
          <h1>{job.role}</h1>
          <p className="muted">{job.org}</p>
          <p>{job.description}</p>
          {job.highlights.length > 0 && (
            <ul className="plain-list">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <section>
        <p className="label">2023 – now</p>
        <h1>Bachelor&apos;s in Computer Engineering</h1>
        <p>{profile.subtitle}.</p>
      </section>
      <section>
        <p className="label">Hackathons &amp; competitions</p>
        {achievements.map((a) => (
          <div key={a.title}>
            <h1>
              {a.title} · {a.year}
            </h1>
            <p className="muted">{a.event}</p>
            <p>{a.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
