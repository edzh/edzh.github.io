import React from "react";

const Home: React.FC = () => {
  return (
    <div className="grid h-64 grid-rows-7 gap-2 text-center">
      <div className="row-start-4 text-3xl">
        Edwin is a New York City <span className="font-bold">TypeScript</span>{" "}
        developer
      </div>
      <div className="grid grid-cols-5 grid-start-2 row-start-7">
        <div className="col-start-2 col-span-3 grid-cols-3 grid">
          <div>
            <a
              className="hover:text-blue-400 text-blue-600"
              href="https://github.com/edzh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div>
            <a
              className="hover:text-blue-400 text-blue-600"
              href="https://www.linkedin.com/in/edwin-zhou-468261116/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              className="hover:text-blue-400 text-blue-600"
              href="https://twitter.com/edwzh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
