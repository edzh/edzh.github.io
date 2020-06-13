import React from "react";

import Project from "./Project";

import goflyfirst from "./img/goflyfirst.jpg";
import chipo from "./img/chipo.jpg";

import aftercaremanager from "./img/aftercaremanager.jpg";
import aftercaremanager2 from "./img/aftercaremanager2.jpg";
import aftercaremanager3 from "./img/aftercaremanager3.jpg";
import aftercaremanager4 from "./img/aftercaremanager4.jpg";

const projects = [
  {
    name: "GoFlyFirst",
    website: "https://www.goflyfirst.com",
    images: [goflyfirst],
    technologies: ["React", "Express", "TailwindCSS"],
  },
  {
    name: "Aftercare Manager",
    website: "https://aftercaremanage.herokuapp.com/",
    images: [aftercaremanager, aftercaremanager2, aftercaremanager3, aftercaremanager4],
    technologies: ["React", "Redux", "Express", "TailwindCSS", "MongoDB", "D3"],
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
        />
      ))}
    </div>
  );
};

export default Projects;
