import React from 'react';
import Skill from '../Skill/Skill';

function Grid2() {
  return (
    <>
      <h2>Backend Development</h2>
      <div className="grid">
        <Skill skillName="sla meu" levelOfSkill="ruim" />
        <Skill skillName="sla meu" levelOfSkill="ruim" />
        <Skill skillName="sla meu" levelOfSkill="ruim" />
        <Skill skillName="sla meu" levelOfSkill="ruim" />
        <Skill skillName="sla meu" levelOfSkill="ruim" />
      </div>
    </>
  );
}

export default Grid2;
