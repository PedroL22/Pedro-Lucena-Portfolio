import { Skill } from '../Skill'
import './styles.css'

export const Grid1 = () => {
  return (
    <>
      <h2>Front-End Development</h2>

      <div className='grid'>
        <Skill skillName='React 19' />
        <Skill skillName='Next.js 15' />
        <Skill skillName='TypeScript' />
        <Skill skillName='Tailwind CSS' />
        <Skill skillName='TanStack Query' />
        <Skill skillName='Zustand' />
      </div>
    </>
  )
}
