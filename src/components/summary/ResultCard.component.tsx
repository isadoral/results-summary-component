import { FunctionComponent } from "react";
import { MemoryIcon } from "../../assets/images/icon-memory.svg";
import { ReactionIcon } from "../../assets/images/icon-reaction.svg";
import { VerbalIcon } from "../../assets/images/icon-verbal.svg";
import { VisualIcon } from "../../assets/images/icon-visual.svg";

interface ResultCardProps {
  title: string;
}

const ResultCard: FunctionComponent<ResultCardProps> = ({ title }) => {
  let value;
  let color = "";

  let icon = <MemoryIcon />;

  if (title === "Memory") {
    value = 92;
    color = "yellow";
    icon = <MemoryIcon />;
  } else if (title === "Reaction") {
    value = 80;
    color = "red";
    icon = <ReactionIcon />;
  } else if (title === "Verbal") {
    value = 61;
    color = "green";
    icon = <VerbalIcon />;
  } else {
    value = 72;
    color = "blue";
    icon = <VisualIcon />;
  }

  return (
    <div className={`resultcard ${color}`}>
      <div className="rcdivtitle">
        {icon}
        <h2 className="rctitle">{title}</h2>
      </div>

      <div className="rcvalue">
        {value} <p className="outof"> / 100</p>
      </div>
    </div>
  );
};

export default ResultCard;
