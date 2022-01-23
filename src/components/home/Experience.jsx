import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Experience = ({experience}) => {
    return (
        <Jumbotron fluid id="experience" className="bg-white m-0">
            <Container>
                <h2 className="display-4 mb-5 text-center">
                    {experience.heading}
                </h2>
                <Row>
                    {
                        experience.data.map(data => {
                            return <ExperienceCard key={data.company} data={data} />
                        })
                    }
                </Row>
            </Container>
        </Jumbotron>
    );
}
 
export default Experience;