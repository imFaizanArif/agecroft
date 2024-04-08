import React, { Fragment, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { H6, P } from '../../AbstractElements';

const dummydata = [
    {
        id: 1,
        name: <Link to={`${process.env.PUBLIC_URL}/app/bookmark/:layout`}>
            <div className='d-flex'><span className='lead badge badge-light-info d-flex align-items-center'>#01322</span> <H6 attrPara={{ className: 'text-dark' }}> &nbsp;Matthew</H6></div>
            <P attrPara={{ className: 'text-secondary' }}>Test .. test@gmail.com</P>
        </Link>,
        recived_financed: <div>
            <H6>$0.00</H6>
            <P attrPara={{ className: 'text-secondary' }}>of $123,000.00</P>
        </div>,
        principal_interest: <div>
            <H6>$0.00</H6>
            <P attrPara={{ className: 'text-secondary' }}>at 0.00% .. $0.00</P>
        </div>,
        fees: <div>
            <H6>$0.00</H6>
            <P attrPara={{ className: 'text-secondary' }}>late $0.00 (0x)</P>
        </div>,
        view: <Link to={`${process.env.PUBLIC_URL}/app/bookmark/:layout`}><MdKeyboardDoubleArrowRight size={22} /></Link>,
    },
];


const ReportsTableComponent = () => {
    const [data, setData] = useState(dummydata);
    const tableColumns = [
        {
            name: 'LOAN',
            selector: row => row['name'],
            sortable: true,
            center: false,
        },
        {
            name: 'RECEIVED / FINANCED',
            selector: row => row['recived_financed'],
            sortable: true,
            center: true,
        },
        {
            name: 'PRINCIPAL & INTEREST',
            selector: row => row['principal_interest'],
            sortable: true,
            center: true,
        },
        {
            name: 'FEES',
            selector: row => row['fees'],
            sortable: true,
            center: true,
        },
        {
            name: 'VIEW',
            selector: row => row['view'],
            sortable: true,
            center: true,
        },
    ];

    return (
        <Fragment>
            <DataTable
                data={data}
                columns={tableColumns}
                striped={true}
                center={true}
                pagination
            />
        </Fragment>
    );
}
export default ReportsTableComponent;