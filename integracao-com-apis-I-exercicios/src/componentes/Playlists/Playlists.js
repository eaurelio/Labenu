import React, {  useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";
import axios from 'axios'

const playlistsLocal = [
    {
        id: 1,
        name: "Playlist 1"
    },
    {
        id: 2,
        name: "Playlist 2"
    },
    {
        id: 3,
        name: "Playlist 3"
    },
    {
        id: 4,
        name: "Playlist 4"
    },
]
function Playlists() {
    const [playlists, setPlaylists] = useState(playlistsLocal)


    const playlistsLocal2 = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
    headers: {
        Authorization: "nome-sobrenome-turma"
    }
})

    playlistsLocal2.then(response => {
        // console.log(response.data.result.list)
        setPLayEds(response.data.result.list)
    })

    const [playEds, setPLayEds] = useState(playlistsLocal2)
  
    return (
        <div>
            {playlists.map((playlist) => {
                return <Musicas key={playlist.id} playlist={playlist}/>
            })}

        </div>
    );
}

export default Playlists;
