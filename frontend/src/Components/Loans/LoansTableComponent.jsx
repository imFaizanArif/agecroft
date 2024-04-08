import React, { Fragment, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

const dummydata = [
    {
        id: 1,
        loan: <Link to={`${process.env.PUBLIC_URL}/app/bookmark/:layout`}>Matthew</Link>,
        financed_amount: '$123,000.00',
        status: <span className='badge badge-light-success'>Manual</span>,
        interest_rate: '0.00%',
        low_balance: '$121,650.00',
        payments_received: '$1,350.00',
        next_payment: '$0.00',
        next_due_date: '12-04-2024',
    },
];


const LoansTableComponent = () => {
    const [data, setData] = useState(dummydata);
    const tableColumns = [
        {
            name: 'Name',
            selector: row => row['loan'],
            sortable: true,
            center: false,
        },
        {
            name: 'Financed Amount',
            selector: row => `${row.financed_amount}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Interest Rate',
            selector: row => `${row.interest_rate}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Loan Balance',
            selector: row => `${row.low_balance}`,
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
            name: 'Payments Received',
            selector: row => `${row.payments_received}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Next Payment',
            selector: row => `${row.next_payment}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Next Due Date',
            selector: row => `${row.next_due_date}`,
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

export default LoansTableComponent;
