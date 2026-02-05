import Image from 'next/image'
import type { ComponentProps } from 'react'

interface SkillProps extends ComponentProps<'div'> {
  skillName: string
}

export const Skill = ({ skillName, ...props }: SkillProps) => {
  return (
    <div {...props} className='inline-flex items-center py-[5px]'>
      <Image src='/images/verified.png' alt='verified icon' width={15} height={15} className='mr-2.5' />
      <h3 className='text-white capitalize'>{skillName}</h3>
    </div>
  )
}
