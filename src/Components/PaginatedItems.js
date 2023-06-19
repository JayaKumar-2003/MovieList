import React, { useEffect, useState } from 'react';
import './FilterId.css';
import ReactPaginate from 'react-paginate';



function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <tr><td>{item['id']}</td>
          <td>{item['Movie Title']}</td>
          <td>{item['Genre']}</td>
          <td>{item['Release Year']}</td>
          <td>{item['Director']}</td>
          <td>{item['Rating']}</td>
          <td>{item['State']}</td>
          <td>{item['District']}</td>
          <td>{item['Taluk']}</td>
          <td>{item['Box Office Collections (in Crores)']}</td>
          </tr>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage,items }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='Paginate-Div'>
      <ReactPaginate
        className='Paginate'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      </div>
    </>
  );
}

export default PaginatedItems;