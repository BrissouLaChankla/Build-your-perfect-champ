"use client"
import Image from "next/image";
import Champion from "@/components/Champion";
import Ability from "@/components/Ability";
import all from "@/utils/all";
import { useState } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function Home() {
  const [champSelected, setChampSelected] = useState(null);
  const [abilitiesSelected, setAbilitiesSelected] = useState([]);
  const selectChamp = async () => {
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.7.1/data/${all.getLanguage()}/champion.json`)
    const data = await response.json();
    setChampSelected(all.getRandomChamps(data.data));
  }
  const selectAbillity = (key, name) => {
    setAbilitiesSelected([...abilitiesSelected, {
      key, name, champ: champSelected.name
    }]);
    selectChamp();
  }
  const pictureOrLetter = letter => {
    const ability = abilitiesSelected.find(e => e.key === letter);

    if (!!ability) {
      return <motion.div initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}><Image src={`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/${letter === "P" ? "passive" : "spell"}/${ability.name}.png`} className="object-cover" quality={100} width={100} height={100} alt={`${ability.name} icon`} /></motion.div>;
    }

    return letter;
  }
  const abilityShow = letter => {
    const ability = abilitiesSelected.find(e => e.key === letter);
    if (ability) {
      return <motion.div initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}><span className="text-white text-xs">{ability.champ} ({letter})</span></motion.div>
    }
    return <span className="text-white text-xs">&nbsp;</span>
  }

  if (abilitiesSelected.length >= 5) {
    document.getElementById('my_modal_4').showModal()
  }

  return (
    <main className="min-h-screen p-4 flex flex-col items-center max-w-7xl m-auto">
      <Header />
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <div className="grid grid-cols-12 my-8 grow w-full">
        {
          !!champSelected ?
            <>
              <div className="col-span-12 md:col-span-7">
                <div className="bg-gray-900 h-full p-10 lg:p-20 relative">
                  <div className="absolute -top-10 lg:-top-5 left-1/2 translate-y-2/4 -translate-x-2/4 text-center">
                    {abilityShow("P")}
                    <div className="bg-gray-950 rounded-full border-2 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center text-2xl font-bold overflow-hidden">
                      {pictureOrLetter("P")}
                    </div>
                  </div>


                  <div className="absolute -top-10 -left-2 lg:-top-8 lg:left-0 translate-y-2/4 translate-x-2/4 text-center">
                    {abilityShow("Q")}
                    <div className="bg-gray-950 rounded border-2 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-2xl lg:text-4xl font-bold overflow-hidden">
                      {pictureOrLetter("Q")}
                    </div>
                  </div>

                  <div className="absolute -bottom-10 -left-4 lg:-bottom-8 lg:left-0 -translate-y-2/4 translate-x-2/4 text-center">
                    <div className="bg-gray-950 rounded border-2 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-2xl lg:text-4xl font-bold overflow-hidden">
                      {pictureOrLetter("E")}
                    </div>
                    {abilityShow("E")}
                  </div>

                  <div className="absolute -bottom-10 -right-2 lg:-bottom-8 lg:right-0 -translate-y-2/4 -translate-x-2/4 text-center">
                    <div className="bg-gray-950 rounded border-2 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-2xl lg:text-4xl font-bold overflow-hidden">
                      {pictureOrLetter("R")}
                    </div>
                    {abilityShow("R")}
                  </div>

                  <div className="absolute -top-10 -right-2 lg:-top-8 lg:right-0 translate-y-2/4 -translate-x-2/4 text-center">
                    {abilityShow("W")}
                    <div className="bg-gray-950 rounded border-2 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-2xl lg:text-4xl font-bold overflow-hidden">
                      {pictureOrLetter("W")}
                    </div>
                  </div>



                  <Champion name={champSelected.name} id={champSelected.id} />
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <Ability id={champSelected.id} selectAbillity={selectAbillity} abilitiesSelected={abilitiesSelected} />
              </div>
            </>
            :
            <div>
              La partie
            </div>
        }
      </div>
      {!champSelected && <button className="btn btn-primary btn-lg" onClick={() => selectChamp()}>Démarrer</button>}

      {/* could be exported but meh */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Here's your perfect champion!</h3>
          {
            abilitiesSelected.map((el, i) => {
              return (
                <div key={el.key}>
                  <Image src={`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/${el.key === "P" ? "passive" : "spell"}/${el.name}.png`} className={`skeleton rounded-${i === 0 ? "full" : "lg"} w-[60px] h-[60px] object-cover`} width={75} height={75} alt={el.name} />
                </div>
              )
            })
          }
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <a href="/" className="btn">Recommencer</a>
          </div>
        </div>
      </dialog>
    </main>
  );
}
