import React, { useState, useEffect } from "react";

const WelcomeMessage = () => {

    const [message, setMessage] = useState("");

  useEffect(() => {
    const currentTime = new Date(); 
    const hours = currentTime.getHours(); 
    let newMessage = "";

    if (hours < 12) {
      newMessage = "Goedemorgen!";
    } else if (hours < 18) {
      newMessage = "Goedemiddag!";
    } else {
      newMessage = "Goedenavond!";
    }

    setMessage(newMessage);
  }, []); 

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default WelcomeMessage;
