
import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Input } from 'reactstrap';
import Select from 'react-select';

import { Breadcrumbs } from '../../AbstractElements';
import ReportsTableComponent from './ReportsTableComponent';
import "../../assets/scss/pages/loans.css";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];


const Reports = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');
    const handleSearchKeyword = (keyword) => {
        setSearchKeyword(keyword);
    };
    return (
        <Fragment>
            <Breadcrumbs parent="Home" title="Reports" mainTitle="Reports Activity" />
            <Container fluid={true}>
                <div className='product-grid'>
                    <Row className='feature-products'>
                        <Col xl="3" md="6">
                            <div className={`product-sidebar open}`}>
                                <div className="filter-section">
                                    <Card>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={options}
                                        />
                                    </Card>
                                </div>
                            </div>
                        </Col>
                        <Col xl="3" md="6">
                            <div className="product-search">
                                <Form>
                                    <FormGroup className="m-0 form-group search-product">
                                        <Input className="form-control" type="text" placeholder="search"
                                            defaultValue={searchKeyword}
                                            onChange={(e) => handleSearchKeyword(e.target.value)} />
                                        <i className="fa fa-search"></i>
                                    </FormGroup>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <ReportsTableComponent />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Reports;