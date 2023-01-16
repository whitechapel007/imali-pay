import { useState } from "react";
import OverviewCard from "../../components/overview-cards/OverviewCard";
import RightBarContainer from "../../components/RightBarContainer/RightBarContainer";
import "./overview.css";

import SearchExport from "../../components/searchexport/SearchExport";
import Tables from "../../components/Tables/Tables";
import { data } from "../../components/data";
import { content } from "../../components/data";
import Pagination from "../../components/pagination/Pagination";
const Overview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const newData = data.slice(firstPostIndex, lastPostIndex);
  return (
    <RightBarContainer>
      <OverviewCard name="Overview" content={content} />

      <SearchExport placeholder="Search for customer’s name" />
      <Tables
        first="CUSTOMERS"
        second="DEPOSIT"
        third="DATE"
        fourth="VOUCHER NO."
        fifth="TRANS. STATUS"
        overview
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

export default Overview;
