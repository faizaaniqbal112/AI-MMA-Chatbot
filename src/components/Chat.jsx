import React, { useEffect, useRef } from "react";
import "../styles/Chat.css";

function Chat({ conversation }) {
  const lastMessageRef = useRef(null); // Ref for the last message

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]); // Run effect when conversation updates

  return (
    <div className="chat-box">
      {conversation.map((message, index) => (
        <div
          key={index}
          className={message.sender === "User" ? "user-message" : "ai-message"}
          ref={index === conversation.length - 1 ? lastMessageRef : null} // Attach ref to last message
        >
          {/* <strong>{message.sender === "User" ? "You: " : "AI: "}</strong> */}
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Chat;
