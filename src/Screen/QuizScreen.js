import React, { useEffect, useState } from "react";
import { fbGet } from "../Config/firebaseMethod";

export default function QuizScreen() {
  const [quizData, setQuizData] = useState([]);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    // Fetch quiz data from Firebase
    fbGet("QuizDetails")
      .then((data) => {
        // Update the state with the retrieved data
        setQuizData(data);

        // Start the timer when data is fetched
        if (data.length > 0) {
          const quiz = data[0]; // Assuming you want to display the first quiz
          const quizEndTime = quiz.TimeDuration * 1000 + Date.now(); // Calculate end time in milliseconds
          startCountdownTimer(quizEndTime);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const startCountdownTimer = (endTime) => {
    // Calculate initial remaining time
    const initialRemainingTime = Math.max(0, endTime - Date.now());

    // Update the remaining time in state
    setRemainingTime(initialRemainingTime);

    // Start the timer
    const timerInterval = setInterval(() => {
      const updatedRemainingTime = Math.max(0, endTime - Date.now());

      if (updatedRemainingTime === 0) {
        // Timer has reached zero, you can handle timer completion here
        clearInterval(timerInterval);
      }

      // Update the remaining time
      setRemainingTime(updatedRemainingTime);
    }, 1000); // Update every second
  };

  return (
    <div>
      <div>
        {/* Display quiz data here */}
        {quizData.map((quiz, index) => (
          <div key={index}>
            <h2>{quiz.QuizName}</h2>
            <p>Time Duration: {quiz.TimeDuration} seconds</p>
            <p>Remaining Time: {Math.floor(remainingTime / 1000)} seconds</p>
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}
