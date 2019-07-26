import React from "react";
import { Card, Icon, Image, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function LocationCard(props) {
    return (
        <Card style={{ height: "150px" }}>
            {/* <Image src={props.imageSrc} wrapped ui={false} /> */}
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Description>
                    <span>{props.episode}</span>
                    {" - "}
                    <span>{props.airdate}</span>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Link to="/characters">
                    {props.characters.length} characters
        </Link>
            </Card.Content>
        </Card>
    );
}