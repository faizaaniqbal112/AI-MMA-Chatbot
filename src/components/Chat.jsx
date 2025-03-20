import React, { useEffect, useRef } from "react";
import "../styles/Chat.css";

function Chat(props) {
  const lastMessageRef = useRef(null); // Ref for the last message

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [props.conversation]); // Run effect when conversation updates

  return (
    <div className="chat-box">
      {props.conversation.map((message, index) => (
        <div
          key={index}
          className={message.sender === "User" ? "user-message" : "ai-message"}
          ref={index === props.conversation.length - 1 ? lastMessageRef : null} // Attach ref to last message
        >
          {/* <strong>{message.sender === "User" ? "You: " : "AI: "}</strong> */}
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Chat;
