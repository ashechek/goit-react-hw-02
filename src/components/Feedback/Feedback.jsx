import s from "./Feedback.module.css";

const Feedback = ({
  goodCom,
  badCom,
  neutralCom,
  totalFeedback,
  goodPercent,
}) => {
  return (
    <>
      <ul className={s.list}>
        <li>Good: {goodCom}</li>
        <li>Neutral: {neutralCom}</li>
        <li>Bad: {badCom}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {goodPercent}%</li>
      </ul>
    </>
  );
};

export default Feedback;
