import Image from 'next/image'
import { FC } from 'react'

import { SkillEntity } from '@/entities/ContentEntity'

export const Skill: FC<SkillEntity> = ({ attributes }) => {
  return (
    <div className='flex items-center space-x-2'>
      <Image
        src='/verified.png'
        alt='verified'
        width={14}
        height={14}
        aria-hidden
      />

      <p className='text-lg'>{attributes.name}</p>
    </div>
  )
}
