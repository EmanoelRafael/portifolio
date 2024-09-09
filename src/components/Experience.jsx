import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({experience, lang}) => {
  return (
  <VerticalTimelineElement 
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={lang?experience.date_en:experience.date_pt}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon} 
          alt={experience.company_name} 
          className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {lang?experience.title_en:experience.title_pt}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {lang?experience.points_en.map((point, index) => (
        <li 
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
        </li>
      )):experience.points_pt.map((point, index) => (
        <li 
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
  )
}

const Experience = ({lang}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {lang?"What I have done so far":"O que eu tenho feito"}
        </p>
        <h2 className={styles.sectionHeadText}>
        {lang?"Work Experience":"Experiência Profissional"}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} lang={lang}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")