import { useState } from "react";
import getResponse from "../server/ai-chat";
import Chat from "./Chat.jsx";
import UserInput from "./UserInput.jsx";
import "../styles/App.css";

function App() {
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to get AI response
  async function handleResponse(userInput) {
    setConversation((prevConversation) => [
      ...prevConversation,
      { sender: "User", message: userInput },
    ]);

    // Set loading to true BEFORE calling API
    setIsLoading(true);

    try {
      const response = await getResponse(userInput); // Call the imported getResponse

      setConversation((prevConversation) => [
        ...prevConversation,
        { sender: "AI", message: response },
      ]);
      setIsLoading(true);
    } catch (error) {
      console.error("Error fetching AI response:", error); // Handle error if any
    }

    setIsLoading(false);
  }
  return (
    <div className="chatbot-containter">
      <h1>Let's Talk MMA</h1>
      <Chat conversation={conversation} />
      <UserInput getAI={handleResponse} loading={isLoading} />
    </div>
  );
}

export default App;
