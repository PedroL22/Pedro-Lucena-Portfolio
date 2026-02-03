import { Skill } from '../Skill'

export const Grid3 = () => {
  return (
    <>
      <h2 className='py-[30px] font-normal'>DevOps &amp; Architecture</h2>

      <div className='grid grid-cols-2 justify-around text-left text-[15px]'>
        <Skill skillName='Docker' />
        <Skill skillName='AWS S3' />
        <Skill skillName='CI/CD' />
        <Skill skillName='GitHub Actions' />
        <Skill skillName='Turborepo' />
        <Skill skillName='Serverless' />
      </div>
    </>
  )
}
