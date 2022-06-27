import React from "react";
import './Meme.css';
import { useState } from "react";
import { useEffect } from "react";

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemes, setAllMemes] = useState([]);


    useEffect(() =>{
         
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    },[])



    function getMemeImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length);

        const url = allMemes[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }


    const handleChange = (e) =>{
       const {name,value} = e.target;
       setMeme(prevMeme =>({
          ...prevMeme,
          [name] : value
       }))
    };


    return (
        <main>
            <div className="form" >
                <input
                 type="text"
                  placeholder="Enter top text..."
                 className="form-inputs"
                 name="topText"
                 value={meme.topText}
                 onChange={handleChange}
                />
                <input
                 type="text"
                 placeholder="Enter bottom text..."
                 className="form-inputs" 
                 name="bottomText"
                 value={meme.bottomText}
                 onChange={handleChange}
                />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image here</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="memeimg" className="meme_image" />
                <h2 className="meme_text top">{meme.topText}</h2>
                <h2 className="meme_text bottom">{meme.bottomText}</h2>
            </div>
        </main>

    )
};

export default Meme;