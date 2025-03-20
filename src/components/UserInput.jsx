import { useState } from "react";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../styles/UserInput.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function UserInput(props) {
  const [userInput, setUserInput] = useState("");

  function handleChange(event) {
    setUserInput(event.target.value);
  }
  return (
    <div className="input-container">
      <input
        name="userInput"
        className="userInput"
        onChange={handleChange}
        type="text"
        placeholder="Enter your message..."
        autoComplete="off"
        value={userInput}
      />
      <button
        className="inputBtn"
        onClick={() => {
          props.getAI(userInput);
          setUserInput("");
          console.log("clicked");
        }}
      >
        {props.loading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress
              size={25}
              sx={{
                marginLeft: "7px",
                "& .MuiCircularProgress-circle": { stroke: "#8e1616" },
              }}
            />
          </Box>
        ) : (
          <ArrowForwardIcon
            sx={{
              backgroundColor: "#8e1616",
              borderRadius: "50%",
              marginTop: "3px",
            }}
          />
        )}
      </button>
    </div>
  );
}

export default UserInput;
