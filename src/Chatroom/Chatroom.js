import "../Styles/Chat.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:4000");

function Chatroom() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="ChatApp">
      {!showChat ? (
        <div className="joinChatContainer">
          <h1 style={{ marginBottom: "25px" }}>Join a chat</h1>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Patient ID"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <button
            style={{ marginTop: "20px" }}
            className="Joinbutton"
            onClick={joinRoom}
          >
            Get Support
          </button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Chatroom;
