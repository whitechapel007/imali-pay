import React, { useState } from "react";
import OverviewCard from "../../components/overview-cards/OverviewCard";
import RightBarContainer from "../../components/RightBarContainer/RightBarContainer";

import SearchExport from "../../components/searchexport/SearchExport";
import Tables from "../../components/Tables/Tables";
import { data, defaultContent } from "../../components/data";

import Pagination from "../../components/pagination/Pagination";

const Defaults = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const newData = data.slice(firstPostIndex, lastPostIndex);

  return (
    <RightBarContainer>
      <OverviewCard
        defaults
        name="Defaulters"
        content={defaultContent}
        overview
      />
      <SearchExport placeholder="Search for customer’s name" />
      <Tables
        first="DRIVER"
        second="LOAN AMOUNT"
        third="DATE REQUESTED"
        fourth="LOAN STATUS"
        data={newData}
      />
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </RightBarContainer>
  );
};

export default Defaults;
