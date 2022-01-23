import React from 'react';

import {
    Col
} from "react-bootstrap";


const EducationCard = ({data}) => {
    return (
        <Col lg="4">
            <div className="pb-5 text-center">
                <img className="bg-light mb-3" src={data.schoolLogo} alt=""/>
                <p className="lead">
                    {data.school}
                    <br/>
                    {data.degree}
                    <br/>
                    {data.graduationDate}
                </p>

            </div>
        </Col>
    );
}

export default EducationCard;