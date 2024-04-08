
import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Input } from 'reactstrap';
import { IoIosAdd } from "react-icons/io";
import Select from 'react-select';
import { Link } from 'react-router-dom';

import { Breadcrumbs, Btn, H6 } from '../../AbstractElements';
import LinksTableComponent from './LinksTableComponent';

import "../../assets/scss/pages/loans.css";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];


const Links = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');
    const handleSearchKeyword = (keyword) => {
        setSearchKeyword(keyword);
    };

    return (
        <Fragment>
            <Breadcrumbs parent="Home" title="Payment Links" mainTitle="Links" />
            <Link to={`${process.env.PUBLIC_URL}/app/payment-link/:layout`}>
                <Btn attrBtn={{ color: 'primary', className: 'btn pull-right flex items-center justify-center', type: 'submit' }}>
                    <IoIosAdd size={19} /> New Payment Link
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
                    </Row>
                </div>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <LinksTableComponent />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Links;