import { useEffect, useState } from "react";

export default function App() {
    //   const [message, setMessage] = useState("");
    const [showStory, setShowStory] = useState(false);
    const [randomXItem, setRandomXItem] = useState("");
    const [randomYItem, setRandomYItem] = useState("");
    const [randomZItem, setRandomZItem] = useState("");
    useEffect(() => {
        (async () => {
            const response = await fetch("/.netlify/functions/hello");
            const data = await response.json();
            //   setMessage(data.message);
            // setShowStory(data.showStory);
            setRandomXItem(data.randomXItem);
            setRandomYItem(data.randomYItem);
            setRandomZItem(data.randomZItem);
        })();
    }, []);
    return (
        // <div>
        //   <h1>{message}</h1>
        // </div>
        <>
            <div>
                <label htmlFor="customname">Enter custom name:</label>
                <input type="text" placeholder="" />
            </div>
            <div>
                {/* <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} /> */}
            </div>
            <div>
                {/* <button onClick={(e) => { handleClick }}>Generate random story</button> */}
                {/* <button onClick={handleClick}>Generate random story</button> */}
                <button
                    onClick={async (event) => {
                        event.preventDefault();
                        const response = await fetch("/.netlify/functions/hello");
                        const data = await response.json();
                        setShowStory(true);
                        setRandomXItem(data.randomXItem);
                        setRandomYItem(data.randomYItem);
                        setRandomZItem(data.randomZItem);
                        console.log(data);
                    }}
                >
                    Generate random story
                </button>
            </div>
            {showStory && (
                <p>
                    It was 94 fahrenheit outside, so {randomXItem} went for a walk. When they
                    got to {randomYItem}, they stared in horror for a few moments, then {randomZItem}.
                    Bob saw the whole thing, but was not surprised — {randomXItem} weighs 300
                    pounds, and it was a hot day.
                </p>
            )}
        </>
    );
}