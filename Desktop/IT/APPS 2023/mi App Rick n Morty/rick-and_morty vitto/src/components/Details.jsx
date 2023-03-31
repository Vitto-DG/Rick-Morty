import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const Detail = () => {
    const { detailId } = useParams()

    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        const URL_BASE ="https://be-a-rym.up.railway.app/api";
        const KEY = "25c5421ab18e.53092debcfd09eaf66b7";

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
        setCharacter(response.data));
    }, []);

    return(
        <div>
            {character.name ? (
                <>
                <h2>{character.name}</h2>
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                <p>{character.origin?.name}</p>
                <img src={character.image} alt="img"/>
                </>
            ) : (
                <h3>Loading...</h3>
                )}
                <br/>
                <Link to="/home" >
                <button className="backButton">BACK</button>
            </Link>
                
        </div>
    )
}

export default Detail;
