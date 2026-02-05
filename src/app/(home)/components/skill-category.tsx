import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { Skill } from './skill'

const skillCategoryVariants = tv({
  base: [
    'mx-auto min-h-[250px] w-full max-w-[350px] flex flex-col items-center rounded-3xl border-2 border-secondary',
    'bg-transparent px-6 pb-8 text-center text-white transition-all hover:bg-secondary',
  ],
})

interface SkillCategoryProps extends ComponentProps<'div'> {
  title: string
  skills: string[]
}

export const SkillCategory = ({ title, skills, className, ...props }: SkillCategoryProps) => {
  return (
    <div data-slot='skill-category' className={twMerge(skillCategoryVariants(), className)} {...props}>
      <p className='py-7 text-xl'>{title}</p>

      <div className='mx-auto grid w-fit grid-cols-2 gap-x-8 text-left text-sm md:text-base'>
        {skills.map((skillName) => (
          <Skill key={skillName} skillName={skillName} />
        ))}
      </div>
    </div>
  )
}
