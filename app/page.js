"use client"
import Image from "next/image";
import Champion from "@/components/Champion";
import Ability from "@/components/Ability";
import all from "@/utils/all";
import { useState } from "react";
import Header from "@/components/Header";
import Head from "next/head";
import { motion } from "framer-motion";
import Video from "@/components/Video";

export default function Home() {
  const [champSelected, setChampSelected] = useState(null);
  const [abilitiesSelected, setAbilitiesSelected] = useState([]);
  const [shuffling, setShuffling] = useState(false);

  const selectChamp = async () => {
    setShuffling(true)
    setTimeout(() => {
      setShuffling(false)
    }, "1200");
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.7.1/data/${all.getLanguage()}/champion.json`)
    const data = await response.json();

    setChampSelected(all.getRandomChamps(data.data));

  }
  console.log(champSelected)

  const selectAbillity = (key, name, spellName, spellDesc) => {
    setAbilitiesSelected([...abilitiesSelected, {
      key, name, champ: champSelected.name, spellName, spellDesc
    }]);
    selectChamp();
  }
  const pictureOrLetter = letter => {
    const ability = abilitiesSelected.find(e => e.key === letter);

    if (!!ability) {
      return <motion.div initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}><img src={`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/${letter === "P" ? "passive" : letter === "D" ? "champion" : "spell"}/${ability.name}.png`} className="object-cover" width={100} height={100} alt={`${ability.name} icon`} /></motion.div>;
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

  if (abilitiesSelected.length >= all.order.length) {
    document.getElementById('my_modal_4').showModal()
  }

  let bgStyle;
  if (!!champSelected) {
    bgStyle = {
      backgroundColor: "#111111",
      backgroundImage: "linear-gradient(32deg, rgba(8, 8, 8, 0.74) 30px,transparent)",
      backgroundSize: "60px 60px",
      backgroundPosition: "-5px -5px"
    }
  } else {
    bgStyle = {}
  }



  return (

    <>
      <Head>
        <title>Legends' Fusion - Build your Lol Champ</title>
        <meta name="description" content="Randomly select skills from League of legends champions and combine them to create a unique legend" />

        <meta property="og:url" content="https://www.legends-fusion.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Legends' Fusion - Build your Lol Champ" />
        <meta property="og:description" content="Randomly select skills from League of legends champions and combine them to create a unique legend" />
        <meta property="og:image" content="https://www.legends-fusion.com/meta.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="legends-fusion.com" />
        <meta property="twitter:url" content="https://www.legends-fusion.com/" />
        <meta name="twitter:title" content="Legends' Fusion - Build your Lol Champ" />
        <meta name="twitter:description" content="Randomly select skills from League of legends champions and combine them to create a unique legend" />
        <meta name="twitter:image" content="https://www.legends-fusion.com/meta.png" />

      </Head>
      {!champSelected && <Video />}
      <main style={bgStyle}>
        <div className=" p-4 flex flex-col items-center max-w-7xl m-auto" style={{ minHeight: "100vh", minHeight: "100svh" }}>


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
                      <div className="absolute bottom-12 lg:bottom-24  left-1/2 translate-y-2/4 -translate-x-2/4 text-center">
                        {abilityShow("D")}
                        <div className="bg-gray-950 mask mask-hexagon  w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center text-2xl font-bold overflow-hidden">
                          {pictureOrLetter("D")}
                        </div>
                      </div>




                      <Champion name={champSelected.name} id={champSelected.id} shuffling={shuffling} />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <Ability id={champSelected.id} selectAbillity={selectAbillity} abilitiesSelected={abilitiesSelected} name={champSelected.name} shuffling={shuffling} />
                  </div>
                </>
                :
                <div className="col-span-12 flex items-center justify-center">
                  <button className="btn btn-primary btn-lg" onClick={() => selectChamp()}>Start the Game</button>
                </div>
            }
          </div>


          {/* could be exported but meh */}
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h2 className="font-bold text-3xl mb-5 text-white text-center">Here's your creation :</h2>
              <div className="flex flex-col">

                {
                  abilitiesSelected.sort((a, b) => all.order.indexOf(a.key) - all.order.indexOf(b.key)).map((el, i) => {
                    return (
                      <motion.div

                        key={el.key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}>

                        <div className={`flex items-center gap-3 border-b-2  p-2`}>

                          {/* Pour le premier élément, je vais change l'url source de l'image par passive */}
                          <img src={`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/${el.key === "P" ? "passive" : el.key === "D" ? "champion" : "spell"}/${el.name}.png`} className={`skeleton ${i === 0 ? "rounded-full" : i === all.order.length - 1 ? "mask mask-hexagon" : "rounded-lg"} w-[60px] h-[60px] object-cover`} width={50} height={50} alt={el.name} />

                          <div className="grow">
                            <div className="flex items-center justify-between">
                              <h3 className="lg:text-xl font-bold">{el.spellName}</h3>
                              <span className=" h-5 w-5 flex items-center justify-center rounded bg-gray-700 text-xs">{el.key}</span>
                            </div>
                            <p className="text-xs lg:text-sm line-clamp-2 mt-0.5" dangerouslySetInnerHTML={{ __html: el.spellDesc }}></p>
                          </div>
                        </div>
                      </motion.div>



                    )
                  })
                }
              </div>
              <div className="modal-action">
                <a href="/" className="btn btn-lg btn-primary">Play Again</a>
              </div>
            </div>
          </dialog>
        </div>
      </main>
    </>

  );
}
