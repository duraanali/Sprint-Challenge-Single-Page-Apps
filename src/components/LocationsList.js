import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import { Grid, Container } from "semantic-ui-react";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location/").then(data => {
            //   console.log('location data',data);
            setLocations(data.data.results);
        });
    }, []);

    return (
        <Container style={containerStyle}>
            {locations.map((location, index) => {
                return (
                    <LocationCard
                        name={location.name}
                        type={location.type}
                        dimension={location.dimension}
                        residents={location.residents}
                    />
                );
            })}
        </Container>
    );
}

const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: 'center',
};