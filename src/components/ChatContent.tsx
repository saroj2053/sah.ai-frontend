import React, { useState } from "react";
import { LuMenu, LuSend } from "react-icons/lu";
import "../assets/css/chatcontent.css";
import aiIcon from "../assets/sahAI-logo.svg";
import Markdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Message {
  role: "user" | "sahai";
  content: string;
}

const ChatContent: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;
    const userMessage = inputValue;
    setInputValue("");

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/ai/mistral/generate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage }),
        }
      );

      if (!response.body) throw new Error("No response body");

      const text = await response.text();

      setMessages((prev) => [...prev, { role: "sahai", content: text }]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "sahai",
          content:
            "Sorry, I encountered an error connecting to the server. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="main-content">
      <header className="top-nav">
        <div className="is-flex is-align-items-center">
          <button className="sidebar-btn is-hidden-tablet mr-2">
            <LuMenu size={24} />
          </button>
          <span className="title is-4 mb-0 mr-3">SahAI</span>
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
        {messages.length === 0 && (
          <div className="has-text-centered mt-3">
            <h1 className="title is-2 mb-4">Hi, Saroj</h1>
            <h2 className="subtitle is-5">How can I help you today?</h2>
          </div>
        )}

        {messages.map((msg, index) => (
          <div key={index} className={`message-row ${msg.role}`}>
            {msg.role === "user" ? (
              <div className="user-bubble">{msg.content}</div>
            ) : (
              <div className="sahai-row">
                <div className="sahai-icon mt-1">
                  <img src={aiIcon} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="content">
                    <Markdown
                      children={msg.content}
                      components={{
                        code(props) {
                          const { children, className, node, ref, ...rest } =
                            props;
                          const match = /language-(\w+)/.exec(className || "");
                          return match ? (
                            <SyntaxHighlighter
                              {...rest}
                              PreTag="div"
                              children={String(children).replace(/\n$/, "")}
                              language={match[1]}
                              style={vscDarkPlus}
                              showLineNumbers={true}
                              customStyle={{
                                fontSize: "1rem",
                              }}
                            />
                          ) : (
                            <code {...rest} className={className}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {isLoading && (
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
                    borderLeft: "4px solid #ccc",
                  }}
                >
                  <p className="is-size-7 has-text-grey">Thinking...</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="input-wrapper">
        <div className="sahai-input-box shadow-sm">
          <textarea
            className="input-field"
            placeholder="Ask SahAI anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            rows={3}
            onKeyDown={handleKeyDown}
          />

          <button
            className="tool-btn"
            title="Send Message"
            onClick={handleSendMessage}
            disabled={isLoading || inputValue.trim() === ""}
          >
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
