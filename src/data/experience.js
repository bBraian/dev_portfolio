// Language-independent timeline data. Texts live in data/languages under `experience` / `education`,
// keyed by `id`. Months are 1-based.
export const experience = [
  {
    id: "syonet",
    company: "Syonet",
    location: "Porto Alegre",
    start: { year: 2025, month: 4 },
    end: null,
    tech: ["React", "TypeScript", "Vue", "Node.js", "PHP", "Laravel", "PostgreSQL", "Tailwind", "Docker", "Microservices"],
  },
  {
    id: "happy",
    company: "Happy Saúde",
    location: "Brochier",
    start: { year: 2021, month: 8 },
    end: { year: 2025, month: 4 },
    tech: ["JavaScript", "React", "PHP", "SQL", "GitHub"],
  },
  {
    id: "openfy",
    company: "Openfy",
    location: "Brochier",
    start: { year: 2020, month: 12 },
    end: { year: 2021, month: 8 },
    tech: ["JavaScript", "PHP", "MySQL", "HTML", "CSS", "Bootstrap", "jQuery", "ScriptCase", "Git"],
  },
];

export const education = [
  {
    id: "unipds",
    company: "UniPDS",
    location: "Online",
    start: { year: 2026, month: 3 },
    end: null,
    expectedEnd: { year: 2026, month: 12 },
    tech: ["AI", "Machine Learning", "Deep Learning", "Software Engineering"],
  },
  {
    id: "unisinos",
    company: "Unisinos",
    location: null,
    start: { year: 2020, month: 2 },
    end: { year: 2024, month: 6 },
    tech: ["Algorithms", "Databases", "Software Engineering"],
  },
];
