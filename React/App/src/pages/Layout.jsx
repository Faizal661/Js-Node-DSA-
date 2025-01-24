import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex h-fit  ">
          <div className="border-black border-2 m-1 p-2 w-fit pr-12 pt-3 flex flex-col font-serif font-bold gap-1 rounded-md">
            <Link to="/useEffect.example">
              <button>Timer</button><hr />
            </Link>
            <Link to="/To-do">
              <button> To do list </button><hr />
            </Link>
            <Link to="/useEffect.example">
              <button> example 3</button>
            </Link>
          </div>

          <div className="border-black border-2 m-1 p-1  pr-12 pb-16 flex-1 font-mono font-medium gap-1 rounded-md">
            <Outlet />
          </div>
        </div>
      );
}

export default Layout