import { Skill } from '../Skill'

export const Grid3 = () => {
  return (
    <>
      <h2>DevOps & Architecture</h2>

      <div className='grid'>
        <Skill skillName='Docker' />
        <Skill skillName='AWS S3' />
        <Skill skillName='CI/CD' />
        <Skill skillName='GitHub Actions' />
        <Skill skillName='Monorepo (Turborepo)' />
        <Skill skillName='Serverless' />
      </div>
    </>
  )
}
