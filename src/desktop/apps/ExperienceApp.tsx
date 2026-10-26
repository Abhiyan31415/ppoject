import { experience, profile } from "@/lib/data";

export default function ExperienceApp() {
  return (
    <div className="doc textedit">
      {experience.map((job) => (
        <section key={job.role}>
          <p className="label">{job.period}</p>
          <h1>{job.role}</h1>
          <p>{job.description}</p>
        </section>
      ))}
      <section>
        <p className="label">2023 – now</p>
        <h1>Bachelor&apos;s in Computer Engineering</h1>
        <p>{profile.subtitle}.</p>
      </section>
    </div>
  );
}
