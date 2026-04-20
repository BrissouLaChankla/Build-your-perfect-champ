import { useState, useEffect } from "react";

function ScrambleText({ text, scrambleInterval = 100 }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const characters = text.split("");
        const timer = setInterval(() => {
            const scrambledText = characters
                .map((char) => (Math.random() > 0.5 ? scrambleCharacter(char) : char))
                .join("");
            setDisplayedText(scrambledText);
        }, scrambleInterval);

        return () => clearInterval(timer);
    }, [text, scrambleInterval]);

    function scrambleCharacter() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    return <div>{displayedText}</div>;
}

export default ScrambleText;
