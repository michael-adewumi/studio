import projectTest from "@/assets/project-test.webp";
import projectTest2 from "@/assets/project-test2.webp";
import projectCrest from "@/assets/project-crest.svg";
import projectHaven from "@/assets/project-haven.svg";

/**
 * Featured Engineering Project (iPOS)
 * Prepared for upcoming detailed case-study integration.
 */
export const featuredProject = {
  id: "ipos",
  title: "iPOS — Business Management & Sales Platform",
  category: "Engineering · Product Development",
  role: "Contributed to frontend development of the invoice and business-management workflows, including inventory, payments, customer handling and role-based permissions.",
  description:
    "A comprehensive business management platform handling invoicing, inventory tracking, customer management, and payment processing. Built for teams with role-based permissions and multi-workflow support.",
  contributions: [
    "Invoice management & issuance",
    "Inventory tracking",
    "Customer assignment to invoices",
    "Payment history & payment links",
    "Tax & discount options",
    "Invoice delivery",
    "Role-based permissions",
  ],
  technologies: ["Vue", "TypeScript", "Pinia", "Axios", "REST APIs"],
  hasCaseStudy: true,
};

/**
 * Client & Concept Projects
 */
export const projects = [
  {
    id: "rapidflow",
    title: "RapidFlow",
    description:
      "A service business website with responsive design, clear service presentation, and conversion-focused architecture.",
    category: "Website",
    image: projectTest,
    technologies: ["Vue", "Tailwind CSS"],
    demoUrl: "https://rapidflow-psi.vercel.app/",
    hasCaseStudy: true,
  },
  {
    id: "solidbuild",
    title: "SolidBuild Construction",
    description:
      "A professional construction company website with project showcases and a service-focused layout.",
    category: "Website",
    image: projectTest2,
    technologies: ["Vue", "Tailwind CSS"],
    demoUrl: "https://construction-demo-sigma.vercel.app/",
    hasCaseStudy: true,
  },
  {
    id: "crest-roofing",
    title: "Crest Roofing",
    description:
      "A conversion-focused website for a roofing contractor with clear service structure and lead generation.",
    category: "Website",
    image: projectCrest,
    technologies: ["Vue", "Tailwind CSS"],
    demoUrl: null,
  },
  {
    id: "haven-interiors",
    title: "Haven Interiors",
    description:
      "A portfolio-style website for an interior design studio showcasing craftsmanship and driving enquiries.",
    category: "Website",
    image: projectHaven,
    technologies: ["Vue", "Tailwind CSS"],
    demoUrl: null,
  },
];
