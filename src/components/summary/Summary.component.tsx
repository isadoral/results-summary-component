import "./Summary.style.css";
import ResultCard from "./ResultCard.component";
import Button from "../Button.component";
const Summary = () => {
  return (
    <div className="summary">
      <div className="summary-tl-block">
        <h1 className="summary-title">Summary</h1>
      </div>
      <div className="container">
        <ResultCard title="Reaction" />
        <ResultCard title="Memory" />
        <ResultCard title="Verbal" />
        <ResultCard title="Visual" />
      </div>
      <div className="container">
        <Button />
      </div>
    </div>
  );
};

export default Summary;
