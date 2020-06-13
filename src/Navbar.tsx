import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-3 container mx-auto p-2 px-4">
        <div>
          <Link to="/" className="text-xl font-bold">
            edwin
          </Link>
        </div>
        <div className="grid gap-2 grid-cols-3 col-span-2 my-auto text-center">
          <div className="col-start-2">
            <NavLink activeClassName="text-blue-400" to="/projects">
              Projects
            </NavLink>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
