import React from "react";
import CustomerProfileCard from "../customer-profile-card/CustomerProfileCard";
import RightBarContainer from "../RightBarContainer/RightBarContainer";
import "./customerprofile.css";
const CustomerProfile = () => {
  return (
    <RightBarContainer>
      <CustomerProfileCard />
    </RightBarContainer>
  );
};

export default CustomerProfile;
