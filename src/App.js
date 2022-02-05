import { Component } from "react";
import "./App.scss";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/shared/Section";
import Statistics from "./Components/Statistics/Statistics";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFeedback = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };
  countNeutralFeedback = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };
  countBadFeedback = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <header className="AppHeader">
          <Section title={"Please leave feedback"}>
            <FeedbackOptions
              countGoodFeedback={this.countGoodFeedback}
              countNeutralFeedback={this.countNeutralFeedback}
              countBadFeedback={this.countBadFeedback}
            />
          </Section>
        </header>
        <main className="main">
          {(this.countTotalFeedback() && (
            <Section title={"Statistics"}>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                countTotalFeedback={this.countTotalFeedback}
                countPositiveFeedbackPercentage={
                  this.countPositiveFeedbackPercentage
                }
              />
            </Section>
          )) || <h2 className="Statistics">There is no feedback</h2>}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default App;
