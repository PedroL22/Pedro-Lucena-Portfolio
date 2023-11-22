import { FC } from 'react'

import { SkillEntity } from '@/entities/ContentEntity'

export const Skill: FC<SkillEntity> = ({ id, attributes }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{attributes.type}</p>
      <p>{attributes.name}</p>
    </div>
  )
}
