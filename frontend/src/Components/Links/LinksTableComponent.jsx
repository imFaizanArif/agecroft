import React, { Fragment, useState } from 'react'
import DataTable from 'react-data-table-component';

const dummydata = [
    {
        id: 1,
        name: 'Matthew Jhone',
        url: 'agecroftcapital.com',
        status: <span className='badge badge-light-success'>Complete</span>,
        amount: '$3142.00',
        activated: '12-04-2024',
        refunded: '28-04-2024',

    },

];


const LinksTableComponent = () => {
    const [data, setData] = useState(dummydata);
    const tableColumns = [
        {
            name: 'Name',
            selector: row => row['name'],
            sortable: true,
            center: false,
        },
        {
            name: 'Link/URL',
            selector: row => `${row.url}`,
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
            name: 'Activated',
            selector: row => `${row.activated}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Refunded at',
            selector: row => `${row.refunded}`,
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

export default LinksTableComponent;