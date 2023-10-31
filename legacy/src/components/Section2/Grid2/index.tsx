import { Skill } from '../Skill'

export const Grid2 = () => {
  return (
    <>
      <h2>Back-End Development</h2>
      <div className='grid'>
        <Skill skillName='node' />
        <Skill skillName='prisma' />
        <Skill skillName='postgreSQL' />
        <Skill skillName='mongoDB' />
        <Skill skillName='sQLite' />
        <Skill skillName='redis' />
        <Skill skillName='heroku' />
        <Skill skillName='postman' />
      </div>
    </>
  )
}
