import React, { Fragment } from 'react';
import { Col, Card, CardBody, Form, FormGroup, Label, Row } from 'reactstrap';
import { Btn, H3, H4, Image, P } from '../../../../AbstractElements';
import { UserProfileDesc4 } from '../../../../Constant';
import UserFooter from './Common/UserFooter';
import UserTitle from './Common/UserTitle';
import { PiBankDuotone } from "react-icons/pi";
import { HiMiniBanknotes, HiMiniCreditCard } from "react-icons/hi2";
const UserDetails3 = () => {
  return (
    <Fragment>
      <Col sm="12" >
        <Card className="step5" data-intro="This is the your first Post">
          <div className="profile-img-style">
            <UserTitle title={`Payment Processors`} />
            <hr />

            {/* Payment Processors*/}
            <Col sm='12'>
              <Card>
                <CardBody>
                  <H4>Payment Processors</H4>
                  <P>Handling payments electronically requires a payment processor.</P>
                  <P>Available types of transaction processing:</P>
                  <P><PiBankDuotone /> Accepts ACH transactions</P>
                  <P><HiMiniBanknotes /> Accepts debit cards</P>
                  <P><HiMiniCreditCard /> Accepts credit cards</P>
                  <br />
                  <br />
                  <Form className='theme-form'>
                    <div className='text-end'>
                      <Btn attrBtn={{ color: 'success' }}>
                        Add a Payment Processors
                      </Btn>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </div>
        </Card>
      </Col>

    </Fragment>
  );
};
export default UserDetails3;
