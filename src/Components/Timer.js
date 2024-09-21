import React, { useState, useEffect } from "react";

const Timer = ({ timeZone = "America/New_York" }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const timeString = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZoneName: "short",
    // timeZone: timeZone,
  }).format(currentTime);

  return <div style={timerStyle}>{timeString}</div>;
};

const timerStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "#fff",
  padding: "10px",
  borderRadius: "8px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  fontSize: "1.2rem",
};

export default Timer;
