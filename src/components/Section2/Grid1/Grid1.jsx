import React from 'react';
import Skill from '../Skill/Skill';
import './styles.css';

function Grid1() {
  return (
    <>
      <h2>Frontend Development</h2>
      <div className="grid">
        <Skill skillName="HTML" levelOfSkill="experienced" />
        <Skill skillName="CSS" levelOfSkill="experienced" />
        <Skill skillName="javaScript" levelOfSkill="intermediate" />
        <Skill skillName="react" levelOfSkill="intermediate" />
        <Skill skillName="bootstrap" levelOfSkill="experienced" />
      </div>
    </>
  );
}

export default Grid1;
