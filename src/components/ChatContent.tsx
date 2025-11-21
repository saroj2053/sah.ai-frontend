import React, { useState } from "react";
import { LuMenu, LuSend } from "react-icons/lu";
import "../assets/css/chatcontent.css";
import aiIcon from "../assets/sahAI-logo.svg";

const ChatContent: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <main className="main-content">
      <header className="top-nav">
        <div className="is-flex is-align-items-center">
          <button className="sidebar-btn is-hidden-tablet mr-2">
            <LuMenu size={24} />
          </button>
          <span className="title is-4 mb-0 has-text-grey-dark mr-3">SahAI</span>
        </div>

        <div className="is-flex is-align-items-center">
          <div className="pro-badge">PRO</div>
          <figure className="image is-32x32">
            <img
              className="is-rounded"
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Silky"
              alt="User"
              style={{ border: "1px solid #ddd" }}
            />
          </figure>
        </div>
      </header>

      <div className="chat-scroll-area">
        <div className="message-row user">
          <div className="user-bubble">hello</div>
        </div>

        <div className="message-row sahai">
          <div className="sahai-row">
            <div className="sahai-icon mt-1">
              <img src={aiIcon} alt="" />
            </div>

            <div style={{ flex: 1 }}>
              <div
                className="notification is-light mb-4"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderLeft: "3px solid #ccc",
                }}
              >
                <p className="is-size-7 has-text-grey">Thinking...</p>
              </div>

              <div className="content">
                <p>Hello! It is great to connect with you.</p>
                <p className="has-text-dark mt-2">
                  Additional response.. To do: Get chat content from backend and
                  render here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="input-wrapper">
        <div className="sahai-input-box shadow-sm">
          <input
            type="text"
            className="input-field"
            placeholder="Ask SahAI anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button className="tool-btn" title="Send Message">
            <LuSend size={20} />
          </button>
        </div>
        <p className="has-text-centered mt-2 has-text-grey-light is-size-7">
          <a
            href="#"
            className="has-text-grey-light"
            style={{ textDecoration: "underline" }}
          >
            Your privacy and sahAI's terms
          </a>
        </p>
      </div>
    </main>
  );
};

export default ChatContent;
