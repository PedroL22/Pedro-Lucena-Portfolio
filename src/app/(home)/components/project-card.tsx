import Image from 'next/image'
import type { ComponentProps } from 'react'

interface ProjectCardProps extends ComponentProps<'div'> {
  name: string
  skills: string
  projectDesc: string
  image: string
  github?: string
  live?: string
}

export const ProjectCard = ({ name, skills, projectDesc, image, github, live, ...props }: ProjectCardProps) => {
  return (
    <div {...props} className='flex h-[385px] w-[275px] flex-col justify-between rounded-3xl bg-primary p-4'>
      <div>
        <div className='h-[150px] w-[250px] shrink-0 self-center rounded-3xl'>
          <Image
            alt={`${name} screenshot`}
            className='h-[150px] w-[250px] shrink-0 rounded-3xl object-cover'
            height={150}
            src={image}
            width={250}
          />
        </div>

        <p className='mt-4 pb-1.5 font-medium text-sm text-zinc-300'>{skills}</p>

        <p className='mb-1.5 text-left font-medium text-white'>{name}</p>

        <p className='h-20 select-text text-sm text-zinc-100'>{projectDesc}</p>
      </div>

      <div className='flex items-center gap-2'>
        {github && (
          <a
            className='rounded-lg border border-accent p-1.5 font-medium text-accent text-sm capitalize no-underline transition-all hover:bg-accent hover:text-tertiary'
            href={github}
            rel='noreferrer'
            target='_blank'
          >
            gitHub
          </a>
        )}

        {live && (
          <a
            className='rounded-lg border border-accent bg-accent p-1.5 font-medium text-sm text-tertiary capitalize no-underline transition-all hover:bg-[#249cb6] hover:text-[#061823]'
            href={live}
            rel='noreferrer'
            target='_blank'
          >
            Live demo
          </a>
        )}
      </div>
    </div>
  )
}
