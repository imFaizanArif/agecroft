import React, { Fragment, useState } from 'react';
import { Col, Card, Row, Container, CardHeader, CardBody, Collapse } from 'reactstrap';
import { ChevronDown, ChevronUp } from 'react-feather';
import DataTable from 'react-data-table-component';

import LeftBar from './LeftBar';
import Widgets1 from '../../../Common/CommonWidgets/Widgets1';
import { WidgetsData, WidgetsData2, WidgetsData3, WidgetsData4 } from '../../../../Data/DefaultDashboard';
import { Btn, P, H5, H2 } from '../../../../AbstractElements';

const dummydata = [
    {
        id: 1,
        transaction: 'Manual 04-Apr-2025',
        status: <span className='badge badge-light-success text-success'>Complete</span>,
        amount: '$121,650.00',
        submmited: '$21,650.00',
    },
];


const LoanOverview = () => {
    const [data, setData] = useState(dummydata);
    const [isProfile1, setisProfile1] = useState(true);
    const [isProfile2, setisProfile2] = useState(false);
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
                        <H2 attrH6={{ className: 'mb-0' }}>{`Loan Overview`}</H2>
                        <P> <span className='text-light-info'>#31245 </span> <span className='badge badge-light-info'> Manual</span></P>
                    </CardHeader>
                    <CardBody className='pb-0'>
                        <Row className={`widget-grid`}>
                            <Row xxl='auto' xl='2' sm='6' className='box-col-2'>
                                <Col>
                                    <Widgets1 data={WidgetsData} />
                                </Col>
                                <Col>
                                    <Widgets1 data={WidgetsData2} />
                                </Col>
                            </Row>
                            <Row xxl='auto' xl='2' sm='6' className='box-col-2'>
                                <Col>
                                    <Widgets1 data={WidgetsData3} />
                                </Col>
                                <Col>
                                    <Widgets1 data={WidgetsData4} />
                                </Col>
                            </Row>
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
                        <Row>
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
                            <Col xl="3 xl-40 box-col-2" lg="12" md="5">
                                <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc4">
                                    <Row>
                                        <LeftBar />
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
}

export default LoanOverview;