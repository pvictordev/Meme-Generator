import React, {useState} from "react"
import memesData from "../memesData"

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState(" ")
    const [meme, setMeme] = React.useState({
        topText: '', 
        bottomText: '', 
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData); 

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prev => ({
            ...prev, 
            randomImage: url,
        }))
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prev=>({
            ...prev,
            [name]:value,
        }))
    }
   
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
         
            </div>
            <div className="meme">
                <img className="meme--image"src={meme.randomImage} alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}