import { motion } from 'motion/react';
import { useState } from 'react';

export default function UtilitiesExpander() {


    const [isExpanded, setIsExpanded] = useState(false);
    const transitionsAnim = 'type: ease: ["easeIn", "easeOut"], stiffness: 400, damping: 10';

    return (
        <motion.div 
            className="p-5 pl-8 pr-8 bg-black text-white rounded-3xl flex flex-row gap-2 cursor-pointer"
            initial={{ width: '200px' }}
            animate={{ width: isExpanded ? 'auto' : '200xp' }}
            layout 
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <motion.div 
                className="w-[30px] h-[30px] bg-red-100 rounded-full"
                transition={{ transitionsAnim }}
                layout
                layoutId="firstCircle"
            />
            {isExpanded && [
                <motion.div 
                    key="circle1"
                    className="w-[30px] h-[30px] bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ transitionsAnim }}
                />,
                <motion.div 
                    key="circle2"
                    className="w-[30px] h-[30px] bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ transitionsAnim, delay: 0.1 }}
                />,
                <motion.div 
                    key="circle3"
                    className="w-[30px] h-[30px] bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ transitionsAnim, delay: 0.2 }}
                />
            ]}
        </motion.div>
    );
}