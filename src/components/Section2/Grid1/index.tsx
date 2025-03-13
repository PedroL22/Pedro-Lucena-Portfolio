import { Skill } from '../Skill'
import './styles.css'

export const Grid1 = () => {
  return (
    <>
      <h2>Front-End Development</h2>

      <div className='grid'>
        <Skill skillName='HTML' />
        <Skill skillName='CSS' />
        <Skill skillName='javaScript' />
        <Skill skillName='typeScript' />
        <Skill skillName='react' />
        <Skill skillName='react native' />
        <Skill skillName='next JS' />
        <Skill skillName='Redux' />
        <Skill skillName='Zustand' />
        <Skill skillName='tailwind' />
        <Skill skillName='Material UI' />
        <Skill skillName='Styled C.' />
        <Skill skillName='bootstrap' />
      </div>
    </>
  )
}
