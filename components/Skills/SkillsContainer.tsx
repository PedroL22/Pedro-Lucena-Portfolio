import { FC } from 'react'

import { Skill } from '.'

import { SkillEntity } from '@/entities/ContentEntity'

interface SkillsContainerProps {
  title: string
  skills: SkillEntity[]
}

export const SkillsContainer: FC<SkillsContainerProps> = ({ title, skills }) => {
  return (
    <div className='flex w-full max-w-sm cursor-pointer flex-col items-center gap-6 rounded-3xl border-2 border-primaryLight py-9 transition-all ease-in hover:bg-primaryLight'>
      <h4 className='text-xl'>{title}</h4>

      <div className='grid w-fit grid-cols-2 gap-1'>
        {skills.map((skill) => (
          <Skill
            key={skill.id}
            {...skill}
          />
        ))}
      </div>
    </div>
  )
}
