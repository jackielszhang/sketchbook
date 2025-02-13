'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import UtilitiesExpander from '../components/utilities_expander';
import CSSUtilitiesExpander from '../components/css_utilities_expander';


export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered] = useState(false);
  const cardStyle ="bg-gray-500 rounded-lg p-10 flex items-center justify-center";

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Sketchbook</h1>


      <div className="max-w-2xl mx-auto flex flex-col gap-8">


        {/*I'm a new card*/}
        <div className={cardStyle}>
              <UtilitiesExpander />
        </div>

CSS
        <div className={cardStyle}>
              <CSSUtilitiesExpander />
        </div>

        <br/>

        {/* Example Card 1 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h2 className="text-xl font-semibold mb-4">Hover Animation</h2>
          <p className="text-gray-600">Hover over this card to see a spring animation effect</p>
        </motion.div>


        {/* Example Card 2 */}
        <div
          className="bg-white p-6 rounded-lg flex justify-center pt-10 pb-10"
        >

            <motion.div className={`w-40 h-40 bg-gray-200 rounded-full bg-sky-500 ${isHovered ? 'shadow-lg' : ''}`}

              whileHover={{ scale: 2 }}
              transition={{ type: "spring", mass: 0.5 }}
          >

            </motion.div>

        </div>


        <div className='bg-white p-6 h-72'>
            <motion.div 
                className='bg-white shadow-md rounded-xl p-2 border border-[#e5e5e5]'
                animate={{ height: 'auto' }}
                initial={{ height: '20px' }}
            >

                <motion.button
                    className='w-full text-left'
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    Click me
                </motion.button>


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className=''
                >
                    {isExpanded && (
                        <p className='text-gray-600'>This is the expanded content that appears when you click the button. It demonstrates a smooth animation effect!</p>
                    )}
                </motion.div>


            </motion.div>
        </div>
        
        
      </div>
    </main>
  );
}
