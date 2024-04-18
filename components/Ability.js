"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import all from "@/utils/all";
import { motion } from "framer-motion";

export default function Ability({ id, selectAbillity, abilitiesSelected, name }) {

    const [abilities, setAbilities] = useState([]);
    const audioRef = useRef(null);

    useEffect(() => {
        fetch(`https://ddragon.leagueoflegends.com/cdn/14.7.1/data/${all.getLanguage()}/champion/${id}.json`)
            .then(response => response.json())
            .then(data => {
                // audioRef.current.play();
                const formattedData = data.data[id].spells;
                const passive = data.data[id].passive;
                passive.id = data.data[id].passive.image.full.replace(/\.[^/.]+$/, "");
                formattedData.unshift(passive)
                formattedData.push({
                    id:id,
                    name:"Character Design",
                    description:`You can choose ${name}'s chara design, so you'll inherit his role, stats and attack range.`
                })
                setAbilities(formattedData)
            })
        }, [id])
        
        console.log(abilities)


    return (
        <div className="p-2 flex flex-col h-full gap-3 justify-center border-2 bg-gray-950">
            {
                abilities.map((el, i) => {
                    return (
                        
                        <motion.div

                            key={el.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}>

                            <div className={`flex items-center gap-3 rounded-lg p-2 ${abilitiesSelected.some(e => e.key === all.order[i]) ? "cursor-not-allowed text-gray-500 bg-gray-800" : "hover:bg-gray-900 cursor-pointer transiton ease-in-out duration-100"}`}
                                onClick={() => abilitiesSelected.some(e => e.key === all.order[i]) ? undefined : selectAbillity(all.order[i], el.id, el.name, el.description)}>

                                {/* Pour le premier élément, je vais change l'url source de l'image par passive */}
                                {

                                <Image src={`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/${i === 0 ? "passive" : i === abilities.length-1 ? "champion" : "spell"}/${el.id}.png`} className={`skeleton ${i === 0 ? "rounded-full" : i === abilities.length-1 ? "mask mask-hexagon" : "rounded-lg"} w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] object-cover ${abilitiesSelected.some(e => e.key === all.order[i]) && "opacity-20"}`} width={75} height={75} alt={el.name} />
                                }
                                <div className="grow">
                                    <div className="flex items-center justify-between">
                                        <h3 className="lg:text-xl font-bold">{el.name}</h3>
                                        <span className=" h-5 w-5 flex items-center justify-center rounded bg-gray-700 text-xs tooltip text-left" data-tip={el.description.replace(/<\/?[^>]+(>|$)/g, " ")}>{all.order[i]}</span>
                                    </div>
                                    <p className="text-xs lg:text-sm line-clamp-2 mt-0.5"  dangerouslySetInnerHTML={{ __html: el.description }}></p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })
            }
            <audio ref={audioRef} src="/sounds/select.mp3" />
        </div>
    )
}
