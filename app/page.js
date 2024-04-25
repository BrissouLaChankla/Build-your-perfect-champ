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
    }, "1600");
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
{
!champSelected &&
          <div className="fixed bottom-0 text-xs md:text-sm flex items-center gap-2 rounded-t-lg backdrop-blur-lg bg-black/30 px-4 p-2">This game is brought to you by<a className="text-primary" href="https://brice-eliasse.com" target="_blank">Brice Eliasse</a> |

            <div className="flex gap-2">

              <a href="https://www.linkedin.com/in/brice-eliasse" target="_blank">
                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#9e0521" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
              </a>
              <a href="https://github.com/BrissouLaChankla" target="_blank">
                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#9e0521" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              </a>
              <a href="https://www.instagram.com/brice.vue/" target="_blank">
                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#9e0521" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </a>
            </div>
          </div>
}
        </div>
      </main>
    </>

  );
}
