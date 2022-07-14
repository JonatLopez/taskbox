import React from 'react'
import "./Home.scss";
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Id',
    selector: row => row.id,
    sortable: true,
    reorder: true
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
    reorder: true
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
    wrap: true,
    reorder: true
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
    reorder: true
  },
  {
    name: 'Phone number',
    selector: row => row.phone,
    reorder: true
  },
  {
    name: 'Creation Date & Time',
    selector: row => row.createDate,
    sortable: true,
    reorder: true,
    wrap: true
  },
  {
    name: 'Date Updated',
    selector: row => row.updationDate,
    sortable: true,
    reorder: true,
    wrap: true
  }
];


let data = [
  {
    id: 1,
    name: 'Jonathan Lopez',
    email: 'jonathanlgarza@outlook.com',
    status: 'Active',
    phone: 8448798124,
    createDate: 'Thu, 7 Jul 2022 19:28:45 GMT',
    updationDate: 'Thu, 7 Jul 2022 19:28:45 GMT'
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john.doe@hotmail.com',
    status: 'Non-Active',
    phone: 8448798124,
    createDate: 'Thu, 7 Jul 2018 19:28:45 GMT',
    updationDate: 'Thu, 7 Jul 2018 19:28:45 GMT'
  },
  {
    id: 3,
    name: 'Daniel Chapman',
    email: 'dchapman@hotmail.com',
    status: 'Active',
    phone: 8448798124,
    createDate: 'Thu, 7 Jul 2020 19:28:45 GMT',
    updationDate: 'Thu, 7 Jul 2020 19:28:45 GMT'
  },
  {
    id: 4,
    name: 'John Wick',
    email: 'jwick@outlook.com',
    status: 'Lead',
    phone: 8448798124,
    createDate: 'Thu, 7 Jul 2021 19:28:45 GMT',
    updationDate: 'Thu, 7 Jul 2021 19:28:45 GMT'
  },
  {
    id: 5,
    name: 'David Eisenhower ',
    email: 'david.e@gmail.com',
    status: 'Non-Active',
    phone: 8448798124,
    createDate: 'Thu, 7 Jul 1950 19:28:45 GMT',
    updationDate: 'Thu, 7 Jul 1968 19:28:45 GMT'
  },
]

const paginationComponentOptions = {
  rowsPerPageText: 'Rows per page',
  rangeSeparatorText: 'of',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'All',
};

const customStyles = {
  rows: {
    style: {
      minHeight: '72px',
      '&:hover': {
        cursor: 'pointer',
      }
    },
  },
};

const Home = () => {

  return (
    <div className="home">
      <div className='data-table'>
        <DataTable
          columns={columns}
          data={data}
          responsive
          striped
          onRowClicked={(row, event) => { console.log(row, event) }}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          customStyles={customStyles}
        />
      </div>
    </div>
  )
}

export default Home