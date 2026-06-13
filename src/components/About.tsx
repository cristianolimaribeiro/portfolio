"use client";

import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: string }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        // @ts-expect-error - options não é uma propriedade nativa do div, mas sim do componente Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col'
      >
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className='object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão Geral.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Desenvolvedor Front-end Pleno com experiência em aplicações web corporativas, intranets, portais digitais e soluções integradas ao ecossistema Microsoft 365. Atuação sólida com React.js, TypeScript, JavaScript, SPFx (SharePoint Framework), SharePoint Online, Power Automate, Node.js, Express e integração com APIs REST. Experiência em levantamento de requisitos, análise funcional, componentização, performance, usabilidade, documentação técnica, suporte a implantação e sustentação de soluções para empresas de grande porte. Perfil técnico com base anterior em suporte, infraestrutura, MySQL e análise de sistemas, o que amplia a visão sobre segurança, confiabilidade, integração e experiência do usuário.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
