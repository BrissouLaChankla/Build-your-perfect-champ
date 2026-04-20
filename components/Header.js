"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import all from "@/utils/all";

export default function Header() {
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        setLanguage(all.getLanguage());
    }, []);

    return (
        <div className="flex justify-between items-center w-full mt-4 md:mt-8 z-10">
            <div className="w-24 md:w-28">
                {language && (
                    <select
                        aria-label="Select language"
                        className="select select-bordered w-full max-w-xs"
                        defaultValue={language}
                        onChange={(e) => localStorage.setItem("selectedLanguage", e.target.value)}
                    >
                        {all.languages.map((el) => (
                            <option key={el.languageCode} value={el.languageCode}>
                                {el.languageName}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <h1 className="text-3xl lg:text-5xl text-center font-extrabold text-white hidden md:block">
                Build your <Link href="/" className="relative px-2 outlined">Perfect Champ</Link>
            </h1>
            <div className="w-40 flex items-center justify-end gap-4">
                <button
                    aria-label="How to play"
                    className="btn btn-neutral btn-outline w-12 rounded-full text-xl"
                    onClick={() => document.getElementById("rules").showModal()}
                >
                    ?
                </button>
                <dialog id="rules" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-extrabold text-3xl text-white">Welcome to Legends' Fusion!</h3>
                        <div className="py-4">
                            <h3 className="font-bold text-xl text-primary mt-4 mb-2">Goal</h3>
                            <p>
                                Craft your own unique champion by mixing and matching abilities from different League of Legends champions.
                            </p>

                            <h3 className="font-bold text-xl text-primary mt-4 mb-2">How to play</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Each round, a random champion appears. Pick one of their abilities (Passive, Q, W, E, R) or inherit their character design &mdash; without knowing which champion comes next.</li>
                                <li>Repeat the process until every slot is filled and your custom champion is complete.</li>
                                <li>At the end, your fusion champion is revealed with the full kit you&apos;ve chosen.</li>
                            </ul>

                            <p className="mt-4">
                                Think about ability synergies to maximize your fusion&apos;s potential, and have fun testing how well you know the roster!
                            </p>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Got it!</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
}
