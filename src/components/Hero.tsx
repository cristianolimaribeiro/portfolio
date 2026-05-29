"use client";

import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { ComputersCanvas } from "./canvas";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá, eu sou <span className='text-[#915EFF]'>Cristiano</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desenvolvo interfaces corporativas, <br className='sm:block hidden' />
            web parts e soluções no ecossistema Microsoft 365.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
          >
            <div className="absolute inset-0 bg-[#915EFF] rounded-full blur-2xl opacity-20 animate-pulse" />
            <Image
              src="/foto.png"
              alt="Cristiano Lima Ribeiro"
              fill
              sizes="(max-width: 768px) 150px, 200px"
              className="rounded-full border-4 border-[#915EFF] object-cover"
            />
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
