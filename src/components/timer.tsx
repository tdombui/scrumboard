import React, { useState, useEffect } from "react";
import "./components.css";

const Timer: React.FC = () => {
  // const countdownStartDate = new Date().getTime();  // Use the current date
  const countdownStartDate = new Date("2024-09-21T12:21:00Z").getTime();
  const countdownDuration = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
  const targetDate = new Date(countdownStartDate + countdownDuration);

  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timePassed = currentTime - countdownStartDate;
      setElapsedTime(timePassed);
    }, 11); // Update every 10 milliseconds

    return () => clearInterval(interval);
  }, [countdownStartDate]);

  const timeRemaining = countdownDuration - elapsedTime;

  const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);
  const milliseconds = Math.floor(timeRemaining % 1000);
  const paddedMilliseconds = milliseconds.toString().padStart(3, "0");

  // Extract date components
  const targetDayOfWeek = targetDate.toLocaleString("default", {
    weekday: "long",
  });
  const targetDay = targetDate.getDate();
  const targetMonth = targetDate.toLocaleString("default", { month: "short" });
  const targetYear = targetDate.getFullYear();
  const targetTime = targetDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="timer-container">
      <div
        className="text-emerald-50 flex flex-col justify-center"
        suppressHydrationWarning
        style={{
          fontFamily: "SilkScreen",
          userSelect: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <p className="text-xl">
          <a
            className="text-emerald-50 text-lg "
            style={{ fontFamily: "Inter" }}
          >
            sprint:
          </a>{" "}
          {days}
          <a className="text-emerald-50" style={{ fontFamily: "Inter" }}>
            d
          </a>{" "}
          {hours}
          <a className="text-emerald-50" style={{ fontFamily: "Inter" }}>
            h
          </a>{" "}
          {minutes}
          <a className="text-emerald-50" style={{ fontFamily: "Inter" }}>
            m
          </a>{" "}
          {seconds}
          <a className="text-emerald-50" style={{ fontFamily: "Inter" }}>
            s{" "}
          </a>{" "}
          {paddedMilliseconds}
          <a className="text-emerald-50" style={{ fontFamily: "Inter" }}>
            ms
          </a>
        </p>
      </div>

      <div className="target-date-container" style={{ userSelect: "none" }}>
        <a
          className="text-emerald-50 text-lg mr-2"
          style={{ fontFamily: "Inter" }}
        >
          next update:{" "}
        </a>
        <span className="date-component mr-2">{targetDayOfWeek}</span>
        <span className="date-component mr-2">{targetMonth}</span>
        <span className="date-component mr-2">{targetDay},</span>
        <span className="date-component mr-2">{targetYear}</span>
        <span className="date-component">at {targetTime}</span>
      </div>
    </div>
  );
};

export default Timer;
