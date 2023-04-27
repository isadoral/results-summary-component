import Result from "../result/Result.component";
import Summary from "../summary/Summary.component";
import "./Full.style.css";
const Full = () => {
  return (
    <div className="fullScreen">
      <Result />
      <Summary />
    </div>
  );
};

export default Full;
