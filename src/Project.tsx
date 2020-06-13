import React, { useState, useEffect, useRef } from "react";

interface Props {
  name: string;
  website: string;
  images: string[];
  technologies: string[];
}

const Project: React.FC<Props> = ({ name, website, images, technologies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const imgRef = useRef<null | HTMLImageElement>(null);
  const width = imgRef?.current?.offsetWidth;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentIndex, images.length]);

  return (
    <div className="grid-rows-3 text-center border rounded bg-white">
      <div className="border-b">
        <a
          className="leading-loose hover:text-blue-400 text-blue-600"
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </div>
      <div
        className="flex relative overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {images.map((image) => (
          <img
            className="transform transition duration-1000 ease-in-out"
            ref={imgRef}
            style={{
              transform: `translate(${-(width ? width : 0) * currentIndex}px)`,
            }}
            src={image}
            alt=""
          />
        ))}
        {images.length > 1 && (
          <>
            <div
              className={`transition-all duration-200 ease-in-out absolute h-full bg-gray-400 cursor-pointer ${
                hover ? "opacity-25" : "opacity-0"
              } w-10`}
              onClick={() =>
                setCurrentIndex(mod(currentIndex - 1, images.length))
              }
            ></div>
            <div
              className={`transition-all duration-200 ease-in-out absolute h-full bg-gray-400 cursor-pointer ${
                hover ? "opacity-25" : "opacity-0"
              } w-10 right-0`}
              onClick={() =>
                setCurrentIndex(mod(currentIndex + 1, images.length))
              }
            ></div>
          </>
        )}
      </div>
      <div className="text-left px-4 py-2 grid grid-cols-3">
        {technologies.map((t) => (
          <div>{t}</div>
        ))}
      </div>
    </div>
  );
};

export default Project;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}
