import { useState } from "react";
import getResponse from "../server/ai-chat";
import Chat from "./chat";
import UserInput from "./UserInput";
import "../styles/App.css";

function App() {
  const [conversation, setConversation] = useState([]);

  // Function to get AI response
  async function handleResponse(userInput) {
    setConversation((prevConversation) => [
      ...prevConversation,
      { sender: "User", message: userInput },
    ]);

    try {
      const response = await getResponse(userInput); // Call the imported getResponse

      setConversation((prevConversation) => [
        ...prevConversation,
        { sender: "AI", message: response },
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error); // Handle error if any
    }
  }
  return (
    <div className="chatbot-containter">
      <h1>Let's Talk MMA</h1>
      <Chat conversation={conversation} />
      <UserInput getAI={handleResponse} />
    </div>
  );
}

export default App;
