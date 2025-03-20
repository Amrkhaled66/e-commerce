import React from 'react';

const NavLink = ({ title, icon }) => {
  return (
    <li className="flex cursor-pointer items-center gap-x-2">
      <span>{icon}</span>
      {title}
    </li>
  );
};

export default NavLink; 