// import { useState } from "react";

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

export default async () => {
    // const data = {
    //   message: "Hello, World!",
    // };
    // return new Response(JSON.stringify(data));
    
    // const [showStory, setShowStory] = useState(false);
    const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItems = ["the soup kitchen", "Disneyland", "the White House"];
    const zItems = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
    
    // const [randomXItem, setRandomXItem] = useState("");
    // const [randomYItem, setRandomYItem] = useState("");
    // const [randomZItem, setRandomZItem] = useState("");
    // const showStory = false;
    const randomXItem = randomValueFromArray(xItems);
    const randomYItem = randomValueFromArray(yItems);
    const randomZItem = randomValueFromArray(zItems);

    
    // setShowStory(true);
    // setRandomXItem(randomValueFromArray(xItems));
    // setRandomYItem(randomValueFromArray(yItems));
    // setRandomZItem(randomValueFromArray(zItems));

    const data = {
        // showStory: showStory,
        randomXItem: randomXItem,
        randomYItem: randomYItem,
        randomZIten: randomZItem,
    }

    // return new Response(JSON.stringify(randomXItem), JSON.stringify(randomYItem), JSON.stringify(randomZItem)); 
    return new Response(JSON.stringify(data));

};