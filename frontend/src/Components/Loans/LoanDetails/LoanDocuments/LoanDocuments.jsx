import React, { Fragment } from 'react';
import { toast } from 'react-toastify';
import Dropzone from 'react-dropzone-uploader';
import { Col, Card, Form, Row, Container, CardHeader, CardBody } from 'reactstrap';

import { P, H2 } from '../../../../AbstractElements';


const LoanDocuments = () => {
    const getUploadParams = ({ meta }) => {
        return { url: 'https://httpbin.org/post' };
    };
    const handleSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove());
        toast.success('Dropzone successfully submitted !');
    };

    return (
        <Fragment>
            <Container fluid={true}>
                <Card className='mb-0'>
                    <CardHeader className='d-fle'>
                        <H2 attrH6={{ className: 'mb-0' }}>{`Loan Documents`}</H2>
                        <P> <span className='text-light-info'>#31245 </span> <span className='badge badge-light-info'> Manual</span></P>
                    </CardHeader>
                    <CardBody className='pb-0'>
                        <Row>
                            <Col>
                                <Card>
                                    <Form>
                                        <div className="dz-message needsclick">
                                            <Dropzone
                                                getUploadParams={getUploadParams}
                                                onSubmit={handleSubmit}
                                                inputContent="Upload your documents"
                                                styles={{ dropzone: { minHeight: 300, maxHeight: 350 } }}
                                            />
                                        </div>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
}

export default LoanDocuments;