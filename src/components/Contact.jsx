import {useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { icon_linkedin, icon_github } from '../assets'

//template_o8ixtwr
//service_8xmfe61
//ubmlBTjxZs0afOCfj

const Contact = ({lang}) => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send(
      'service_8xmfe61', 
      'template_o8ixtwr', {
        from_name: form.name,
        to_name: 'Emanoel',
        from_email: form.email,
        to_email: 'emanoelrafael2020@gmail.com',
        message: form.message
      },
    'ubmlBTjxZs0afOCfj')
    .then(() => {
      setLoading(false);
      alert("Thank you. I will return as soon as possible!")
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong.")
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left','tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <div className="flex items-center gap-4 mb-4">
            <p className={styles.sectionSubText}>{lang ? "Get in touch" : "Entre em contato"}</p>
            <div className="flex gap-3">
              <a href="https://br.linkedin.com/in/emanoel-rafael-767138218" target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-blue-600 rounded-full p-2 hover:bg-tertiary">
                  {/* Ícone do LinkedIn */}
                  <img src={icon_linkedin} className="w-6 h-6"/>
                </button>
              </a>
              <a href="https://github.com/EmanoelRafael" target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-gray-800 rounded-full p-2 hover:bg-tertiary">
                  {/* Ícone do GitHub */}
                  <img src={icon_github} className="w-6 h-6"/>
                </button>
              </a>
            </div>
          </div>
          <h3 className={styles.sectionHeadText}>{lang?"Contact":"Contato"}</h3>

          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className='m-12 flex flex-col gap-8'>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>{lang?"Your Name":"Seu Nome"}</span>
                <input 
                  type="text"
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder={lang?"What's your name?":"Qual é o seu nome?"}
                  className='bg-tertiary by-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>{lang?"Your Email":"Seu Email"}</span>
                <input 
                  type="email"
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder={lang?"What's your email?":"Qual é o seu email?"}
                  className='bg-tertiary by-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>{lang?"Your Message":"Sua Mensagem"}</span>
                <textarea 
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder={lang?"What do you want to say?":"O que você quer me dizer?"}
                  className='bg-tertiary by-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
              </label>
              <button
                type='submit'
                className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-secondary hover:text-tertiary'>
                  {loading?'Sending...':'Send'}
              </button>
          </form>
      </motion.div>

      {/*<motion.div
        variants={slideIn('right','tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
      </motion.div>*/}

    </div>
  )
}

export default SectionWrapper(Contact, "contact")