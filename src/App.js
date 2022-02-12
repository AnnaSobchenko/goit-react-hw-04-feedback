import { useEffect, useState } from "react";
import "./App.scss";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/shared/Section";
import Statistics from "./Components/Statistics/Statistics";
import PropTypes from "prop-types";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleCountFeedback = (e) => {
    const { name } = e.target;
    console.log(name);
    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;

      case "neutral":
        setNeutral((prev) => prev + 1);
        break;

      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Number(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad)) || 0;
  };

  return (
    <div className="App">
      <header className="AppHeader">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            optionsState={Object.keys({ good, neutral, bad })}
            countFeedback={handleCountFeedback}
          />
        </Section>
      </header>
      <main className="main">
        {(countTotalFeedback() && (
          <Section title={"Statistics"}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={countTotalFeedback}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            />
          </Section>
        )) || <h2 className="Statistics">There is no feedback</h2>}
      </main>
    </div>
  );
};

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default App;
