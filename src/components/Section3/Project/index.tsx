import './styles.css'

type ProjectProps = {
  name: string
  skills: string
  projectDesc: string
  image: string
  github: string
  live: string
}

export const Project = ({ name, skills, projectDesc, image, github, live }: ProjectProps) => {
  return (
    <div className='project'>
      <div className='image-wrapper'>
        <img src={image} alt='' className='image' />
      </div>

      <h2 className='skills'>{skills}</h2>

      <h3 className='name'>{name}</h3>

      <p className='projectDesc'>{projectDesc}</p>

      <a className='github' href={github} target='_blank' rel='noreferrer'>
        gitHub
      </a>

      <a className='live' href={live} target='_blank' rel='noreferrer'>
        Live demo
      </a>
    </div>
  )
}
