import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Heading from '@/utils/generalComponents/Heading';
import localization from '@/utils/localization';

function Transcript({ itemsPerPage, transcriptList }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(transcriptList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(transcriptList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, transcriptList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % transcriptList.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Heading value={2}>{localization.msgs.result}</Heading>
      <ul className="list" data-testid='transcript-list'>
        {currentItems &&
          currentItems.map((item) => (
            <React.Fragment key={item?.id}>
              <li>Display Name: {item?.display_name}</li>
              <li>Assembly Name: {item?.assembly_name}</li>
              <li>Source: {item?.source}</li>
              <li>Version: {item?.version}</li>
            </React.Fragment>
          ))}
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="page"
        pageClassName="page__numbers"
        previousClassName="page__numbers"
        nextClassName="page__numbers"
        breakClassName="page__dots"
      />
    </>
  );
}

Transcript.propTypes = {
  /**
   * Number indicating records to be shown per page
   */
  itemsPerPage: PropTypes.number.isRequired,
  /**
   * Array containing transcript details
   */
  transcriptList: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Transcript;
