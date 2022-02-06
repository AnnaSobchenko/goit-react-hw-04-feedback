const FeeddbackOptions = ({ optionsState, countFeedback }) => {
  return (optionsState.map(el => {     
      return (
        <button
          key={el}
          id={el}
          onClick={countFeedback}
          className="button"
          type="button"
          name={el}
        >
          {el}
        </button>
      );
    }) );
}
 
export default FeeddbackOptions;
