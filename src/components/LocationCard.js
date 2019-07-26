import React from "react";
import { Card, Icon, Image, Container } from "semantic-ui-react";

export default function LocationCard(props) {
  return (
    <Card size="large">
      {/* <Image src={props.imageSrc} wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          <span>{props.type}</span>
          {" - "}
          <span>{props.dimension}</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>{props.residents.length} residents</Card.Content>
    </Card>
  );
}