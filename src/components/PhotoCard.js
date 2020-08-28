import React, { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import PhotoInfo from './PhotoInfo';
import axios from "axios";


export default function PhotoCard(){
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=4jBt7EYXvUEiUX7IVpZ94uan5XfDyq278NDwhdtG&date=2020-02-20`)
        .then((res) => {
            console.log("Res: ", res);
            setPhoto(res.data);
        })
        .catch((err) => {
            console.log("Error Occurred: ", err);
        });
    }, []);
    if (!photo.hdurl) return <h3>Loading...
        <Spinner size="sm" color="primary" />{' '}
        </h3>; return (
        <div className="photocard">
            <h2>{photo.title}</h2>
            <a href={photo.hdurl}><img src={photo.hdurl} alt="Nasa Photo of the Day"></img></a>
            <h4>{photo.date}</h4>
            <PhotoInfo explanation={photo.explanation}/>
        </div>
    )
}