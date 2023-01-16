import React, { useState } from "react";
import OverViewCardBox from "../overview-card/OverViewCardBox";
import "./overviewCard.css";
import filter from "../../assets/filter_list.svg";
import filter_alt from "../../assets/filter_alt.svg";
import arrowDown from "../../assets/keyboard_arrow_down.svg";
import link from "../../assets/link.svg";
import description from "../../assets/description.svg";
import account from "../../assets/account_circle_1.svg";
import Modal from "react-modal";
import boxWallet from "../../assets/box-wallet.svg";
import boxTransaction from "../../assets/box-transaction.svg";

const OverviewCard = ({
  content,
  name,
  customer,
  percent,
  defaults,
  overview,
  fulfilment,
  reconcillation,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "600px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className="overview-card-container">
      <div className="filter">
        <h1 className="overview-name">{name}</h1>

        {overview && (
          <button className="filter-button">
            <img src={filter} alt="" />
            Filter
          </button>
        )}
        {reconcillation && <div></div>}
        {fulfilment && <button className="fulfil-button">Register</button>}
      </div>
      {fulfilment || reconcillation ? (
        <div>
          {" "}
          {reconcillation ? (
            <div className="reconcilation-button-block">
              <div>
                <button className="reconcilation-button-grey">
                  <img src={filter_alt} alt="" />
                  Today
                  <img src={arrowDown} alt="" />
                </button>
              </div>
              <div className="reconcilation-button-block-group">
                <button className="connect-erp" onClick={openModal}>
                  {" "}
                  <img src={link} alt="" /> Connect ERP
                </button>
                <button
                  className="reconcilation-button-upload"
                  onClick={openModal2}
                >
                  <img src={description} alt="" /> Upload CSV
                </button>
                <button
                  className="reconcilation-button-connect"
                  onClick={openModal}
                >
                  <img src={account} alt="" />
                  Connect Account
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          <>
            <div className="overview-layout">
              {fulfilment || (
                <>
                  {" "}
                  <OverViewCardBox
                    image={content.first.image}
                    text={content.first.text}
                    number={content.first.number}
                    customer={customer}
                    defaults={defaults}
                    percent={content.first.percent}
                    icon={content.first.icon}
                  />
                  <OverViewCardBox
                    image={content.second.image}
                    text={content.second.text}
                    number={content.second.number}
                    customer={customer}
                    defaults={defaults}
                    percent={content.second.percent}
                    icon={content.first.icon}
                  />
                  <OverViewCardBox
                    image={content.third.image}
                    text={content.third.text}
                    number={content.third.number}
                    customer={customer}
                    defaults={defaults}
                    percent={content.third.percent}
                    icon={content.third.icon}
                  />
                </>
              )}
            </div>
          </>
        </div>
      ) : (
        <div className="overview-layout">
          <OverViewCardBox
            image={content.first.image}
            text={content.first.text}
            number={content.first.number}
            customer={customer}
            defaults={defaults}
            percent={content.first.percent}
            icon={content.first.icon}
          />
          <OverViewCardBox
            image={content.second.image}
            text={content.second.text}
            number={content.second.number}
            customer={customer}
            defaults={defaults}
            percent={content.second.percent}
            icon={content.first.icon}
          />
          <OverViewCardBox
            image={content.third.image}
            text={content.third.text}
            number={content.third.number}
            customer={customer}
            defaults={defaults}
            percent={content.third.percent}
            icon={content.first.icon}
          />
        </div>
      )}
      <>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Connect account</h2>
          <p>Connect your mobile account or bank statement to continue</p>

          <div className="flex-modal">
            <div>
              <img src={boxTransaction} alt="" />
              <h1>Mobile money account</h1>
            </div>
            <div>
              <img src={boxWallet} alt="" />
              <h1>Bank account</h1>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={modalIsOpen2}
          onRequestClose={closeModal2}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex-modal">
            <div>
              <img src={boxTransaction} alt="" />
            </div>
            <div></div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default OverviewCard;
