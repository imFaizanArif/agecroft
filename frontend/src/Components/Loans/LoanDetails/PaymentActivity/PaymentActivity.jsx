import React, { Fragment, useState } from 'react';
import { Col, Card, Row, Container, CardHeader, CardBody, Collapse } from 'reactstrap';
import DataTable from 'react-data-table-component';

import { Btn, P, H5, H2 } from '../../../../AbstractElements';
import { ChevronDown, ChevronUp } from 'react-feather';

const dummydata = [
    {
        id: 1,
        transaction: 'Manual 04-Apr-2025',
        status: <span className='badge badge-light-success text-success'>Complete</span>,
        amount: '$121,650.00',
        submmited: '$21,650.00',
        posted: '12-04-2024',
    },
];


const PaymentActivity = () => {
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
        {
            name: 'Posted',
            selector: row => `${row.posted}`,
            sortable: true,
            center: true,
        },
    ];
    return (
        <Fragment>
            <Container fluid={true}>
                <Card className='mb-0'>
                    <CardHeader className='d-fle'>
                        <H2 attrH6={{ className: 'mb-0' }}>{`Payment Activity`}</H2>
                        <P> <span className='text-light-info'>#31245 </span> <span className='badge badge-light-info'> Manual</span></P>
                    </CardHeader>
                    <CardBody className='pb-0'>
                        <Row>
                            <Col>
                                <Card>
                                    <CardHeader className='p-0 py-2 rounded'>
                                        <H5 attrH5={{ className: 'mb-0' }}>
                                            <Btn attrBtn={{ className: 'd-flex justify-content-between text-decoration-none text-dark w-100', color: 'link', onClick: () => setisProfile2(!isProfile2) }}>
                                                Payment History
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

export default PaymentActivity;