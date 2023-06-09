import { Skill } from '../Skill'
import './styles.css'

export const Grid1 = () => {
  return (
    <>
      <h2>Front-End Development</h2>
      <div className='grid'>
        <Skill
          skillName='HTML'
          levelOfSkill='experienced'
        />
        <Skill
          skillName='CSS'
          levelOfSkill='experienced'
        />
        <Skill
          skillName='javaScript'
          levelOfSkill='intermediate'
        />
        <Skill
          skillName='react'
          levelOfSkill='intermediate'
        />
        <Skill
          skillName='tailwind'
          levelOfSkill='experienced'
        />
        <Skill
          skillName='bootstrap'
          levelOfSkill='experienced'
        />
      </div>
    </>
  )
}
