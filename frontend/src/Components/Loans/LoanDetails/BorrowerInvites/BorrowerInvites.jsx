import React, { Fragment, useState } from 'react';
import { Col, Card, Row, Container, CardHeader, CardBody } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { SlRefresh } from "react-icons/sl";
import { MdOutlineCancel } from "react-icons/md";

import { P, H2 } from '../../../../AbstractElements';

const dummydata = [
    {
        id: 1,
        name: 'Matthew',
        email: 'matthew@gmail.com',
        status: <span className='badge badge-light-danger'>Revoke</span>,
        sent_at: '12-04-2024',
        updated_at: '12-04-2024',
        date_accepted: '',
        icon: <SlRefresh size={22} />,
    },
    {
        id: 2,
        name: 'Jhone',
        email: 'jhone@gmail.com',
        status: <span className='badge badge-light-success'>Accepted</span>,
        sent_at: '11-04-2024',
        updated_at: '11-04-2024',
        date_accepted: '12-04-2024',
        icon: <MdOutlineCancel size={22} />,
    },
];


const BorrowerInvites = () => {
    const [data, setData] = useState(dummydata);
    const tableColumns = [
        {
            name: 'Recipient Name',
            selector: row => row['name'],
            sortable: true,
            center: false,
        },
        {
            name: 'Recipient Email',
            selector: row => `${row.email}`,
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
            name: 'Sent At',
            selector: row => `${row.sent_at}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Updated At',
            selector: row => `${row.updated_at}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Date Accepted',
            selector: row => `${row.date_accepted}`,
            sortable: true,
            center: true,
        },
        {
            // name: 'Date Accepted',
            selector: row => row['icon'],
            sortable: true,
            center: true,
        },
    ];

    return (
        <Fragment>
            <Container fluid={true}>
                <Card className='mb-0'>
                    <CardHeader>
                        <H2 attrH6={{ className: 'mb-0' }}>{`Borrower Invites`}</H2>
                        <P> <span className='text-light-info'>#31245 </span> <span className='badge badge-light-info'> Manual</span></P>
                    </CardHeader>
                    <CardBody className='pb-0'>
                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <DataTable
                                            data={data}
                                            columns={tableColumns}
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
    )
}

export default BorrowerInvites;