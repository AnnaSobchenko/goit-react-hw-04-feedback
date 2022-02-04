const FeedbackOptions = ({
  countGoodFeedback,
  countNeutralFeedback,
  countBadFeedback,
}) => (
  <>
    <button onClick={countGoodFeedback} className="button" type="button">
      Good
    </button>
    <button onClick={countNeutralFeedback} className="button" type="button">
      Neutral
    </button>
    <button onClick={countBadFeedback} className="button" type="button">
      Bad
    </button>
  </>
);

export default FeedbackOptions;
