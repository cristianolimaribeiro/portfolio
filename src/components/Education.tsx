"use client";

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education, languages } from "../constants";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Meu Background</p>
        <h2 className={styles.sectionHeadText}>Formação & Idiomas.</h2>
      </motion.div>

      <div className='mt-10 flex flex-col gap-10'>
        <div className='flex flex-wrap gap-7'>
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              className='bg-black-100 p-5 rounded-2xl sm:w-[360px] w-full border-t-2 border-[#915EFF]'
            >
              <h3 className='text-white font-bold text-[20px]'>{item.title}</h3>
              <p className='mt-2 text-secondary text-[16px]'>{item.institution}</p>
              <p className='mt-1 text-white-100 text-[14px]'>{item.date}</p>
            </motion.div>
          ))}
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] mb-4'>Idiomas</h3>
          <div className='flex flex-wrap gap-5'>
            {languages.map((lang) => (
              <div key={lang.name} className='bg-tertiary px-4 py-2 rounded-full border border-[#915EFF]'>
                <span className='text-white font-medium'>{lang.name}: </span>
                <span className='text-secondary'>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
