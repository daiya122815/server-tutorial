import { useEffect, useState, useRef } from "react";

export default function App() {

    const [showStory, setShowStory] = useState(false);
    const tmpName = useRef("");
    const [customName, setCustomName] = useState("");
    const [randomXItem, setRandomXItem] = useState("");
    const [randomYItem, setRandomYItem] = useState("");
    const [randomZItem, setRandomZItem] = useState("");

    useEffect(() => {
        (async () => {
            const response = await fetch("/.netlify/functions/hello");
            const data = await response.json();
            setRandomXItem(data.randomXItem);
            setRandomYItem(data.randomYItem);
            setRandomZItem(data.randomZItem);
        })();
    }, []);

    return (
        <>
            <div>
                <label htmlFor="customname">Enter custom name:</label>
                <input
                    type="text"
                    placeholder=""
                    onChange={(e) => tmpName.current=e.target.value}
                />
            </div>
            <div>
                {/* <label htmlFor="us">US</label> */}
                {/* <input type="radio" value="us" checked={ukus === "us"} /> */}
                {/* <label htmlFor="uk">UK</label> */}
                {/* <input type="radio" value="uk" checked={ukus === "uk"} /> */}
            </div>
            <div>
                <button
                    onClick={async (event) => {
                        event.preventDefault();
                        const response = await fetch("/.netlify/functions/hello");
                        const data = await response.json();
                        setShowStory(true);
                        setCustomName(tmpName.current);
                        setRandomXItem(data.randomXItem);
                        setRandomYItem(data.randomYItem);
                        setRandomZItem(data.randomZItem);
                        console.log(data, tmpName);
                    }}
                >
                    Generate random story
                </button>
            </div>
            {showStory && (
                <p>
                    It was 94 fahrenheit outside, so {randomXItem} went for a walk. When they
                    got to {randomYItem}, they stared in horror for a few moments, then {randomZItem}.
                    {customName} saw the whole thing, but was not surprised — {randomXItem} weighs 300
                    pounds, and it was a hot day.
                </p>
            )}
        </>
    );
}