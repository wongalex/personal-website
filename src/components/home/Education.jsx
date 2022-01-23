import React from 'react';
import EducationCard from "./EducationCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Education = ({education}) => {
    return (
        <Jumbotron fluid id="education" className="bg-light m-0">
            <Container>
                <h2 className="display-4 mb-5 text-center">
                    {education.heading}
                </h2>
                <Row>
                    {
                        education.data.map(data => {
                            return <EducationCard key={data.school} data={data} />
                        })
                    }
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Education;