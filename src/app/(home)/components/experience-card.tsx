import type { ComponentProps } from 'react'
import ReactMarkdown from 'react-markdown'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const experienceCardVariants = tv({
  base: [
    'flex w-full flex-col justify-between rounded-3xl border-2 border-secondary',
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
      <div className='space-y-4'>
        <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-center'>
          <div>
            <p className='font-bold text-accent text-xl'>{title}</p>
            <p className='font-medium text-sm'>{company}</p>
          </div>

          <span className='text-sm text-text-muted'>{period}</span>
        </div>

        <div className='text-sm text-text-muted md:text-base'>
          <ReactMarkdown
            components={{
              ul: ({ node, ...props }) => <ul className='list-disc space-y-2 pl-5' {...props} />,
              li: ({ node, ...props }) => <li {...props} />,
              p: ({ node, ...props }) => <p className='mb-2' {...props} />,
              strong: ({ node, ...props }) => <strong className='font-bold text-gray-100' {...props} />,
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      </div>

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
