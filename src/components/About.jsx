import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  const CV_URL = 'assets/resume/Bunsal-Application.pdf';
  const [clicked, setClicked] = useState(false);

  const handleDownload = () => {
    setClicked(true);

    const link = document.createElement('a');
    link.href = CV_URL;
    link.setAttribute('download', 'Bunsal - FullStack Application.pdf');
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex justify-between sm:grid">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <div className="sm:my-5 my-[26px]">
          <button className="relative flex justify-center items-center h-8 w-[150px] sm:h-10 sm:w-50 overflow-hidden border border-indigo-600 
            text-secondary shadow-2xl transition-all duration-200 before:absolute before:bottom-0 
            before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 
            before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white 
            hover:shadow-indigo-600 hover:before:h-60 hover:before:w-60 hover:before:opacity-80 
            bg-tertiary py-3 px-8 sm:py-2 sm:px-6 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary"
            onClick={handleDownload}
          >
            <span className="relative z-10 text-center text-[12px] sm:text-[14px]">
              {clicked ? 'Downloading...' : 'Download CV'}
            </span>
          </button>
        </div>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-justify text-[17px] max-w-3xl leading-[30px]'
      >
       I am a Full Stack Developer with a strong aptitude for fast learning, adept at seamlessly integrating both front-end and back-end technologies. 
       I am excel in working collaboratively with Product Managers (PM) and Product Owners (PO), ensuring efficient communication and alignment with project goals. 
       My ability to quickly grasp new technologies and frameworks makes me a versatile asset to any development team, driving innovation and delivering high-quality solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
