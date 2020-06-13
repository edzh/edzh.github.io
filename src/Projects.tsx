import React from "react";
import { Link } from "react-router-dom";
import goflyfirst from "./img/goflyfirst.jpg";
import chipo from "./img/chipo.jpg";
import aftercaremanager from "./img/aftercaremanager4.jpg";

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="grid-rows-2 text-center border rounded bg-white">
        <div className="border-b">
          <a
            className="underline leading-loose text-blue-600"
            href="https://www.goflyfirst.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go Fly First
          </a>
        </div>
        <div>
          <img src={goflyfirst} alt="" />
        </div>
      </div>
      <div className="grid-rows-2 text-center border rounded bg-white">
        <div className="border-b">
          <a
            className="underline leading-loose text-blue-600"
            href="https://aftercaremanage.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aftercare Manager
          </a>
        </div>
        <div>
          <img src={aftercaremanager} alt="" />
        </div>
      </div>
      <div className="grid-rows-2 text-center border rounded bg-white">
        <div className="border-b">
          <a
            className="underline leading-loose text-blue-600"
            href="https://chipo.edwinzhou.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chinese Poker/Big Two
          </a>
        </div>
        <div>
          <img src={chipo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
