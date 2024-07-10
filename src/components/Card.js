import {
  border,
  color,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Card.css";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <div className="card">
      <Image src={imageSrc} style={{ borderRadius: "0 0 20px 20px" }} />
      <div className="textArea">
        <Heading
          as="h3"
          size="sm"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          {title}
        </Heading>
        <Text>{description}</Text>
        <p style={{ paddingTop: "2%" }}>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </p>
      </div>
    </div>
  );
};

export default Card;
