import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title_en, title_pt, icon, lang}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'> 
      <motion.div 
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        
        <div 
          options={{max: 45, scale: 1, speed:450}}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img 
            src={icon} 
            alt={title_en}
            className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{lang?title_en:title_pt}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = ({lang}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
        {lang?"Introduction":"Introdução"}
        </p>
        <h2 className={styles.sectionHeadText}>
        {lang?"Overview":"Visão Geral"}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          {lang?"Welcome to my portfolio! I am Emanoel Rafael, a computer engineering student at the Computer Science Center of the Federal University of Pernambuco. I entered the technology field in 2021 and since then I have been gaining more and more affinity with the area. I believe that the advancement of society is directly related to the advancement of technology. Among the vast range of content to which I was exposed during my undergraduate studies, I was most interested in the areas of Data Science and Development, but I am open to opportunities in the most diverse areas."
          :"Seja bem vindo ao meu portifólio! Eu sou Emanoel Rafael, estudante de engenharia da computação no Centro de Informática da Universidade Federal de Pernambuco. Entrei na área da tecnologia em 2021 e desde então venho ganhando cada vez mais afinidade com a área, acredito que o avanço da sociedade está diretamente relacionado ao avanço da tecnologia. Dentre a vasta gama de conteúdos aos quais fui exposto durante a minha graduação eu despertei mais interesse pelas áreas de Ciência de Dados e Desenvolvimento, mas estou aberto para oportunidades nas mais diversas áreas."}
          
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title_en} index={index} lang={lang} {...service}/>
        ))

        }

      </div>

    </>
  )
}

export default SectionWrapper(About, "about")