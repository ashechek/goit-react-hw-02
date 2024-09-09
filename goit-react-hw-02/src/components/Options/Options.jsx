import s from "./Options.module.css";

const Options = ({ updFeedbackFu, totalFeedback, resetFeedbackFu }) => {
  return (
    <div className={s.optionsSection}>
      <button className={s.button} onClick={() => updFeedbackFu("good")}>
        Good
      </button>

      <button className={s.button} onClick={() => updFeedbackFu("neutral")}>
        Neutral
      </button>

      <button className={s.button} onClick={() => updFeedbackFu("bad")}>
        Bad
      </button>

      {totalFeedback > 0 ? (
        <button className={s.button} onClick={resetFeedbackFu}>
          Reset
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Options;
