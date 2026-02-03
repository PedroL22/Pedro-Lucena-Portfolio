import { Skill } from '../Skill'

export const Grid2 = () => {
  return (
    <>
      <h2 className='py-[30px] font-normal'>Back-End Development</h2>

      <div className='grid grid-cols-2 justify-around text-left text-[15px]'>
        <Skill skillName='Node.js' />
        <Skill skillName='Bun' />
        <Skill skillName='Hono' />
        <Skill skillName='tRPC' />
        <Skill skillName='Prisma' />
      </div>
    </>
  )
}
