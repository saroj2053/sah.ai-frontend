import React from "react";
import Sidebar from "../components/Sidebar";
import ChatContent from "../components/ChatContent";

const Chat: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <ChatContent />
    </div>
  );
};

export default Chat;
