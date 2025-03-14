import './styles.css'

type NavButtonProps = {
  onClick: () => void
  text: string
}

export const NavButton = ({ onClick, text }: NavButtonProps) => {
  return (
    <button type='button' className='connect-button' onClick={onClick}>
      {text}
    </button>
  )
}
