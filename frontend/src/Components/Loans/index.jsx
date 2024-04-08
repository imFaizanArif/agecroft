
import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Input } from 'reactstrap';
import { IoIosAdd } from "react-icons/io";
import Select from 'react-select';
import { Link } from 'react-router-dom';

import { Breadcrumbs, Btn, H6 } from '../../AbstractElements';
import LoansTableComponent from './LoansTableComponent';
import "../../assets/scss/pages/loans.css";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];


const Loans = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');
    const handleSearchKeyword = (keyword) => {
        setSearchKeyword(keyword);
    };

    return (
        <Fragment>
            <Breadcrumbs parent="Table" title="Loans" mainTitle="Loans" />
            <Link to={`${process.env.PUBLIC_URL}/app/loans/draft:layout`}>
                <Btn attrBtn={{ color: 'primary', className: 'btn pull-right flex items-center justify-center', type: 'submit' }}>
                    <IoIosAdd size={19} /> New Loan
                </Btn>
            </Link>
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
                        <Col xl="3" md="6">
                            <div className={`product-sidebar open`}>
                                <div className="filter-sectio">
                                    <Card className='h-9'>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={options}
                                            placeholder={"As Lender"}
                                            className='filter-section'
                                        />
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <LoansTableComponent />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Loans;