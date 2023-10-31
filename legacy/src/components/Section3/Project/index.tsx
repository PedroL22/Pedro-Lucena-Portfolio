import './styles.css'

type ProjectProps = {
  name: string
  skills: string
  projectdesc: string
  image: string
  github: string
  live: string
}

export const Project = ({
  name,
  skills,
  projectdesc,
  image,
  github,
  live,
}: ProjectProps) => {
  return (
    <div className='project'>
      <div className='image-wrapper'>
        <img
          className='image'
          src={image}
        />
      </div>
      <h2 className='skills'>{skills}</h2>
      <h3 className='name'>{name}</h3>
      <p className='projectdesc'>{projectdesc}</p>
      <a
        className='github'
        href={github}
        target='_blank'
        rel='noreferrer'
      >
        gitHub
      </a>
      <a
        className='live'
        href={live}
        target='_blank'
        rel='noreferrer'
      >
        Live demo
      </a>
    </div>
  )
}
