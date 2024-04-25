"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
export default function Champion({ name, id, shuffling }) {

    return (
        <div className="border-2 h-full p-4 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <img src={shuffling ? `/loading/${Math.floor(Math.random() * 2)}.gif` : `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}  className="object-cover rounded-lg skeleton h-60" width={400} height={400} alt={`Icon de ${name}`} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }} className="mb-8 h-14 -mt-8 md:mb-0 bg-gray-900 px-4 py-2 rounded-lg md:mt-4 text-2xl lg:text-4xl font-bold">
                    
                {
                    shuffling ? <ScrambleText text={`Ef${name}Zf`} scrambleInterval={100} /> : 
                    name
                    
                }
                    </motion.div>
        </div>
    )
}
