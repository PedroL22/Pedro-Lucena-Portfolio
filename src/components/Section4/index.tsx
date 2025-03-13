import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'

import PersonalText from '~/assets/images/undraw_personal_text.svg'
import './styles.css'

export const Section4 = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const [message, setMessage] = useState<boolean | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formElement = form.current
    if (formElement) {
      emailjs.sendForm('service_p8f68rz', 'template_ixeh0fe', formElement, '-xo0bQBMsXWq4CwN9')
    }
    formElement?.reset()
    setMessage(true)
    setTimeout(() => {
      setMessage(false)
    }, 3000)
  }

  return (
    <div className='section4'>
      {message && (
        <div className='success-message'>
          <h3>Message sent successfully.</h3>
        </div>
      )}

      <div className='form-wrapper'>
        <div className='left'>
          <img src={PersonalText} alt='man having a conversation' />
        </div>

        <div className='form-class'>
          <h1 className='title3'>Get In Touch</h1>

          <form ref={form} onSubmit={sendEmail}>
            <label className='label1'>
              <input className='input-form' id='name' type='text' placeholder='Name' name='name' required />

              <input className='input-form' id='email' type='email' placeholder='Email Address' name='email' required />
            </label>

            <label>
              <input className='input-form' id='subject' type='text' placeholder='Subject' name='subject' required />

              <input
                className='input-form'
                id='message'
                type='textarea'
                placeholder='Message'
                name='message'
                required
              />
            </label>

            <button className='form-button' type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
