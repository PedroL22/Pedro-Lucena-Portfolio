import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { Skill } from './skill'

const skillCategoryVariants = tv({
  base: [
    'mx-auto h-fit w-full max-w-[400px] rounded-[25px] border-2 border-secondary',
    'bg-transparent px-6 pb-8 text-center text-white transition-colors hover:bg-secondary',
  ],
})

interface SkillCategoryProps extends ComponentProps<'div'> {
  title: string
  skills: string[]
}

export const SkillCategory = ({ title, skills, className, ...props }: SkillCategoryProps) => {
  return (
    <div data-slot='skill-category' className={twMerge(skillCategoryVariants(), className)} {...props}>
      <h2 className='py-7 text-xl'>{title}</h2>

      <div className='mx-auto grid w-fit grid-cols-2 gap-x-8 text-left text-sm md:text-base'>
        {skills.map((skillName) => (
          <Skill key={skillName} skillName={skillName} />
        ))}
      </div>
    </div>
  )
}
