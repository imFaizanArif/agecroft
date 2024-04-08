import React, { Fragment, useState } from 'react';
import { Col, Card, Collapse, CardBody, Row, CardHeader } from 'reactstrap';
import { ChevronDown, ChevronUp } from 'react-feather';

import { Btn, H5 } from '../../../../AbstractElements';


const LeftBar = () => {
    const [isProfile, setisProfile] = useState(true);
    const [isProfile2, setisProfile2] = useState(false);
    const [isProfile3, setisProfile3] = useState(false);
    const [isProfile4, setisProfile4] = useState(false);
    const [isProfile5, setisProfile5] = useState(false);

    return (
        <Fragment>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: 'mb-0' }}>
                            <Btn attrBtn={{ className: 'd-flex justify-content-between', color: 'link', onClick: () => setisProfile(!isProfile) }}>
                                Loan Details
                                {isProfile ? <ChevronUp className='m-0' /> : <ChevronDown className='m-0' />}
                            </Btn>
                        </H5>
                    </CardHeader>
                    <Collapse isOpen={isProfile}>
                        <CardBody className='socialprofile filter-cards-view'>
                            <Row className='details'>
                                <Col xs='6'>
                                    <span>Financed Amount </span>
                                </Col>
                                <Col xs='6' >
                                    $123,000.00
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span>{`# of Payments`}</span>
                                </Col>
                                <Col xs='6' >
                                    {`100`}
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span>{`Interest Rate`}</span>
                                </Col>
                                <Col xs='6' >
                                    {`0.00%`}
                                </Col>
                                <Col xs='6'>
                                    <span>Days Interest</span>
                                </Col>
                                <Col xs='6' >
                                    360 Days
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span>{`Accrued Interest`}</span>
                                </Col>
                                <Col xs='6' >
                                    {`$0`}
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span>{`Regular Payments`}</span>
                                </Col>
                                <Col xs='6' >
                                    {`$1,230.00 Monthly`}
                                </Col>
                                <Col xs='6'>
                                    <span>Late Fee</span>
                                </Col>
                                <Col xs='6' >
                                    $25.00 (after 5 days)
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span>{`Default Period`}</span>
                                </Col>
                                <Col xs='6' >
                                    {`35 Days`}
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span>{`Interest Start`}</span>
                                </Col>
                                <Col xs='6' >
                                    {`26-Mar-2024`}
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span>{`Payments Start`}</span>
                                </Col>
                                <Col xs='6' >
                                    {`27-Apr-2024`}
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span>{`Maturity Date`}</span>
                                </Col>
                                <Col xs='6' >
                                    {`27-Aug-2032`}
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span className='text-primary'>{`Edit`}</span>
                                </Col>
                            </Row>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: 'mb-0' }}>
                            <Btn attrBtn={{ className: 'd-flex justify-content-between', color: 'link', onClick: () => setisProfile2(!isProfile2) }}>
                                Monthly Fees
                                {isProfile2 ? <ChevronUp className='m-0' /> : <ChevronDown className='m-0' />}
                            </Btn>
                        </H5>
                    </CardHeader>
                    <Collapse isOpen={isProfile2}>
                        <CardBody className='socialprofile filter-cards-view'>
                            <Row className='details'>
                                <Col xs='6'>
                                    <span>Description</span>
                                </Col>
                                <Col xs='6' >
                                    Amount
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span className='text-primary'>{`Edit`}</span>
                                </Col>
                            </Row>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: 'mb-0' }}>
                            <Btn attrBtn={{ className: 'd-flex justify-content-between', color: 'link', onClick: () => setisProfile3(!isProfile3) }}>
                                Transaction Fees
                                {isProfile3 ? <ChevronUp className='m-0' /> : <ChevronDown className='m-0' />}
                            </Btn>
                        </H5>
                    </CardHeader>
                    <Collapse isOpen={isProfile3}>
                        <CardBody className='socialprofile filter-cards-view'>
                            <Row className='details'>
                                <Col xs='6'>
                                    <span>Description</span>
                                </Col>
                                <Col xs='6' >
                                    Transaction Fee
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span className='text-primary'>{`Edit`}</span>
                                </Col>
                            </Row>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: 'mb-0' }}>
                            <Btn attrBtn={{ className: 'd-flex justify-content-between', color: 'link', onClick: () => setisProfile4(!isProfile4) }}>
                                Loan Documents
                                {isProfile4 ? <ChevronUp className='m-0' /> : <ChevronDown className='m-0' />}
                            </Btn>
                        </H5>
                    </CardHeader>
                    <Collapse isOpen={isProfile4}>
                        <CardBody className='socialprofile filter-cards-view'>
                            <Row className='details'>
                                <Col xs='6'>
                                    <span>Description</span>
                                </Col>
                                <Col xs='6' >
                                    Amount
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span className='text-primary'>{`Voew All Documents`}</span>
                                </Col>
                            </Row>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xl="12">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: 'mb-0' }}>
                            <Btn attrBtn={{ className: 'd-flex justify-content-between', color: 'link', onClick: () => setisProfile5(!isProfile5) }}>
                                Contact Information
                                {isProfile5 ? <ChevronUp className='m-0' /> : <ChevronDown className='m-0' />}
                            </Btn>
                        </H5>
                    </CardHeader>
                    <Collapse isOpen={isProfile5}>
                        <CardBody className='socialprofile filter-cards-view'>
                            <Row className='details'>
                                <Col xs='6'>
                                    <span>Test Purpose</span>
                                </Col>
                                <Col xs='6' >
                                    Test Purpse
                                </Col>
                                <Col xs='6'>
                                    <span>Email</span>
                                </Col>
                                <Col xs='6' >
                                    {' '}
                                    jhon@gmail.com
                                </Col>
                                <Col xs='6'>
                                    {' '}
                                    <span className='text-primary'>{`Edit`}</span>
                                </Col>
                            </Row>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
        </Fragment>
    );
};

export default LeftBar;