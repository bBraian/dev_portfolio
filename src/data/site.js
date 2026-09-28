// Personal info shared by header, footer, hero and contact page.
export const site = {
  name: "Braian Viacava de Ávila",
  shortName: "Braian",
  handle: "bBraian",
  email: "braianvoficial@gmail.com",
  location: "Brochier, RS — Brasil",
  careerStart: new Date(2020, 11, 1),
};

export const socials = [
  { key: "github", label: "GitHub", url: "https://github.com/bBraian" },
  { key: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/braian-viacava-de-avila-536558186/" },
  { key: "twitter", label: "X (Twitter)", url: "https://twitter.com/b_Braaian" },
];

export function yearsOfExperience() {
  const ms = Date.now() - site.careerStart.getTime();
  return Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000));
}
