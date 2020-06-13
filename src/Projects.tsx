import React from "react";
import { Link } from "react-router-dom";
import goflyfirst from "./img/goflyfirst.jpg";
import chipo from "./img/chipo.jpg";
import aftercaremanager from "./img/aftercaremanager4.jpg";

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="grid-rows-3 text-center border rounded bg-white">
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
        <div className="border-b">
          <img src={goflyfirst} alt="" />
        </div>
        <div className="text-left px-4 py-2 grid grid-cols-3 gap-2">
          <div>
            React
          </div>
          <div>
            Express
          </div>
          <div>
            TailwindCSS
          </div>
        </div>
      </div>
      <div className="grid-rows-3 text-center border rounded bg-white">
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
        <div className="text-left px-4 py-2 grid grid-cols-3">
          <div>
            React
          </div>
          <div>Redux</div>
          <div>
            Express
          </div>
          <div>
            TailwindCSS
          </div>
          <div>MongoDB</div>
          <div>D3</div>
        </div>
      </div>
      <div className="grid-rows-3 text-center border rounded bg-white">
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
        <div className="text-left px-4 py-2 grid grid-cols-3">
          <div>TypeScript</div>
          <div>
            React
          </div>
          <div>
            Express
          </div>
          <div>
            TailwindCSS
          </div>
          <div>WebSocket</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
