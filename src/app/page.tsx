'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Interactive Playground</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Example Card 1 */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h2 className="text-xl font-semibold mb-4">Hover Animation</h2>
          <p className="text-gray-600">Hover odver this card to see a spring animation effect</p>
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
