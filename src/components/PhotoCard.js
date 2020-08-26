import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function PhotoCard(){
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=xAujD2BeyWCSMUQqEKtZ0raan7NZyWL1gSkUeRIt&date=`)
        .then((res) => {
            console.log("Res: ", res);
            setPhoto(res.data);
        })
        .catch((err) => {
            console.log("Error Occurred: ", err);
        });
    }, []);
    if (!photo.hdurl) return <h3>Loading...</h3>; return (
        <div className="photocard">
            <h2>{photo.title}</h2>
            <a href={photo.hdurl}><img src={photo.hdurl} alt="Nasa Photo of the Day"></img></a>
            <h4>{photo.date}</h4>
            <p>{photo.explanation}</p>
        </div>
    )
}