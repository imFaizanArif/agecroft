import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import { H3, H5, Image } from '../../../../../AbstractElements';
import { JOHANDIO } from '../../../../../Constant';

const UserTitle = ({ title }) => {
    return (
        <Fragment>
            <Row>
                <Col sm="8">
                    <div className="media">
                        <div className="media-body align-self-center">
                            <H3 attrH5={{ className: "mt-0 user-name" }} >{title}</H3>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default UserTitle;