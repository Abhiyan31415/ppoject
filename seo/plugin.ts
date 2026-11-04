/**
 * Build-time SEO for the desktop portfolio.
 *
 * The desktop UI only shows text after JavaScript runs and windows are opened,
 * which search engines and AI crawlers handle poorly. This plugin writes the same
 * content from src/lib/data.ts as plain HTML:
 *   - a static copy of the profile inside #root on the home page (React replaces it on load)
 *   - /about/ and /projects/<slug>/ pages that work without JavaScript
 *   - JSON-LD structured data, sitemap.xml, robots.txt, llms.txt and a 404 page
 */
import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import {
  aboutCards,
  achievements,
  certifications,
  experience,
  profile,
  projects,
  skills,
  type Project,
} from "../src/lib/data";

export const SITE = "https://abhiyankhanal1.com.np";
const BLOG = "https://blogs.abhiyankhanal1.com.np";
const OG_IMAGE = `${SITE}/og-image.jpg`;
const PERSON_ID = `${SITE}/#person`;

const HOME_TITLE = "Abhiyan Khanal · Full-stack developer in Lalitpur, Nepal";
const HOME_DESC =
  "Abhiyan Khanal is a full-stack developer and computer engineering student at Pulchowk Campus (IOE, Tribhuvan University) in Lalitpur, Nepal. AWS Certified Solutions Architect. Projects, experience, skills and contact.";

const bio = aboutCards.find((c) => c.type === "text")!.content as string;
const nowList = aboutCards.find((c) => c.type === "list")!.content as string[];
const allSkills = Object.values(skills).flat();

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const plainName = (p: Project) => p.name.replace(/^.*\((.+)\)$/, "$1");
const projectUrl = (p: Project) => `${SITE}/projects/${p.slug}/`;
const jsonLd = (data: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

/* ---------------- structured data ---------------- */

const university = {
  "@type": "CollegeOrUniversity",
  name: "Pulchowk Campus, Institute of Engineering, Tribhuvan University",
  alternateName: ["IOE Pulchowk Campus", "Pulchowk Engineering Campus"],
  url: "https://pcampus.edu.np",
  address: { "@type": "PostalAddress", addressLocality: "Lalitpur", addressCountry: "NP" },
};

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: profile.name,
  givenName: "Abhiyan",
  familyName: "Khanal",
  url: `${SITE}/`,
  image: { "@type": "ImageObject", url: `${SITE}${profile.photo}`, width: 480, height: 480 },
  jobTitle: profile.role,
  description: `${profile.name} is a ${profile.role.toLowerCase()} and ${profile.subtitle.toLowerCase()}, Nepal. ${profile.tagline}`,
  email: `mailto:${profile.email}`,
  nationality: { "@type": "Country", name: "Nepal" },
  homeLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressLocality: "Lalitpur", addressRegion: "Bagmati", addressCountry: "NP" },
  },
  alumniOf: university,
  affiliation: [
    university,
    { "@type": "Organization", name: "IT Club, Pulchowk Campus" },
    { "@type": "Organization", name: "AWS Student Builder Group, IOE Pulchowk" },
  ],
  knowsAbout: allSkills.map((s) => s.replace(/ \(.*\)$/, "")),
  knowsLanguage: ["English", "Nepali"],
  hasCredential: certifications.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.name,
    credentialCategory: "certification",
    recognizedBy: { "@type": "Organization", name: c.issuer },
    dateCreated: c.year,
    ...(c.credentialId ? { identifier: c.credentialId } : {}),
  })),
  award: achievements.map((a) => `${a.title}, ${a.event} (${a.year})`),
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-stack developer",
    occupationLocation: { "@type": "Country", name: "Nepal" },
    skills: allSkills.join(", "),
  },
  sameAs: [profile.github, profile.linkedin, BLOG],
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: `${SITE}/`,
  name: "Abhiyan Khanal",
  alternateName: "Abhiyan Khanal portfolio",
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};

const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    website,
    person,
    {
      "@type": "ProfilePage",
      "@id": `${SITE}/#profilepage`,
      url: `${SITE}/`,
      name: HOME_TITLE,
      description: HOME_DESC,
      isPartOf: { "@id": `${SITE}/#website` },
      mainEntity: { "@id": PERSON_ID },
      primaryImageOfPage: OG_IMAGE,
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      name: "Projects by Abhiyan Khanal",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: projectUrl(p),
        name: plainName(p),
      })),
    },
  ],
};

/* ---------------- shared HTML pieces ---------------- */

function head(opts: { title: string; desc: string; url: string; image?: string; type?: string; noindex?: boolean }) {
  const image = opts.image ?? OG_IMAGE;
  return `<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(opts.title)}</title>
    <meta name="description" content="${esc(opts.desc)}" />
    <meta name="author" content="${esc(profile.name)}" />
    ${opts.noindex ? `<meta name="robots" content="noindex" />` : `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />\n    <link rel="canonical" href="${opts.url}" />`}
    <meta property="og:type" content="${opts.type ?? "website"}" />
    <meta property="og:site_name" content="Abhiyan Khanal" />
    <meta property="og:title" content="${esc(opts.title)}" />
    <meta property="og:description" content="${esc(opts.desc)}" />
    <meta property="og:url" content="${opts.url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(opts.title)}" />
    <meta name="twitter:description" content="${esc(opts.desc)}" />
    <meta name="twitter:image" content="${image}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#f4f6f9" />`;
}

const PAGE_CSS = `
:root{--text:#1d1d1f;--muted:#6e6e73;--line:#d9dce1;--bg:#f4f6f9;--panel:#fff;--accent:#1d7fe0;--tag:#e3effc}
@media (prefers-color-scheme:dark){:root{--text:#f2f2f4;--muted:#a1a1a8;--line:#3a3d44;--bg:#16181c;--panel:#1f2227;--accent:#5aa9ff;--tag:#1d3350}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Arial,sans-serif;-webkit-font-smoothing:antialiased}
a{color:var(--accent)}
.wrap{max-width:760px;margin:0 auto;padding:24px 16px 64px}
nav.top{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:14px;padding-bottom:16px;border-bottom:1px solid var(--line);margin-bottom:24px}
nav.top a{text-decoration:none}
.card{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:20px 22px;margin:16px 0}
h1{font-size:30px;line-height:1.2;margin:0 0 6px}
h2{font-size:20px;margin:28px 0 8px}
h3{font-size:16px;margin:16px 0 2px}
.muted{color:var(--muted)}
.hero{display:flex;gap:20px;align-items:center;flex-wrap:wrap}
.hero img{width:112px;height:112px;border-radius:50%;object-fit:cover}
.tags{display:flex;flex-wrap:wrap;gap:6px;padding:0;list-style:none}
.tags li{background:var(--tag);border-radius:999px;padding:2px 10px;font-size:13px}
.shot{width:100%;height:auto;border-radius:10px;border:1px solid var(--line);margin:8px 0}
.shots-phone{display:flex;gap:10px;flex-wrap:wrap}.shots-phone img{width:30%;min-width:140px}
.cta{display:inline-block;background:var(--accent);color:#fff;text-decoration:none;padding:8px 16px;border-radius:8px;font-weight:600}
footer{margin-top:40px;font-size:14px}
ul{padding-left:20px}
`;

const topNav = `<nav class="top" aria-label="Site">
      <a href="/"><strong>Abhiyan Khanal</strong></a>
      <a href="/about/">About</a>
      <a href="/#projects">Projects</a>
      <a href="${profile.resumeUrl}">Resume</a>
      <a href="${BLOG}">Blog</a>
      <a href="${profile.github}" rel="me">GitHub</a>
      <a href="${profile.linkedin}" rel="me">LinkedIn</a>
    </nav>`;

const footer = `<footer class="muted">
      <p>© ${new Date().getFullYear()} ${profile.name} · ${profile.location} · <a href="mailto:${profile.email}">${profile.email}</a></p>
      <p><a class="cta" href="/">Open the interactive desktop</a></p>
    </footer>`;

function page(headHtml: string, body: string, ld: unknown) {
  return `<!doctype html>
<html lang="en">
  <head>
    ${headHtml}
    <style>${PAGE_CSS}</style>
    ${jsonLd(ld)}
  </head>
  <body>
    <div class="wrap">
    ${topNav}
    ${body}
    ${footer}
    </div>
  </body>
</html>
`;
}

/* ---------------- content blocks ---------------- */

const list = (items: string[]) => (items.length ? `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : "");
const tags = (items: string[]) => `<ul class="tags">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

function profileBody(headingTag: "h1" | "h2") {
  return `<header class="hero">
      <img src="${profile.photo}" alt="Photo of ${profile.name}" width="112" height="112" />
      <div>
        <${headingTag} style="font-size:30px;margin:0">${profile.name}</${headingTag}>
        <p class="muted" style="margin:4px 0">${esc(profile.role)} · ${esc(profile.subtitle)}, Nepal</p>
        <p style="margin:0">${esc(profile.availability)} · <a href="mailto:${profile.email}">${profile.email}</a></p>
      </div>
    </header>

    <section id="about">
      <h2>About Abhiyan Khanal</h2>
      <p>${esc(profile.tagline)}</p>
      <p>${esc(bio)}</p>
      <h3>Right now</h3>
      ${list(nowList)}
    </section>

    <section id="experience">
      <h2>Experience</h2>
      ${experience
        .map(
          (e) => `<div class="card">
        <h3>${esc(e.role)}, ${esc(e.org)}</h3>
        <p class="muted" style="margin:0">${esc(e.period)}</p>
        <p>${esc(e.description)}</p>
        ${list(e.highlights)}
      </div>`,
        )
        .join("\n      ")}
    </section>

    <section id="projects">
      <h2>Projects</h2>
      ${projects
        .map(
          (p) => `<div class="card">
        <h3><a href="/projects/${p.slug}/">${esc(p.name)}</a></h3>
        <p class="muted" style="margin:0">${esc(p.meta)}</p>
        <p>${esc(p.description)}</p>
        <p class="muted" style="margin:0;font-size:14px">${esc(p.tech.join(" · "))}</p>
      </div>`,
        )
        .join("\n      ")}
    </section>

    <section id="achievements">
      <h2>Hackathons and awards</h2>
      <ul>${achievements.map((a) => `<li><strong>${esc(a.title)}</strong>, ${esc(a.event)} (${a.year}). ${esc(a.detail)}</li>`).join("")}</ul>
    </section>

    <section id="certifications">
      <h2>Certifications</h2>
      <ul>${certifications.map((c) => `<li>${esc(c.name)}, ${esc(c.issuer)} (${c.year})</li>`).join("")}</ul>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      ${Object.entries(skills)
        .map(([group, items]) => `<h3>${esc(group)}</h3>${tags(items)}`)
        .join("\n      ")}
    </section>

    <section id="education">
      <h2>Education</h2>
      <p>Bachelor of Computer Engineering, Pulchowk Campus, Institute of Engineering (IOE), Tribhuvan University, Lalitpur, Nepal (2023 – present).</p>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>Email <a href="mailto:${profile.email}">${profile.email}</a>, or find me on <a href="${profile.github}" rel="me">GitHub</a> and <a href="${profile.linkedin}" rel="me">LinkedIn</a>. My resume is <a href="${profile.resumeUrl}">here (PDF)</a>.</p>
    </section>`;
}

/** Static content placed inside #root on the home page. React swaps it for the desktop on load. */
function homeFallback() {
  const css = `.seo-static h1{font-size:30px;font-weight:700;margin:0}.seo-static h2{font-size:20px;font-weight:700;margin:28px 0 8px}.seo-static h3{font-weight:600;margin:14px 0 2px}.seo-static p{margin:0 0 10px}.seo-static ul{list-style:disc;padding-left:20px;margin:0 0 10px}.seo-static .tags{list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:6px}.seo-static .tags li{background:#e3effc;border-radius:999px;padding:2px 10px;font-size:13px}.seo-static .card{background:#fff;border:1px solid #d9dce1;border-radius:12px;padding:16px 18px;margin:12px 0}.seo-static .hero{display:flex;gap:20px;align-items:center;flex-wrap:wrap}.seo-static .hero img{width:112px;height:112px;border-radius:50%;object-fit:cover}.seo-static .muted{color:#6e6e73}.seo-static a{color:#1d7fe0}`;
  return `<style>${css}</style><div class="seo-static" style="height:100%;overflow:auto;background:#f4f6f9;color:#1d1d1f;font:16px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Arial,sans-serif">
      <main style="max-width:760px;margin:0 auto;padding:24px 16px 64px">
        <nav aria-label="Site" style="display:flex;flex-wrap:wrap;gap:6px 16px;font-size:14px;margin-bottom:24px">
          <a href="/about/">About</a><a href="#projects">Projects</a><a href="${profile.resumeUrl}">Resume</a><a href="${BLOG}">Blog</a>
        </nav>
        ${profileBody("h1")}
      </main>
    </div>`;
}

/* ---------------- pages ---------------- */

function aboutPage() {
  const url = `${SITE}/about/`;
  const title = "About Abhiyan Khanal · Full-stack developer, Pulchowk Campus";
  const desc = `Who is Abhiyan Khanal? A full-stack developer and computer engineering student at Pulchowk Campus, Lalitpur, Nepal. Experience, projects, hackathons, certifications and skills.`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      website,
      person,
      {
        "@type": "ProfilePage",
        url,
        name: title,
        description: desc,
        isPartOf: { "@id": `${SITE}/#website` },
        mainEntity: { "@id": PERSON_ID },
        breadcrumb: breadcrumbs([["About", url]]),
      },
    ],
  };
  return page(head({ title, desc, url, type: "profile" }), `<main>${profileBody("h1")}</main>`, ld);
}

function breadcrumbs(items: [string, string][]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [["Home", `${SITE}/`] as [string, string], ...items].map(([name, item], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item,
    })),
  };
}

function projectPage(p: Project) {
  const url = projectUrl(p);
  const name = plainName(p);
  const title = `${name} · a project by Abhiyan Khanal`;
  const desc = p.description.length > 158 ? p.description.slice(0, 155).replace(/\s+\S*$/, "") + "…" : p.description;
  const image = p.shots[0] ? `${SITE}${p.shots[0].src}` : OG_IMAGE;
  const isCode = Boolean(p.github);
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      website,
      {
        "@type": isCode ? "SoftwareSourceCode" : "CreativeWork",
        "@id": `${url}#project`,
        name: p.name,
        alternateName: name !== p.name ? name : undefined,
        url,
        description: p.description,
        image,
        author: { "@id": PERSON_ID, "@type": "Person", name: profile.name, url: `${SITE}/` },
        keywords: p.tech.join(", "),
        ...(isCode ? { codeRepository: p.github, programmingLanguage: p.tech } : {}),
        ...(p.demo ? { sameAs: p.demo } : {}),
      },
      { "@type": "WebPage", url, name: title, isPartOf: { "@id": `${SITE}/#website` }, breadcrumb: breadcrumbs([["Projects", `${SITE}/#projects`], [name, url]]) },
    ],
  };

  const phone = p.shots.some((s) => s.phone);
  const shots = p.shots.length
    ? phone
      ? `<div class="shots-phone">${p.shots.map((s) => `<img class="shot" src="${s.src}" alt="${esc(s.alt)}" loading="lazy" />`).join("")}</div>`
      : p.shots.map((s) => `<img class="shot" src="${s.src}" alt="${esc(s.alt)}" loading="lazy" />`).join("")
    : "";
  const links = [
    p.demo && `<a class="cta" href="${p.demo}">Visit live site</a>`,
    p.github && `<a href="${p.github}">Source on GitHub</a>`,
    p.video && `<a href="https://www.youtube.com/watch?v=${p.video}">Watch the demo video</a>`,
  ].filter(Boolean);
  const others = projects.filter((o) => o.slug !== p.slug);

  const body = `<main>
      <p class="muted" style="margin:0 0 4px;font-size:14px"><a href="/">Home</a> › <a href="/#projects">Projects</a></p>
      <h1>${esc(p.name)}</h1>
      <p class="muted" style="margin:0">${esc(p.meta)} · by <a href="/about/">Abhiyan Khanal</a></p>
      <p>${esc(p.description)}</p>
      ${links.length ? `<p style="display:flex;gap:16px;flex-wrap:wrap;align-items:center">${links.join("")}</p>` : ""}
      ${shots}
      <h2>Features</h2>
      ${list(p.features)}
      ${p.sections
        .map((s) => `<h2>${esc(s.heading)}</h2>${(s.paragraphs ?? []).map((t) => `<p>${esc(t)}</p>`).join("")}${list(s.bullets ?? [])}`)
        .join("\n      ")}
      <h2>Tech stack</h2>
      ${tags(p.tech)}
      <h2>More projects by Abhiyan Khanal</h2>
      <ul>${others.map((o) => `<li><a href="/projects/${o.slug}/">${esc(o.name)}</a>: ${esc(o.meta)}</li>`).join("")}</ul>
    </main>`;
  return page(head({ title, desc, url, image, type: "article" }), body, ld);
}

function notFoundPage() {
  return page(
    head({ title: "Page not found · Abhiyan Khanal", desc: "This page does not exist.", url: `${SITE}/404`, noindex: true }),
    `<main><h1>Hmm, that page doesn't exist</h1><p class="muted">Nothing lives at this address.</p><p><a class="cta" href="/">Take me home</a></p></main>`,
    website,
  );
}

function llmsTxt() {
  return `# Abhiyan Khanal

> ${profile.name} is a ${profile.role.toLowerCase()} and computer engineering student at Pulchowk Campus (Institute of Engineering, Tribhuvan University) in Lalitpur, Nepal. Abhiyan builds web and mobile apps end to end and is an AWS Certified Solutions Architect – Associate.

${bio}

- Website: ${SITE}/
- Full profile (plain HTML): ${SITE}/about/
- Resume (PDF): ${SITE}${profile.resumeUrl}
- Blog: ${BLOG}
- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}
- Email: ${profile.email}

## Experience

${experience.map((e) => `- ${e.role}, ${e.org} (${e.period}): ${e.description}`).join("\n")}

## Projects

${projects.map((p) => `- [${plainName(p)}](${projectUrl(p)}): ${p.description}`).join("\n")}

## Awards

${achievements.map((a) => `- ${a.title}, ${a.event} (${a.year}): ${a.detail}`).join("\n")}

## Certifications

${certifications.map((c) => `- ${c.name}, ${c.issuer} (${c.year})`).join("\n")}

## Skills

${Object.entries(skills).map(([g, s]) => `- ${g}: ${s.join(", ")}`).join("\n")}
`;
}

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls: [string, string][] = [
    [`${SITE}/`, "1.0"],
    [`${SITE}/about/`, "0.9"],
    ...projects.map((p) => [projectUrl(p), "0.7"] as [string, string]),
    [`${SITE}${profile.resumeUrl}`, "0.5"],
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([loc, pr]) => `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`).join("\n")}
</urlset>
`;
}

const robots = `# Search engines and AI assistants are welcome to read this site.
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

/* ---------------- plugin ---------------- */

export default function seo(): Plugin {
  let outDir = "dist";
  let isBuild = false;
  return {
    name: "portfolio-seo",
    configResolved(cfg) {
      outDir = path.resolve(cfg.root, cfg.build.outDir);
      isBuild = cfg.command === "build";
    },
    transformIndexHtml(html) {
      return html
        .replace("<!--seo:head-->", `${head({ title: HOME_TITLE, desc: HOME_DESC, url: `${SITE}/`, type: "profile" })}\n    ${jsonLd(homeGraph)}`)
        .replace(`<div id="root"></div>`, `<div id="root">${homeFallback()}</div>`);
    },
    closeBundle() {
      if (!isBuild) return;
      const write = (rel: string, content: string) => {
        const file = path.join(outDir, rel);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, content);
      };
      write("about/index.html", aboutPage());
      for (const p of projects) write(`projects/${p.slug}/index.html`, projectPage(p));
      write("404.html", notFoundPage());
      write("sitemap.xml", sitemap());
      write("robots.txt", robots);
      write("llms.txt", llmsTxt());
    },
  };
}
