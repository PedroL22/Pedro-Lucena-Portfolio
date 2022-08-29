import React from 'react';
import Skill from '../Skill/Skill';
import './styles.css';

function Grid1() {
  return (
    <>
      <h2>Frontend Development</h2>
      <div className="grid">
        <Skill className="skills" skillName="sla meu" levelOfSkill="ruim" />
        <Skill className="skills" skillName="sla meu" levelOfSkill="ruim" />
        <Skill className="skills" skillName="sla meu" levelOfSkill="ruim" />
        <Skill className="skills" skillName="sla meu" levelOfSkill="ruim" />
        <Skill className="skills" skillName="sla meu" levelOfSkill="ruim" />
      </div>
    </>
  );
}

export default Grid1;
