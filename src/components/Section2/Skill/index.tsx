import Image from 'next/image'

type SkillProps = {
  skillName: string
}

export const Skill = ({ skillName }: SkillProps) => {
  return (
    <div>
      <div className='inline-flex items-center py-[5px]'>
        <Image src='/images/verified.png' alt='verified icon' width={15} height={15} className='mr-2.5' />
        <h3 className='font-normal text-white capitalize'>{skillName}</h3>
      </div>
    </div>
  )
}
