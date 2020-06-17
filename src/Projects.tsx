import React from "react";

import Project from "./Project";

const goflyfirst = "https://edwinzhou.s3.us-east-2.amazonaws.com/goflyfirst.jpg";
const chipo = "https://edwinzhou.s3.us-east-2.amazonaws.com/chipo.jpg";

const aftercaremanager = "https://edwinzhou.s3.us-east-2.amazonaws.com/aftercaremanager.jpg";
const aftercaremanager2 = "https://edwinzhou.s3.us-east-2.amazonaws.com/aftercaremanager2.jpg";
const aftercaremanager3 = "https://edwinzhou.s3.us-east-2.amazonaws.com/aftercaremanager3.jpg";
const aftercaremanager4 = "https://edwinzhou.s3.us-east-2.amazonaws.com/aftercaremanager4.jpg";

const projects = [
  {
    name: "GoFlyFirst",
    website: "https://www.goflyfirst.com",
    images: [goflyfirst],
    technologies: ["React", "Express", "TailwindCSS"],
    description: ""
  },
  {
    name: "Aftercare Manager",
    website: "https://aftercaremanage.herokuapp.com/",
    images: [aftercaremanager, aftercaremanager2, aftercaremanager3, aftercaremanager4],
    technologies: ["React", "Redux", "Express", "TailwindCSS", "MongoDB", "D3"],
    description: ""
  },
  {
    name: "Chinese Poker",
    website: "https://chipo.edwinzhou.com/",
    images: [chipo],
    technologies: [
      "TypeScript",
      "React",
      "Express",
      "TailwindCSS",
      "WebSocket",
    ],
    description: ""
  },
];

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {projects.map((p) => (
        <Project
          name={p.name}
          website={p.website}
          images={p.images}
          technologies={p.technologies}
          description={p.description}
        />
      ))}
    </div>
  );
};

export default Projects;
