import { Skill } from '../Skill'

export const Grid2 = () => {
  return (
    <>
      <h2>Back-End Development</h2>

      <div className='grid'>
        <Skill skillName='Node.js' />
        <Skill skillName='Bun' />
        <Skill skillName='Hono' />
        <Skill skillName='tRPC' />
        <Skill skillName='Prisma' />
      </div>
    </>
  )
}
