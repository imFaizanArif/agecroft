import React, { Fragment, useState } from 'react';
import { Col, Card, Row, Container, CardHeader, CardBody } from 'reactstrap';
import DataTable from 'react-data-table-component';

import { P, H2 } from '../../../../AbstractElements';

const dummydata = [
    {
        id: 1,
        date: '12-04-2024',
        event: 'Principal Entry',
        principal: '($1,350.00)',
        interest: '-',
        fees: '-',
        principal_balance: '$121,650.00',
    },
    {
        id: 2,
        date: '12-05-2024',
        event: 'Principal Entry',
        principal: '$123,000.00',
        interest: '-',
        fees: '-',
        principal_balance: '$123,000.00',
    },
];

const LedgerEntries = () => {
    const [data, setData] = useState(dummydata);
    const tableColumns = [
        {
            name: 'Date',
            selector: row => `${row.date}`,
            sortable: true,
            center: false,
        },
        {
            name: 'Event',
            selector: row => `${row.event}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Principal',
            selector: row => `${row.principal}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Interest',
            selector: row => `${row.interest}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Fees',
            selector: row => `${row.fees}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Principal Balance',
            selector: row => `${row.principal_balance}`,
            sortable: true,
            center: true,
        },
    ];

    return (
        <Fragment>
            <Container fluid={true}>
                <Card className='mb-0'>
                    <CardHeader className='d-fle'>
                        <H2 attrH6={{ className: 'mb-0' }}>{`Ledger Entries`}</H2>
                        <P> <span className='text-light-info'>#31245 </span> <span className='badge badge-light-info'> Manual</span></P>
                    </CardHeader>
                    <CardBody className='pb-0'>
                        <Row>
                            <Col>
                                <Card>
                                    <DataTable
                                        data={data}
                                        columns={tableColumns}
                                        striped={true}
                                        center={true}
                                        pagination
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
}

export default LedgerEntries;