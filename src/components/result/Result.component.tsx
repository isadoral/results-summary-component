import "./Result.style.css";
const Result = () => {
  return (
    <div className="result">
      <h3>Your Result</h3>
      <div className="circle">
        <h1>76</h1>
        <h4>of 100</h4>
      </div>
      <div className="textdiv">
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
