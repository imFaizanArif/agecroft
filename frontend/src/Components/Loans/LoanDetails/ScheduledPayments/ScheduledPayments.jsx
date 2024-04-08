import React, { Fragment, useState } from 'react';
import { Col, Card, Row, Container, CardHeader, CardBody, Collapse } from 'reactstrap';
import { ChevronDown, ChevronUp } from 'react-feather';
import DataTable from 'react-data-table-component';

import { Btn, P, H5, H2, H6 } from '../../../../AbstractElements';

const dummydata1 = [
    {
        id: 1,
        name: 'No Transcation',
        amount: '',
        due_date: '',
    },
];
const dummydata2 = [
    {
        id: 1,
        date: '12-04-2024',
        payment: '$123,000.00',
        principal: '$123,000.00',
        interest: '$0.00',
        fees: '$0.00',
        projected_balance: '$120,420.00',
    },
    {
        id: 2,
        date: '12-04-2024',
        payment: '$123,000.00',
        principal: '$123,000.00',
        interest: '$0.00',
        fees: '$0.00',
        projected_balance: '$120,420.00',
    },
    {
        id: 3,
        date: '12-05-2024',
        payment: '$123,000.00',
        principal: '$123,000.00',
        interest: '$0.00',
        fees: '$0.00',
        projected_balance: '$119,190.00',
    },
    {
        id: 4,
        date: '12-06-2024',
        payment: '$123,000.00',
        principal: '$123,000.00',
        interest: '$0.00',
        fees: '$0.00',
        projected_balance: '$117,960.00',
    },
];


const ScheduledPayments = () => {
    const [data1, setData1] = useState(dummydata1);
    const [data2, setData2] = useState(dummydata2);
    const [isProfile1, setisProfile1] = useState(true);
    const [isProfile2, setisProfile2] = useState(true);
    const tableColumns1 = [
        {
            name: 'Name',
            selector: row => row['name'],
            sortable: true,
            center: false,
        },
        {
            name: 'Amount',
            selector: row => `${row.amount}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Due Date',
            selector: row => `${row.due_date}`,
            sortable: true,
            center: true,
        },
    ];
    const tableColumns2 = [
        {
            name: 'DATE',
            selector: row => `${row.date}`,
            sortable: true,
            center: false,
        },
        {
            name: 'PAYMENT',
            selector: row => `${row.payment}`,
            sortable: true,
            center: true,
        },
        {
            name: 'PRINCIPAL',
            selector: row => `${row.principal}`,
            sortable: true,
            center: true,
        },
        {
            name: 'INTEREST',
            selector: row => `${row.interest}`,
            sortable: true,
            center: true,
        },
        {
            name: 'FEES',
            selector: row => `${row.fees}`,
            sortable: true,
            center: true,
        },
        {
            name: 'PROJECTED BALANCE',
            selector: row => `${row.projected_balance}`,
            sortable: true,
            center: true,
        },
    ];

    return (
        <Fragment>
            <Container fluid={true}>
                <Card className='mb-0'>
                    <CardHeader>
                        <H2 attrH6={{ className: 'mb-0' }}>{`Scheduled Payments`}</H2>
                        <P> <span className='text-light-info'>#31245 </span> <span className='badge badge-light-info'> Manual</span></P>
                    </CardHeader>
                    <CardBody className='pb-0'>
                        {/* Scheduled Payment */}
                        <Row>
                            <Col>
                                <Col>
                                    <Card>
                                        <CardHeader className='p-0 py-2 rounded'>
                                            <H5 attrH5={{ className: 'mb-0' }}>
                                                <Btn attrBtn={{ className: 'd-flex justify-content-between text-decoration-none text-dark w-100', color: 'link', onClick: () => setisProfile1(!isProfile1) }}>
                                                    Scheduled Payment
                                                    {isProfile1 ? <ChevronUp className='m-0 ml-auto text-decoration-none text-dark' /> : <ChevronDown className='m-0 ml-auto text-decoration-none text-dark' />}
                                                </Btn>
                                            </H5>
                                        </CardHeader>
                                        <Collapse isOpen={isProfile1}>
                                            <CardBody className='socialprofile filter-cards-view'>
                                                <P>No payments scheduled. Add a payment method to schedule payments.</P>
                                            </CardBody>
                                        </Collapse>
                                    </Card>
                                </Col>
                            </Col>
                        </Row>
                        {/* Current Payment */}
                        <Row>
                            <Col>
                                <Col>
                                    <Card>
                                        <CardHeader className='p-0 py-2 rounded'>
                                            <H5 attrH5={{ className: 'mb-0' }}>
                                                <Btn attrBtn={{ className: 'd-flex justify-content-between text-decoration-none text-dark w-100', color: 'link', onClick: () => setisProfile2(!isProfile2) }}>
                                                    Current Payment
                                                    {isProfile2 ? <ChevronUp className='m-0 ml-auto text-decoration-none text-dark' /> : <ChevronDown className='m-0 ml-auto text-decoration-none text-dark' />}
                                                </Btn>
                                            </H5>
                                        </CardHeader>
                                        <Collapse isOpen={isProfile2}>
                                            <CardBody className='socialprofile filter-cards-view'>
                                                <P>No payments scheduled. Add a payment method to schedule payments.</P>
                                            </CardBody>
                                        </Collapse>
                                    </Card>
                                </Col>
                            </Col>
                        </Row>
                        {/* Previous Payment */}
                        <Row>
                            <Col>
                                <Col>
                                    <Card>
                                        <CardHeader className='p-0 py-2 rounded'>
                                            <H5 attrH5={{ className: 'mb-0' }}>
                                                <Btn attrBtn={{ className: 'd-flex justify-content-between text-decoration-none text-dark w-100', color: 'link', onClick: () => setisProfile2(!isProfile2) }}>
                                                    Previous Payment
                                                    {isProfile2 ? <ChevronUp className='m-0 ml-auto text-decoration-none text-dark' /> : <ChevronDown className='m-0 ml-auto text-decoration-none text-dark' />}
                                                </Btn>
                                            </H5>
                                        </CardHeader>
                                        <Collapse isOpen={isProfile2}>
                                            <DataTable
                                                data={data1}
                                                columns={tableColumns1}
                                                striped={true}
                                                center={true}
                                                pagination
                                            />
                                        </Collapse>
                                    </Card>
                                </Col>
                            </Col>
                        </Row>
                        {/* Future Payments */}
                        <Row>
                            <Col>
                                <H6><i className="fa fa-calendar"></i> Future Payments</H6>
                                <Card>
                                    <CardBody className='socialprofile filter-cards-view'>
                                        <DataTable
                                            data={data2}
                                            columns={tableColumns2}
                                            striped={true}
                                            center={true}
                                            pagination
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
}

export default ScheduledPayments;