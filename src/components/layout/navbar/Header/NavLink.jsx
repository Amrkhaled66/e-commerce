import React from "react";

import { Link } from "react-router-dom";
const NavLink = ({ title, icon, to }) => {
  return (
    <Link to={to}>
      <li className="flex cursor-pointer items-center gap-x-2">
        <span>{icon}</span>
        {title}
      </li>
    </Link>
  );
};

export default NavLink;
