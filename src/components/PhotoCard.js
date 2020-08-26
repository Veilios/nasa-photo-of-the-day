import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function PhotoCard(){
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=xAujD2BeyWCSMUQqEKtZ0raan7NZyWL1gSkUeRIt&date=2020-04-22`)
        .then((res) => {
            console.log("Res: ", res);
            setPhoto(res.data);
        })
        .catch((err) => {
            console.log("Error Occurred: ", err);
        });
    }, []);

    return (
        <div className="photocard">
            <h2>{photo.title}</h2>
            <img src={photo.url}></img>
            <p>{photo.date}</p>
            <p>{photo.explanation}</p>
        </div>
    )
}