/*
 * ============================================================
 *  PORTFOLIO CONTENT — edit everything in this single file.
 *  Every value marked with TODO is a placeholder that Shreya
 *  should replace with the real link / detail once confirmed.
 *  Nothing here is fabricated: null or "TODO" means "not known yet".
 * ============================================================
 */

import heroBg from "@/assets/hero-bg.jpg";
import projectBlocklens from "@/assets/project-blocklens.png.asset.json";
import projectChainforge from "@/assets/project-chainforge.png.asset.json";
import projectBridgewatch from "@/assets/project-bridgewatch.png.asset.json";
import eventLeads from "@/assets/enigma-shreya-event-lead.jpeg.asset.json";
import eventGroup from "@/assets/enigma-event-group.jpeg.asset.json";
import outdoorTeam from "@/assets/enigma-outdoor-team.jpeg.asset.json";
import organizingTeam from "@/assets/enigma-organizing-team.jpeg.asset.json";

export const heroImage = heroBg;

export const profile = {
  name: "Shreya Kanchan",
  headline: "Engineering Ideas Into Impact.",
  intro:
    "I'm an Electronics and Computer Science Engineering student interested in building practical technology solutions, exploring cybersecurity, and creating meaningful experiences through technology and collaboration.",
  tagline: "Developer | Hackathon Enthusiast | Event Lead",
  college: "SIES Graduate School of Technology, Navi Mumbai",
  branch: "Electronics and Computer Science Engineering",

  github: "https://github.com/ShreyaKanchan",
  linkedin: "https://www.linkedin.com/in/shreya-kanchan-79850631b/",
  email: "shreyakanchan25@gmail.com",
};

export const featuredHighlights = [
  {
    label: "Top 7",
    detail: "in ENIGMA 4.0",
    edition: "",
    href: "#achievements",
  },
  {
    label: "Top 12",
    detail: "in Hackanova",
    edition: "",
    href: "#achievements",
  },
  {
    label: "Event Lead",
    detail: "ENIGMA 5.0",
    edition: "CSI SIESGST",
    href: "#leadership",
  },
];

export const about = {
  paragraphs: [
    "I'm an engineering student who enjoys exploring technology, building projects, participating in hackathons, and collaborating with teams. Whether it's a hardware prototype or an event floor, I like being the person who picks things up, figures them out, and gets them working.",
    "I have experience in both technical project development and student community leadership. Through hackathons and event organizing, I've developed problem-solving, teamwork, communication, coordination, and execution skills — the mix you need to both build something and get a room full of people building with you.",
    "My current interests are cybersecurity, Governance, Risk and Compliance (GRC), web development, and practical technology solutions that solve real problems rather than demo well and disappear.",
  ],
};

export type ProjectLink = { label: string; href: string };

export const projects = [
  {
    title: "Blocklens",
    description:
      "A wallet-intelligence prototype that observes wallet activity and turns transfers into readable timelines.",
    details:
      "Explores wallet activity through a prototype workflow: read the model, run tests, and extend the implementation.",
    tags: [] as string[],
    image: projectBlocklens.url,
    imageAlt: "Screenshot of the Blocklens wallet-intelligence project",
    links: {
      github: null as string | null,
      demo: "https://shreyakanchan.github.io/blocklens/",
    },
  },
  {
    title: "Chainforge",
    description:
      "A protocol-education prototype for learning consensus by mining a readable chain.",
    details:
      "Explores how transactions become blocks and how those blocks form a chain through consensus.",
    tags: [] as string[],
    image: projectChainforge.url,
    imageAlt: "Screenshot of the Chainforge protocol-education project",
    links: {
      github: null as string | null,
      demo: "https://shreyakanchan.github.io/chainforge/",
    },
  },
  {
    title: "Bridgewatch",
    description:
      "A bridge-operations prototype for monitoring cross-chain messages before pending delivery becomes an incident.",
    details:
      "Follows cross-chain messages through source, relay, and delivery to make the bridge workflow easier to observe.",
    tags: [] as string[],
    image: projectBridgewatch.url,
    imageAlt: "Screenshot of the Bridgewatch bridge-operations project",
    links: {
      github: null as string | null,
      demo: "https://shreyakanchan.github.io/bridgewatch/",
    },
  },
];

export const achievements = [
  {
    position: "Top 7",
    title: "in ENIGMA 4.0",
    edition: "",
    description: "",
    year: "",
  },
  {
    position: "Top 12",
    title: "in Hackanova",
    edition: "",
    description: "",
    year: "",
  },
  {
    position: "Second Place",
    title: "Matrix",
    edition: "College-level competition",
    description:
      "My team secured second place in Matrix, a college-level competition — a win that came from collaborative problem-solving and disciplined execution rather than any single person's effort.",
    year: "Year to be added", // TODO
  },
];

export const leadership = {
  featured: {
    role: "Event Lead",
    event: "ENIGMA 5.0",
    organization: "CSI SIESGST",
    eventType: "National-level web development hackathon",
    description:
      "As Event Lead for ENIGMA 5.0, I contributed to organizing a national-level web development hackathon, coordinating volunteers and teams, supporting event planning and publicity, and helping manage event operations. The experience strengthened my leadership, communication, teamwork, and problem-solving skills.",
  },
  photos: [
    { src: eventLeads.url, alt: "Shreya Kanchan, event lead for ENIGMA 5.0" },
    { src: eventGroup.url, alt: "ENIGMA event group gathered in the auditorium" },
    { src: outdoorTeam.url, alt: "Shreya and fellow event team members outdoors" },
    { src: organizingTeam.url, alt: "ENIGMA organizing team posing together in the auditorium" },
  ],
  community: [
    {
      title: "CSI SIESGST",
      detail:
        "Active involvement in the Computer Society of India student chapter — participating in and helping run the community's technical activities and events.",
    },
    {
      title: "GDG On Campus SIESGST",
      detail:
        "Management and outreach experience with Google Developer Group on Campus — helping connect the community with students, sessions, and events.",
    },
  ],
  closing:
    "I contribute in two ways: by building technology, and by coordinating people — turning ideas into organized, executed events.",
};

export const skillGroups = [
  {
    category: "Programming",
    skills: [
      { name: "Python" },
      { name: "Java", note: "Basic" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
  },
  {
    category: "Data & Visualization",
    skills: [{ name: "Power BI" }],
  },
  {
    category: "Cloud & Development Tools",
    skills: [
      { name: "Google Cloud" },
      { name: "GitHub" },
      { name: "Lovable" },
      { name: "Bolt" },
    ],
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Cybersecurity fundamentals" },
      { name: "Security awareness" },
      { name: "GRC", note: "Governance, Risk and Compliance — learning & career interest" },
    ],
  },
  {
    category: "Project & Collaboration",
    skills: [
      { name: "Teamwork" },
      { name: "Problem-solving" },
      { name: "Event coordination" },
      { name: "Leadership" },
      { name: "Communication" },
    ],
  },
];

export const certifications = [
  // TODO: add issuing dates / credential details when available. None are invented.
  { name: "Cisco Cybersecurity Basics", detail: "Details to be added" },
  { name: "Google Cloud Study Jam", detail: "Details to be added" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Leadership", href: "#leadership" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
