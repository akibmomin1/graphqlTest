import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const Table = (data ) => {
  const [sortedData, setSortedData] = useState(data.countries);
  const [filterText, setFilterText] = useState('');

  // Sorting function
  const sortByColumn = (columnKey) => {
    const sorted = [...sortedData].sort((a, b) => {
       
      if (a[columnKey] < b[columnKey]) return -1;
      if (a[columnKey] > b[columnKey]) return 1;
      return 0;
    });
    console.log('sorted', sorted)
    setSortedData(sorted);
  };

  // Filtering function
  const filterData = () => {
    if (!filterText) {
      setSortedData(data.countries);
      return;
    }

    const filtered = data.countries.filter((item) => {
      return Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
    setSortedData(filtered);
  };

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
    },
    {
      name: 'Capital',
      selector: 'capital',
      sortable: true,
    },
    {
      name: 'Currency',
      selector: 'currency',
      sortable: true,
    },
  ];

  return (
    <div>
      <input
        type="text"
        placeholder="Filter..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
        <button onClick={filterData}>Apply Filter</button>
      <DataTable
        columns={columns}
        data={sortedData}
        sortFunction={sortByColumn}
      />
    
    </div>
  );
};

export default Table;
