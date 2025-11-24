import React from "react";
import { LuHistory, LuMenu, LuPlus, LuSettings } from "react-icons/lu";
import "../assets/css/sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar is-hidden-mobile">
      <div className="top-section">
        <button className="sidebar-btn mb-4" title="Expand Menu">
          <LuMenu size={24} />
        </button>

        <button className="button is-ghost pl-2">
          <span className="icon">
            <LuPlus size={18} />
          </span>
          <span>New chat</span>
        </button>
      </div>

      <div className="bottom-section mt-auto">
        <div className="recent-history mb-4">
          <p className="heading pl-3 mb-2 has-text-grey">Recent</p>
          <a className="button is-ghost is-fullwidth is-justify-content-start  text-truncate">
            <span className="icon is-small mr-2">
              <LuHistory size={16} />
            </span>
            <span
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Sah AI Introduction
            </span>
          </a>
        </div>

        <button className="sidebar-btn" title="Help">
          <div className="icon-text">
            <span className="icon">
              <span
                className="has-text-weight-bold"
                style={{
                  fontSize: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ?
              </span>
            </span>
          </div>
        </button>
        <button className="sidebar-btn" title="Activity">
          <LuHistory size={20} />
        </button>
        <button className="sidebar-btn" title="Settings">
          <LuSettings size={20} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
