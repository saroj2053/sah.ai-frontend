import React from "react";
import Sidebar from "../components/Sidebar";
import ChatContent from "../components/ChatContent";
import useAuthStore from "../store/AuthStore";

const Chat: React.FC = () => {
  const { authUser } = useAuthStore();
  console.log("Authenticated User:", authUser);
  return (
    <div>
      <Sidebar />
      <ChatContent />
    </div>
  );
};

export default Chat;
