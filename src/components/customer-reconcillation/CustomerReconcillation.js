import CustomerProfileCard from "../customer-profile-card/CustomerProfileCard";
import RightBarContainer from "../RightBarContainer/RightBarContainer";
import "./customerReconcillation.css";
const CustomerReconcillation = () => {
  return (
    <div>
      <RightBarContainer>
        <CustomerProfileCard recon />
      </RightBarContainer>
    </div>
  );
};

export default CustomerReconcillation;
