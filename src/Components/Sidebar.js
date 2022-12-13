import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Sidebar = ({ closeId, side }) => {
  return (
    <div className="SideBar" id={closeId}>
      <div className="sidebarItems">
        <p>Collections</p>
        {side.map((tab) => {
          return (
            <NavLink to={"/" + tab.text} key={uuidv4()}>
              <span>
                <img src={tab.image} alt={tab.alt} title={tab.title} />
                <p>{tab.text}</p>
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
