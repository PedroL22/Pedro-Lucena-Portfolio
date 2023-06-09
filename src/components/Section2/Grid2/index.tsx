import { Skill } from '../Skill'

export const Grid2 = () => {
  return (
    <>
      <h2>Back-End Development</h2>
      <div className='grid'>
        <Skill
          skillName='node'
          levelOfSkill='intermediate'
        />
        <Skill
          skillName='python'
          levelOfSkill='experienced'
        />
        <Skill
          skillName='django'
          levelOfSkill='experienced'
        />
        <Skill
          skillName='flask'
          levelOfSkill='basic'
        />
        <Skill
          skillName='postgreSQL'
          levelOfSkill='basic'
        />
        <Skill
          skillName='mongoDB'
          levelOfSkill='basic'
        />
        <Skill
          skillName='mySQL'
          levelOfSkill='basic'
        />
        <Skill
          skillName='sqLite'
          levelOfSkill='intermediate'
        />
      </div>
    </>
  )
}
