"use client"
import style from '@/style/All.module.css'
import { useState, useEffect } from "react";
import all from "@/utils/all";

export default function Header() {
    const [language, setLanguage] = useState(null)

    useEffect(() => {
        setLanguage(all.getLanguage())
    }, [])

    return (
        <div className="flex justify-between items-center w-full mt-4 md:mt-8">
            <div className="w-24">
                {
                    language &&
                    <select className="select select-bordered w-full max-w-xs" defaultValue={language} onChange={e => localStorage.setItem('selectedLanguage', e.target.value)}>
                        {
                            all.languages.map(el =>
                                <option key={el.languageCode} value={el.languageCode}> {el.languageName} </option>
                            )
                        }
                    </select>
                }

            </div>
            <h1 className="text-3xl lg:text-5xl text-center font-extrabold text-white hidden md:block">Build your <span className={`relative px-2 ${style.outlined}`}>Perfect Champ</span></h1>
            <div className="w-40 flex items-center justify-end gap-4">
                <button className='btn btn-neutral btn-outline w-12 rounded-full text-xl ' onClick={() => document.getElementById('rules').showModal()}>?</button>
                <dialog id="rules" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-extrabold text-3xl text-white">Bienvenue dans Legends' Fusion !</h3>
                        <div className="py-4">
                            <h3 className="font-bold text-xl text-primary mt-4 mb-2">Objectif :</h3>
                            <p>
                                Créez votre champion unique en combinant des compétences de différents champions de League of Legends.
                            </p>
                            <h3 className="font-bold text-xl text-primary mt-4 mb-2">Comment jouer :</h3>
                                <li className="step text-left">À chaque tour, un champion est présenté aléatoirement. Vous devez choisir une de ses compétences (Q, W, E, R ou le passif) sans savoir quel champion sera disponible au tour suivant.</li>
                                <li className="step">Répétez le processus pour cinq tours pour assembler un champion complet avec un ensemble unique de compétences.</li>
                                <li className="step"> À la fin des cinq tours, votre champion personnalisé sera affiché, combinant les compétences que vous avez choisies.</li>
                            <div className="flex mt-4">
                            </div>
                            Pensez stratégiquement à la synergie entre les compétences pour maximiser l'efficacité de votre champion fusionné.

                            Amusez-vous et testez votre connaissance des champions pour créer le combattant ultime !
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Compris !</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}
