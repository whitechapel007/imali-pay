import React from "react";
import OverviewCard from "../../components/overview-cards/OverviewCard";
import RightBarContainer from "../../components/RightBarContainer/RightBarContainer";
import SearchExport from "../../components/searchexport/SearchExport";
import Tables from "../../components/Tables/Tables";
import { data } from "../../components/data";
const Fulfilment = () => {
  return (
    <RightBarContainer>
      <OverviewCard name="Fulfilment" fulfilment />
      <SearchExport />
      <Tables
        first="CUSTOMERS"
        second="PRICE"
        third="DATE"
        fourth="VEHICLE MODEL"
        fifth="col. STATUS"
        data={data}
        fulfilment
      />
    </RightBarContainer>
  );
};

export default Fulfilment;
