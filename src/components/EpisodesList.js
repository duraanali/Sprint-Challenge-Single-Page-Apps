import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import { Container } from 'semantic-ui-react';

export default function LocationsList() {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/')
            .then((data) => {
                console.log('episode data', data);
                setEpisodes(data.data.results);
            }
            )
    }, [])


    return (
        <Container style={containerStyle}>
            {episodes.map((episode, index) => {
                return <EpisodeCard name={episode.name} episode={episode.episode} airdate={episode.air_date} characters={episode.characters} />
            }
            )}
        </Container>
    )
}

const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: 'center',
};