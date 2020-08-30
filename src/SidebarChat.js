import React, { useEffect, useState } from "react";
import "./sidebarchat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter the name of the chat ");
    if (roomName) {
      //do database
    }
  };
  return !addNewChat ? (
    <div className="SidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message ...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="SidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
