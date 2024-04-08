import React, { Fragment, useState } from 'react';
import { Col, Card, Form, FormGroup, Label, Row, Container, Input, CardHeader, CardBody, Collapse, Media } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { ChevronDown, ChevronUp } from 'react-feather';

import { Btn, P, H5, H2, H6 } from '../../../../AbstractElements';

const dummydata = [
    {
        id: 1,
        transaction: 'Manual 04-Apr-2025',
        status: <span className='badge badge-light-success text-success'>Complete</span>,
        amount: '$121,650.00',
        submmited: '$21,650.00',
    },
];


const RecordCreditNote = () => {
    const [data, setData] = useState(dummydata);
    const [isProfile2, setisProfile2] = useState(true);
    const tableColumns = [
        {
            name: 'Transaction',
            selector: row => `${row.transaction}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Status',
            selector: row => row['status'],
            sortable: true,
            center: true,
        },
        {
            name: 'Amount',
            selector: row => `${row.amount}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Submmited',
            selector: row => `${row.submmited}`,
            sortable: true,
            center: true,
        },
    ];

    return (
        <Fragment>
            <Container fluid={true}>
                <Card className='mb-0'>
                    <CardHeader>
                        <H2 attrH6={{ className: 'mb-0' }}>{`Record Credit Note`}</H2>
                        <P> <span className='text-light-info'>#31245 </span> <span className='badge badge-light-info'> Manual</span></P>
                    </CardHeader>
                    <CardBody className='pb-0'>
                        <Row>
                            <div className="user-profile">
                                <Col sm="12" >
                                    <Card className="step5" data-intro="This is the your first Post">
                                        <div className="profile-img-style">
                                            <Row>
                                                <Col>
                                                    <div className="media">
                                                        <div className="media-body align-self-center">
                                                            <H5>Credit Note</H5>
                                                            <P>When you need to record a payment, add a credit note. No actual charge is attempted.
                                                                <br />
                                                                This enables recording funds received via cash, money order, paper check, wire transfer, and other alternate methods.
                                                            </P>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Form className='theme-form'>
                                                <Row >
                                                    <Col>
                                                        <FormGroup>
                                                            <Col lg="6">

                                                                <Label>Payment Amount</Label>
                                                                <input className="form-control" type="text" name="text" placeholder="$" />
                                                            </Col>
                                                            <P>Regular scheduled payments are $1,230.00 monthly, due monthly</P>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Col>
                                                    <Row>
                                                        <Card>
                                                            <Media className='p-20'>
                                                                <div className='radio radio-primary me-3'>
                                                                    <Input id='radio14' type='radio' name='radio1' value='option1' />
                                                                    <Label for='radio14'></Label>
                                                                </div>
                                                                <Media body>
                                                                    <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>
                                                                        Submit $1,230.00 due 27-Apr-2024
                                                                    </H6>
                                                                    <p style={{ fontSize: "12px", lineHeight: "20px" }}>
                                                                        $1,230.00 is the outstanding balance due 27-Apr-2024 <br />
                                                                        Apply $1,230.00 to scheduled payment <br />
                                                                        No payment should be due 27-Apr-2024 </p>
                                                                </Media>
                                                            </Media>
                                                        </Card>
                                                    </Row>
                                                    <Row>
                                                        <Card>
                                                            <Media className='p-20'>
                                                                <div className='radio radio-secondary me-3'>
                                                                    <Input id='radio13' type='radio' name='radio1' value='option1' />
                                                                    <Label for='radio13'></Label>
                                                                </div>
                                                                <Media body>
                                                                    <H6 className='mt-0 mega-title-badge'>
                                                                        Submit $1,230.00 as extra payment only
                                                                    </H6>
                                                                    <p style={{ fontSize: "12px", lineHeight: "20px" }}>Apply $1,230.00 as extra payment <br />
                                                                        $1,230.00 should be due 27-Apr-2024</p>
                                                                </Media>
                                                            </Media>
                                                        </Card>
                                                    </Row>
                                                </Col>
                                                <Row>
                                                    <Col>
                                                        <FormGroup>
                                                            <Label>Payment Memo</Label>
                                                            <input className="form-control" type="text" name="text" placeholder="Manual Payment for 01-Apr-2024" />
                                                            <P>Specify a memo/description for your reference.</P>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <br />
                                                <Row>
                                                    <Col>
                                                        <div className='text-end'>
                                                            <Btn attrBtn={{ color: 'success' }}>
                                                                Review Credit Note
                                                            </Btn>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </Card>
                                </Col>
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <CardHeader className='p-0 py-2 rounded'>
                                        <H5 attrH5={{ className: 'mb-0' }}>
                                            <Btn attrBtn={{ className: 'd-flex justify-content-between text-decoration-none text-dark w-100', color: 'link', onClick: () => setisProfile2(!isProfile2) }}>
                                                Recent Payment
                                                {isProfile2 ? <ChevronUp className='m-0 ml-auto text-decoration-none text-dark' /> : <ChevronDown className='m-0 ml-auto text-decoration-none text-dark' />}
                                            </Btn>
                                        </H5>
                                    </CardHeader>
                                    <Collapse isOpen={isProfile2}>
                                        <CardBody className='socialprofile filter-cards-view'>
                                            <DataTable
                                                data={data}
                                                columns={tableColumns}
                                                striped={true}
                                                center={true}
                                                pagination
                                            />
                                        </CardBody>
                                    </Collapse>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
}

export default RecordCreditNote;