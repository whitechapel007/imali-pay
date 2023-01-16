import { useState } from "react";
import OverviewCard from "../overview-cards/OverviewCard";
import RightBarContainer from "../RightBarContainer/RightBarContainer";
import { reconcontent } from "../data";
import "./reconcillation.css";
import SearchExport from "../searchexport/SearchExport";
import Tables from "../Tables/Tables";
import { data } from "../data";
const Reconcillation = () => {
  const [currentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const newData = data.slice(firstPostIndex, lastPostIndex);

  return (
    <RightBarContainer>
      <OverviewCard
        name="Account summary"
        reconcillation
        content={reconcontent}
      />
      <SearchExport />
      <Tables
        first="ID"
        second="CUSTOMER"
        third="DATE REGISTERED"
        fourth="KYC STATUS"
        data={newData}
      />
    </RightBarContainer>
  );
};

export default Reconcillation;
