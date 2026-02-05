import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const experienceCardVariants = tv({
  base: [
    'flex w-full flex-col rounded-3xl border-2 border-secondary',
    'bg-primary p-6 text-white transition-all hover:bg-secondary md:p-8',
  ],
})

interface ExperienceCardProps extends ComponentProps<'div'> {
  title: string
  company: string
  period: string
  description: string
  technologies?: string[]
}

export const ExperienceCard = ({
  title,
  company,
  period,
  description,
  technologies,
  className,
  ...props
}: ExperienceCardProps) => {
  return (
    <div className={twMerge(experienceCardVariants(), className)} {...props}>
      <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-center'>
        <div>
          <h3 className='font-bold text-teal-400 text-xl'>{title}</h3>
          <h4 className='font-medium text-lg'>{company}</h4>
        </div>

        <span className='text-text-muted'>{period}</span>
      </div>

      <p className='mt-4 text-text-muted'>{description}</p>

      {technologies && (
        <div className='mt-4 flex flex-wrap gap-2'>
          {technologies.map((tech) => (
            <span key={tech} className='rounded-full bg-tertiary px-3 py-1 text-white text-xs'>
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
