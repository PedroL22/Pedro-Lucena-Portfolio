import './styles.css'
import Verified from '../../../assets/images/verified.png'

type SkillProps = {
  skillName: string
}

export const Skill = ({ skillName }: SkillProps) => {
  return (
    <div>
      <div className='skill-title'>
        <img
          src={Verified}
          alt=''
        />
        <h3>{skillName}</h3>
      </div>
    </div>
  )
}
