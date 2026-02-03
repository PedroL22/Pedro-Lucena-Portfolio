import { Skill } from '../Skill'

export const Grid1 = () => {
  return (
    <>
      <h2 className='py-[30px] font-normal'>Front-End Development</h2>

      <div className='grid grid-cols-2 justify-around text-left text-[15px]'>
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
