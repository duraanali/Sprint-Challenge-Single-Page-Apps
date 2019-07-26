import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from "semantic-ui-react";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(data => {
      // console.log(data);
      setCharacters(data.data.results);
    });
  }, []);

  return (
    <Container>
      <section className="character-list grid-view">
        {characters.map((character, index) => {
          return (
            <CharacterCard
              name={character.name}
              imageSrc={character.image}
              species={character.species}
              location={character.location.name}
              origin={character.origin.name}
              key={index}
            />
          );
        })}
      </section>
    </Container>
  );

}
