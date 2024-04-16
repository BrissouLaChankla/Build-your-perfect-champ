"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import all from "@/utils/all";

export default function Header() {
    const [language, setLanguage] = useState(null)

    useEffect(() => {
        setLanguage(all.getLanguage())
    }, [])

    return (
        <div className="flex justify-between items-center w-full mt-4 md:mt-8">
            <div className="w-40">
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
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-extrabold ">Build the Perfect Champ</h1>
            <div className="w-40 flex items-center justify-end gap-4">

                <button className='btn btn-primary btn-outline w-12 rounded-full text-2xl text-white'>?</button>
            </div>
        </div>
    )
}
