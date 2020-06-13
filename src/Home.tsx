import React from "react";

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 text-center text-xl">
      <div className="col-span-3">
        Edwin is a New York City software developer
      </div>
      <a
        className="underline text-blue-600"
        href="https://github.com/edzh"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a
        className="underline text-blue-600"
        href="https://www.linkedin.com/in/edwin-zhou-468261116/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="underline text-blue-600"
        href="https://twitter.com/edwzh"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </div>
  );
};

export default Home;
