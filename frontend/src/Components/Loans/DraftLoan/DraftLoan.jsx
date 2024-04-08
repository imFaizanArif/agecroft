import React, { Fragment, useState } from 'react';
import { Col, Card, Form, FormGroup, Label, Row, Container, Input } from 'reactstrap';

import { Btn, P, Breadcrumbs, H5 } from '../../../AbstractElements';
import "../../../assets/scss/components/draftLoan.css";

const firstComponent = () => {
    return <div>First Component</div>
}
const secondComponent = () => {
    return <div>Second Component</div>
}
const thirdComponent = () => {
    return <div>Third Component</div>
}
const finalComponent = () => {
    return <div>Final Component</div>
}
const DraftLoan = () => {
    const multiple = false;
    const [options, setOptions] = useState([]);
    const [steps, setSteps] = useState([
        { key: 'firstStep', label: 'My First Step', isDone: true, component: firstComponent },
        { key: 'secondStep', label: 'My Second Step', isDone: false, component: secondComponent },
        { key: 'thirdStep', label: 'My Third Step', isDone: false, component: thirdComponent },
        { key: 'finalStep', label: 'My Final Step', isDone: false, component: finalComponent },
    ]);

    const [activeStep, setActiveStep] = useState(steps[0]);

    const handleNext = () => {
        if (steps[steps.length - 1].key === activeStep.key) {
            alert('You have completed all steps.');
            return;
        }

        const index = steps.findIndex(x => x.key === activeStep.key);
        setSteps(prevStep => prevStep.map(x => {
            if (x.key === activeStep.key) x.isDone = true;
            return x;
        }))
        setActiveStep(steps[index + 1]);
    }

    const handleBack = () => {
        const index = steps.findIndex(x => x.key === activeStep.key);
        if (index === 0) return;

        setSteps(prevStep => prevStep.map(x => {
            if (x.key === activeStep.key) x.isDone = false;
            return x;
        }))
        setActiveStep(steps[index - 1]);
    }

    return (
        <Fragment>
            <Breadcrumbs mainTitle="Draft Loans" parent="Loans" title="Draft Loans" />
            <Container fluid={true}>
                <Card className="box">
                    <div className="steps">
                        <ul className="nav">
                            {steps.map((step, i) => {
                                return <li key={i} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                                    <div>Step {i + 1}<br /><span>{step.label}</span></div>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="step-component">
                        {activeStep.component()}
                    </div>
                    <div className="btn-component">
                        <input type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
                        <input type="button" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} />
                    </div>
                </Card>
            </Container>
            <Container fluid={true}>
                <div className="user-profile">

                    <Col sm="12" >
                        <Card className="step5" data-intro="This is the your first Post">
                            <div className="profile-img-style">
                                <Row>
                                    <Col>
                                        <div className="media">
                                            <div className="media-body align-self-center">
                                                <H5>Payment Link</H5>
                                                    <P>Payment links can be used once. They cannot be used for multiple payments. <br />
                                                    Once used, only the name can be modified. All other details are locked.</P>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <hr />

                            </div>
                        </Card>
                    </Col>
                </div>
            </Container>
        </Fragment>
    )
}

export default DraftLoan;