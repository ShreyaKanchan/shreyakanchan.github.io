/*
 * ============================================================
 *  PORTFOLIO CONTENT — edit everything in this single file.
 *  Every value marked with TODO is a placeholder that Shreya
 *  should replace with the real link / detail once confirmed.
 *  Nothing here is fabricated: null or "TODO" means "not known yet".
 * ============================================================
 */

import heroBg from "@/assets/hero-bg.jpg";
import projectSecurity from "@/assets/project-security.jpg";
import projectFingerprint from "@/assets/project-fingerprint.jpg";
import projectAquaRobot from "@/assets/project-aqua-robot.jpg";
import eventLeads from "@/assets/enigma-event-leads.jpeg.asset.json";
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

  // TODO: Replace with the real profile URLs and email address.
  // Until then they render as inactive placeholders.
  github: null as string | null, // e.g. "https://github.com/shreyakanchan"
  linkedin: null as string | null, // e.g. "https://www.linkedin.com/in/shreya-kanchan"
  email: null as string | null, // e.g. "shreya@example.com"
};

export const featuredHighlights = [
  {
    label: "Top 7",
    detail: "ENIGMA Hackathon",
    // TODO: confirm the exact ENIGMA edition, then set it here (e.g. "ENIGMA 4.0").
    edition: "Edition to be confirmed",
    href: "#achievements",
  },
  {
    label: "Top 12",
    detail: "Hackanova",
    edition: "Project & year to be added",
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
    title: "Secure Patient Document Transmission",
    description:
      "A project focused on securely transmitting patient documents using cryptographic techniques to protect sensitive information and improve data confidentiality.",
    // TODO: add a short "how it works" paragraph once finalized.
    details:
      "More detail on the encryption flow and architecture will be added here once the project write-up is finalized.",
    // TODO: add technology tags only where confirmed.
    tags: [] as string[],
    image: projectSecurity,
    imageAlt: "Concept visual of an encrypted patient document protected by a glowing padlock",
    // TODO: paste the real repository and demo URLs when available.
    links: {
      github: null as string | null,
      demo: null as string | null,
    },
  },
  {
    title: "Portable Fingerprint Attendance System",
    description:
      "A portable attendance system that uses fingerprint authentication to record attendance. The project involved fingerprint sensor integration and connected hardware components.",
    details:
      "The system pairs an ESP32 microcontroller with an R307 fingerprint sensor to enroll and verify users on the spot, with attendance data pushed to ThingSpeak for logging and visualization.",
    tags: ["ESP32", "R307 Fingerprint Sensor", "ThingSpeak"],
    image: projectFingerprint,
    imageAlt: "ESP32 microcontroller wired to an R307 fingerprint sensor module on a breadboard",
    links: {
      github: null as string | null,
      demo: null as string | null,
    },
  },
  {
    title: "Aqua Cleaning Robot",
    description:
      "A robotics project focused on developing a robot for water-surface cleaning and supporting cleaner aquatic environments.",
    details:
      "The robot operates on the water surface to collect floating waste, aimed at supporting cleaner ponds and lakes. Component details will be added once finalized.",
    // TODO: add technology tags only after confirming the actual components used.
    tags: [] as string[],
    image: projectAquaRobot,
    imageAlt: "Concept render of a water-surface cleaning robot collecting floating debris",
    links: {
      github: null as string | null,
      demo: null as string | null,
    },
  },
];

export const achievements = [
  {
    position: "Top 7",
    title: "ENIGMA Hackathon",
    // TODO: confirm the exact edition before sharing this portfolio widely.
    edition: "Edition to be confirmed",
    description:
      "Participated in ENIGMA and achieved a Top 7 position with my team — a result built on late-night debugging, quick decision-making, and tight teamwork.",
    year: "Year to be added", // TODO
  },
  {
    position: "Top 12",
    title: "Hackanova",
    edition: "Hackathon achievement",
    // TODO: add the project/team name and year.
    description:
      "My team and project reached the Top 12 at Hackanova. Project name and year will be added here.",
    year: "Year to be added", // TODO
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
    { src: eventLeads.url, alt: "ENIGMA 5.0 event leads Siddhi Naikare and Shreya Kanchan" },
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
