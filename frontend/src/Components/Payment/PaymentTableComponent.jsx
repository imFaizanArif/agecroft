import React, { Fragment, useState } from 'react'
import DataTable from 'react-data-table-component';

const dummydata = [
    {
        id: 1,
        name: 'Matthew',
        transaction: 'Manual 04-Apr-2025',
        status: <span className='badge badge-light-success'>Complete</span>,
        amount: '$121,650.00',
        submmited: '$21,650.00',
        posted: '12-04-2024',
    },
];


const PaymentTableComponent = () => {
    const [data, setData] = useState(dummydata);
    const tableColumns = [
        {
            name: 'Name',
            selector: row => row['name'],
            sortable: true,
            center: false,
        },
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
        {
            name: 'Posted',
            selector: row => `${row.posted}`,
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

export default PaymentTableComponent;