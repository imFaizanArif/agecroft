import React, { Fragment, useState } from 'react';
import { Col, Card, Row, Container, CardHeader, CardBody } from 'reactstrap';
import DataTable from 'react-data-table-component';
import Select from 'react-select';

import { P, H2 } from '../../../../AbstractElements';

const dummydata = [
    {
        id: 1,
        name: 'Loan invite confirmation for #31668',
        transaction: 'jonesmatr@gmail.com',
        sent_at: '12-04-2024',
        opened_at: 'Not opened',
        clicked_at: 'Not clicked',
    },
];
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];


const MessageHistory = () => {
    const [data, setData] = useState(dummydata);
    const [selectedOption, setSelectedOption] = useState(null);
    const tableColumns = [
        {
            name: 'Description',
            selector: row => row['name'],
            sortable: true,
            center: false,
        },
        {
            name: 'Recipient',
            selector: row => `${row.transaction}`,
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
            name: 'Opened At',
            selector: row => `${row.opened_at}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Clicked At',
            selector: row => `${row.clicked_at}`,
            sortable: true,
            center: true,
        },
    ];

    return (
        <Fragment>
            <Container fluid={true}>
                <Card className='mb-0'>
                    <CardHeader>
                        <H2 attrH6={{ className: 'mb-0' }}>{`Message History`}</H2>
                        <P> <span className='text-light-info'>#31245 </span> <span className='badge badge-light-info'> Manual</span></P>
                    </CardHeader>
                    <CardBody className='pb-0'>
                        <Row>
                            <Col>
                                <Card className='w-25'>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                        placeholder={"Search"}
                                        className='filter-section'
                                    />
                                </Card>
                            </Col>
                        </Row>
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
    );
}

export default MessageHistory;