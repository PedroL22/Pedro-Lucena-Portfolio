import Image from 'next/image'

type ProjectProps = {
  name: string
  skills: string
  projectDesc: string
  image: string
  github: string
  live?: string
}

export const Project = ({ name, skills, projectDesc, image, github, live }: ProjectProps) => {
  return (
    <div className='m-[15px] h-[375px] w-[275px] overflow-hidden rounded-[25px] bg-primary'>
      <div className='mx-auto mt-[15px] block h-[150px] w-[250px] overflow-hidden rounded-[25px]'>
        <Image
          src={image}
          alt={`${name} screenshot`}
          width={250}
          height={150}
          className='mx-auto block h-[150px] w-[250px] rounded-[25px] object-cover transition-transform duration-200 hover:scale-110'
        />
      </div>

      <h2 className='ml-[15px] max-w-[90%] pt-0 pb-[5px] font-medium text-[14px] text-gray-300'>{skills}</h2>

      <h3 className='mb-[5px] ml-[15px] text-left font-medium text-white'>{name}</h3>

      <p className='ml-[15px] h-[85px] max-w-[90%] select-text font-normal text-[14px] text-gray-100 normal-case'>
        {projectDesc}
      </p>

      <a
        className='ml-[15px] inline rounded-[5px] border border-accent px-[5px] py-[5px] font-medium text-[14px] text-accent capitalize no-underline transition-colors hover:bg-accent hover:text-tertiary'
        href={github}
        target='_blank'
        rel='noreferrer'
      >
        gitHub
      </a>

      {live && (
        <a
          className='ml-[15px] inline rounded-[5px] border border-accent bg-accent px-[5px] py-[5px] font-medium text-[14px] text-tertiary capitalize no-underline transition-colors hover:bg-[#249cb6] hover:text-[#061823]'
          href={live}
          target='_blank'
          rel='noreferrer'
        >
          Live demo
        </a>
      )}
    </div>
  )
}
