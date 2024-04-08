import React, { useState } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Btn, H4, ToolTip } from '../../../AbstractElements';
import SvgIcon from '../Component/SvgIcon';

const Widgets1 = ({ data }) => {
  const [basictooltip, setbasictooltip] = useState(false);
  const toggle = () => setbasictooltip(!basictooltip);
  return (
    <Card className='widget-1'>
      <CardBody>
        <div className='widget-content'>
          <div className={`widget-round ${data.color}`}>
            <div className='bg-round'>
              <SvgIcon className='svg-fill' iconId={`${data.icon}`} />
              <SvgIcon className='half-circle svg-fill' iconId='halfcircle' />
            </div>
          </div>
          <div className='w-100 d-flex'>
            <div>
              <H4>{data.total}</H4>
              <span className='f-light'>{data.title}</span>
            </div>
            <div className="btn-showcase">
              <span id='TooltipExample' >
                <i className="icon-more "></i>
              </span>
              <ToolTip
                attrToolTip={{
                  placement: 'top',
                  isOpen: basictooltip,
                  target: 'TooltipExample',
                  toggle: toggle
                }} >
                PopoverTitle
              </ToolTip>
            </div>
          </div>
        </div>
        <div className={`font-${data.color} f-w-500`}>

          <i className={`icon-arrow-${data.gros < 50 ? 'down' : 'up'} icon-rotate me-1`} />
          <span>{`${data.gros < 50 ? '-' : '+'}${data.gros}%`}</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default Widgets1;
