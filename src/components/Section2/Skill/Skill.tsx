import React from "react";
import "./styles.css";
import Verified from "../../../assets/images/verified.png";

interface text {
  skillName: string;
  levelOfSkill: string;
}

function Skill({ skillName, levelOfSkill }: text) {
  return (
    <div>
      <div className="skill-title">
        <img src={Verified} alt="" />
        <h3>{skillName}</h3>
      </div>
      <p>{levelOfSkill}</p>
    </div>
  );
}

export default Skill;
