"use client"
import Image from "next/image"
import { motion } from "framer-motion";

export default function Champion({ name, id }) {

    return (
        <div className="border-2 h-full p-4 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Image src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} quality={100} className="object-cover rounded-lg skeleton h-60" width={400} height={400} alt={`Icon de ${name}`} />
            </motion.div>
            <h2 className="mt-4 text-2xl lg:text-4xl font-bold">{name}</h2>
        </div>
    )
}

// Lance un fetch et une random anim de 2 sec
// Le fetch récupère 5 champs
// Icon
// Nom
// Abilities (icon + nom + desc)
// 