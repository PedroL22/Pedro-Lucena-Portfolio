import React from 'react';
import Skill from '../Skill/Skill';

function Grid2() {
  return (
    <>
      <h2>Backend Development</h2>
      <div className="grid">
        <Skill skillName="node" levelOfSkill="intermediate" />
        <Skill skillName="python" levelOfSkill="experienced" />
        <Skill skillName="django" levelOfSkill="experienced" />
        <Skill skillName="flask" levelOfSkill="basic" />
        <Skill skillName="postgreSQL" levelOfSkill="basic" />
        <Skill skillName="mongoDB" levelOfSkill="basic" />
        <Skill skillName="mySQL" levelOfSkill="basic" />
        <Skill skillName="sqLite" levelOfSkill="intermediate" />
      </div>
    </>
  );
}

export default Grid2;
