import React from "react";
import {NavLink} from "react-router-dom";
import * as Icons from "../../icons";
import sidebar from "../../routes/sidebar";
import SidebarSubmenu from "./SidebarSubmenu";
import {handlePermissions} from "../../utils/abilityPermissions";

function Icon({icon, ...props}) {
  const IconEl = Icons[icon];
  return <IconEl {...props} />;
}

const Routes = () => {
  return;
};

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="/"
      >
        Cuan Maker System
      </a>
      <ul className="mt-6">
        {sidebar.map((route) =>
          route.routes
            ? handlePermissions().map(
                (data) =>
                  data.includes(route.permission_group) && (
                    <SidebarSubmenu route={route} key={route.id} />
                  )
              )
            : handlePermissions().map(
                (data) =>
                  data.includes(route.permission_group) && (
                    <li className="relative px-6 py-3" key={route.id}>
                      <NavLink
                        to={route.path}
                        className={({isActive}) =>
                          `${
                            isActive ? "text-gray-800 dark:text-gray-100" : ""
                          } inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`
                        }
                        children={({isActive}) => {
                          return (
                            <>
                              {isActive && (
                                <span
                                  className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                                  aria-hidden="true"
                                ></span>
                              )}
                              <Icon
                                className="w-5 h-5"
                                aria-hidden="true"
                                icon={route.icon}
                              />
                              <span className="ml-4">{route.name}</span>
                            </>
                          );
                        }}
                      />
                    </li>
                  )
              )
        )}
      </ul>
    </div>
  );
}

export default SidebarContent;
