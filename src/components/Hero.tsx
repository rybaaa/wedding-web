import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import pic from '../assets/pic.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import logo from '../assets/logo.png';
import { sectionVariants } from '../utils/sectionVariants';

const Hero: React.FC = () => {

  const photoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + custom * 0.1, duration: 0.7, ease: 'easeOut' },
    }),
  };

  return (
    <motion.section
      id="home"
      className="pt-24 pb-4 px-4 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Logo positioned on the left side */}
      <div className="hidden md:block absolute left-[-4] top-24 z-10">
        <img
          src={logo}
          alt="Logo"
          className="h-[100px] md:h-[220px] lg:h-[400px] w-auto object-contain opacity-50"
        />
      </div>

      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-title text-custom-text italic mb-4">
          Anastasia & Anton
        </h1>
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-custom-text italic">
            Наша первая встреча случилась в Минске - тёплым вечером, в парке, на скамейке.
Мы просто болтали и смеялись, не думая, что именно с этого всё начнётся.

Первые месяцы мы были друзьями, а потом поняли, что дом - это когда вместе и смешно.

Этим летом мы хотим собрать рядом самых близких и разделить с вами важный для нас момент.
          </p>
          {/* <img src={pic} alt="Logo" /> */}
        </div>

        {/* Three photos in a row */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Photo 1 */}
            <motion.div custom={0} variants={photoVariants} className="rounded-[10px] overflow-hidden shadow-lg bg-white aspect-[3/4]">
              <img
                src={pic2}
                alt="Фото 1"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Photo 2 */}
            <motion.div custom={1} variants={photoVariants} className="rounded-[10px] overflow-hidden shadow-lg bg-white aspect-[3/4]">
              <img
                src={pic}
                alt="Фото 2"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Photo 3 */}
            <motion.div custom={2} variants={photoVariants} className="rounded-[10px] overflow-hidden shadow-lg bg-white aspect-[3/4]">
              <img
                src={pic3}
                alt="Фото 3"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <ChevronDown className="w-8 h-8 mx-auto mt-12 text-custom-button animate-bounce" />
      </div>
    </motion.section>
  );
};

export default Hero;