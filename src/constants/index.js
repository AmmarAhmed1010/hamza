
import { desc } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  cont,
  plumbing,
  apple,
  ecom,
  tripguide,
  threejs,
   // <-- add this
} from "../assets";

export const navLinks = [

  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Unity 3D Developer",
    icon: web,
  },
  {
    title: "Unreal Engine Expert",
    icon: mobile,
  },
  {
    title: "PlayCanvas Specialist",
    icon: backend,
  },
  {
    title: "Three.js Developer",
    icon: creator,
  },
  {
    title: "VR/AR Experience Creator",
    icon: threejs,
  },
  {
    title: "C++ Programmer",
    icon: backend,
  },
  {
    title: "C# Programmer",
    icon: backend,
  },
  {
    title: "Blender",
    icon: threejs,
  },
];

const technologies = [
  {
    name: "Unity 3D",
    icon: reactjs, // Placeholder - replace with Unity icon if available
  },
  {
    name: "Unreal Engine",
    icon: nodejs, // Placeholder - replace with Unreal icon if available
  },
  {
    name: "C#",
    icon: typescript, // Placeholder
  },
  {
    name: "C++",
    icon: javascript, // Placeholder
  },
  {
    name: "WebGL",
    icon: threejs,
  },
  {
    name: "VR/AR",
    icon: reactjs, // Placeholder
  },
  {
    name: "Blender",
    icon: figma, // Placeholder
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: nodejs, // Placeholder
  },
  {
    name: "MySQL",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Game Developer",
    company_name: "Mumtaz Technologies & Solutions",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Specialized in WebGL, VR, Unreal VR, and Unity 3D development",
      "Developed augmented reality solutions for web applications",
      "Worked with PHP and MySQL for backend development",
      "Created immersive and interactive 3D experiences for clients"
    ],
  },
  {
    title: "VR Developer",
    company_name: "KVTC: Karachi Vocational Training Center",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Feb 2024",
    points: [
      "Designed and developed VR games for autistic children's learning",
      "Created engaging educational content using immersive technologies",
      "Collaborated with educators to develop effective learning tools",
      "Awarded by Senator Abdul Haseeb Khan for contributions"
    ],
  },
  {
    title: "3D Configurator Developer (Remote)",
    company_name: "TC Mobility GmbH, Germany",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2022 - Present",
    points: [
      "Developed advanced 3D product configurators for real-time customization",
      "Created interactive tools for product visualization",
      "Ensured seamless performance across different platforms",
      "Worked remotely with an international team"
    ],
  },
  {
    title: "Game Developer",
    company_name: "Darul Solution",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Dec 2022",
    points: [
      "Developed immersive experiences using WebGL and VR",
      "Worked with Unreal Engine's Blueprint system",
      "Created interactive applications and games",
      "Optimized performance for various platforms"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a game as beautiful as our product, but Hamza proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a game developer who truly cares about their clients' success like Hamza does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Hamza optimized our game, our user engagement increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VR Learning for Autistic Children",
    description:
      "An immersive VR application developed for KVTC to help autistic children learn essential life skills through interactive 3D environments and gamified learning experiences.",
    tags: [
      {
        name: "Unity 3D",
        color: "blue-text-gradient",
      },
      {
        name: "VR",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Replace with actual image
    source_code_link: "#",
    demo_link: "#"
  },
  {
    name: "3D Product Configurator",
    description:
      "Interactive 3D product configurator for TC Mobility GmbH, allowing customers to customize and visualize products in real-time with various options and finishes.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "WebGL",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Replace with actual image
    source_code_link: "#",
    demo_link: "#"
  },
  {
    name: "AR Furniture Visualizer",
    description:
      "Augmented Reality application that lets users visualize furniture in their own space using their smartphone camera before making a purchase decision.",
    tags: [
      {
        name: "ARCore",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Replace with actual image
    source_code_link: "#",
    demo_link: "#"
  },
  {
    name: "Multiplayer VR Game",
    description:
      "Immersive multiplayer VR game featuring cooperative gameplay mechanics, built with Unity and Photon for real-time multiplayer functionality.",
    tags: [
      { name: "playcanvas", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "webgl", color: "pink-text-gradient" },
    ],
    image: tripguide, // Replace with actual screenshot asset
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };