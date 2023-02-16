import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services";
import {Album} from "../Album/Album";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAllAlbums().then(({data}) => setAlbums([...data]))
    }, []);

    return (
        <div className='albums'>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};