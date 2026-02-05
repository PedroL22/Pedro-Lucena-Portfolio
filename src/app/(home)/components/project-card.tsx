import Image from 'next/image'

type ProjectCardProps = {
  name: string
  skills: string
  projectDesc: string
  image: string
  github: string
  live?: string
}

export const ProjectCard = ({ name, skills, projectDesc, image, github, live }: ProjectCardProps) => {
  return (
    <div className='flex h-[400px] w-[275px] flex-col overflow-hidden rounded-[25px] bg-primary p-4'>
      <div className='h-[150px] w-[250px] shrink-0 self-center overflow-hidden rounded-[25px]'>
        <Image
          src={image}
          alt={`${name} screenshot`}
          width={250}
          height={150}
          className='h-[150px] w-[250px] shrink-0 rounded-[25px] object-cover transition-transform duration-200 hover:scale-110'
        />
      </div>

      <h2 className='mt-4 max-w-[90%] pb-[5px] font-medium text-[14px] text-gray-300'>{skills}</h2>

      <h3 className='mb-[5px] text-left font-medium text-white'>{name}</h3>

      <p className='h-[85px] max-w-[90%] select-text text-[14px] text-gray-100 normal-case'>{projectDesc}</p>

      <div className='mt-4 flex items-center gap-2'>
        <a
          className='rounded-[5px] border border-accent px-[5px] py-[5px] font-medium text-[14px] text-accent capitalize no-underline transition-colors hover:bg-accent hover:text-tertiary'
          href={github}
          target='_blank'
          rel='noreferrer'
        >
          gitHub
        </a>

        {live && (
          <a
            className='rounded-[5px] border border-accent bg-accent px-[5px] py-[5px] font-medium text-[14px] text-tertiary capitalize no-underline transition-colors hover:bg-[#249cb6] hover:text-[#061823]'
            href={live}
            target='_blank'
            rel='noreferrer'
          >
            Live demo
          </a>
        )}
      </div>
    </div>
  )
}
