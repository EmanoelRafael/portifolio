import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { styles } from '../styles';
import { logo } from '../assets';

const Hero = ({lang}) => {
  return (
    <section className='relative w-full h-screen mx-auto' 
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start gap-y-80`}
      >
        <div className='flex flex-row gap-5'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>
          {/* {lang?"":""} */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
            {lang?"Hi, I'm":"Olá, Eu sou"} <span className='text-[#915eff]'>Emanoel</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {lang?"I'm a computer engineering student":"Eu sou um estudante de Engenharia da Computação"} <br className='sm:block hidden'/>
            {lang?"and I solve problems with technology.":"e resolvo problemas utilizando a tecnologia"}
              
            </p>
          </div>
        </div>

         {/* <div className='border-gray-50 border-2 bottom-50 w-full h-fit flex justify-center'>
          <img src={logo} alt="logo" className='sm:h-[700px] h-[200px] ' />
         </div> */}

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero