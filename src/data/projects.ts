/**
 * All portfolio content lives here — edit this file to change the work.
 * Images are ES6 imports from src/assets so the bundler can optimize them.
 */
import studio from "@/assets/studio.jpg";
import FrameDD from "@/assets/FrameDD.jpg";
import SSD_cover_5 from "@/assets/SSD/SSD_cover_5.webp";
import AirSensor_A from "@/assets/Air-Sensor/AirSensor_A.webp";


export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  services: string[];
  intro: string;
  description: string;
  cover: string;
  gallery: string[];
  credits: { role: string; name: string }[];
};

export const projects: Project[] = [
  {
    slug: "Vanta SSD no-1",
    title: "NO-1 SSD",
    client: "Personal Project",
    category: "Tech Product",
    year: "2026",
    services: ["CGI", "Product Film", "Art Direction"],
    intro: "A product film exploring high-performance external storage, built not as sterile hardware, but as an intimate architectural extension of human memory and daily life.",
    description:
      "We built the Vanta SSD as a single physically accurate asset and explored the ideas surrounding it through CGI, speed, portability, movement, freedom, and creativity. Each setting offers a different perspective on the same object, allowing the film to move beyond conventional product presentation and explore how technology can exist within the different rhythms of human life.",
    cover: SSD_cover_5,
    gallery: [SSD_cover_5],
    credits: [
      { role: "Creative Direction", name: "M. Aldana" },
      { role: "Lead Lighting", name: "S. Vireo" },
      { role: "Look Development", name: "K. Ohara" },
      { role: "Edit & Grade", name: "Orbit Post" },
    ],
  },
  {
    slug: "halo-air",
    title: "AERA / X1",
    client: "Personal Project",
    category: "Tech Product",
    year: "2026",
    services: ["CGI", "Product Film", "Art Direction"],
    intro: "An exploded-view film explaining eleven components in forty seconds.",
    description:
      "The project explores how an object designed to measure something invisible can become a tangible part of everyday life. The film translates air quality into a visual language of precision, atmosphere and movement, presenting the sensor not simply as a technical instrument, but as a quiet presence within the environments we inhabit.",
    cover: AirSensor_A,
    gallery: [AirSensor_A, FrameDD],
    credits: [
      { role: "Creative Direction", name: "K. Ohara" },
      { role: "Animation", name: "S. Vireo" },
      { role: "Sound", name: "Field & Frame" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNeighbours = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  const len = projects.length;
  return {
    prev: projects[(i - 1 + len) % len] as Project,
    next: projects[(i + 1) % len] as Project,
  };
};

export const studioImage = FrameDD;