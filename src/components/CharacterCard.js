import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CharacterCard = props => (
  <Card>
    <Image src={props.imageSrc} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span>{props.species}</span>
      </Card.Meta>
      <Card.Description>
        Location: {props.location}
        <br />
        Origin: {props.origin}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link to="/episodes">
        <Icon name="user" />
        Episodes
      </Link>
    </Card.Content>
  </Card>
);

export default CharacterCard;