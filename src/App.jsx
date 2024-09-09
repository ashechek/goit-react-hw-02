import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [obj, setObj] = useState(() => {
    const storageData = window.localStorage.getItem("obj");

    if (storageData !== null) {
      return JSON.parse(storageData);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("obj", JSON.stringify(obj));
  }, [obj]);

  const updateFeedback = (feedbackType) => {
    setObj({
      ...obj,
      [feedbackType]: obj[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setObj({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = obj.good + obj.neutral + obj.bad;
  const goodPercent = Math.round((obj.good / totalFeedback) * 100);

  return (
    <>
      <Description />

      <Options
        updFeedbackFu={updateFeedback}
        resetFeedbackFu={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          goodCom={obj.good}
          badCom={obj.bad}
          neutralCom={obj.neutral}
          totalFeedback={totalFeedback}
          goodPercent={goodPercent}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
