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

  countFeedback = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
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
              optionsState={Object.keys(this.state)}
              countFeedback={this.countFeedback}
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
