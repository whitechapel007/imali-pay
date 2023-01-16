import React, { useState } from "react";
import "./CustomerProfileCard.css";
import logo from "../../assets/logoc.svg";
import customerLogo from "../../assets/customerLogo.svg";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
const CustomerProfileCard = ({ recon }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className="go-back">
        <span>Go back</span>
        <span>/</span>
        <span>Oliver Tai</span>
      </div>

      <div className="customer-profile-container">
        <div className="box-1">
          <h1>Customer’s Profile </h1>

          <div className="profile-img-container">
            <img src={logo} alt="" />
            <div>
              <h3>Oliver Tai</h3>
              <p>Customer</p>
            </div>
          </div>

          <div>
            {recon ? (
              <form>
                <div className="form-box">
                  <div className="form-field">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      placeholder="James"
                      className="input-field"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      placeholder="Warri"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-field">
                    <label htmlFor="firstName">Gender</label>
                    <input
                      type="text"
                      placeholder="Male"
                      className="input-field"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName">Date of birth</label>
                    <input
                      type="text"
                      placeholder="21 Jul 1990"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-field">
                    <label htmlFor="firstName">BVN</label>
                    <input
                      type="text"
                      placeholder="230459694042"
                      className="input-field"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName">Phone Number</label>
                    <input
                      type="text"
                      placeholder="+234 705 509 4953"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="address">Home address</label>

                  <input
                    type="text"
                    placeholder="18 Street name, Town, LGA, State, Country"
                    className="input-field-2"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="locationofpurchace">
                    Location of Purchase
                  </label>

                  <input
                    type="text"
                    placeholder="Mega Autoshop, Lagos "
                    className="input-field-2"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="address">Vehicle Model</label>

                  <input
                    type="text"
                    placeholder="Toyota - Model Z"
                    className="input-field-2"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="address">Insurance Provider</label>

                  <input
                    type="text"
                    placeholder="Company Insurance Plc"
                    className="input-field-2"
                  />
                </div>
              </form>
            ) : (
              <form>
                <div className="form-box">
                  <div className="form-field">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      placeholder="James"
                      className="input-field"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      placeholder="Warri"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="phoneNumber">Phone number</label>

                  <PhoneInput
                    defaultCountry="RU"
                    international
                    countryCallingCodeEditable={false}
                    value={value}
                    onChange={setValue}
                    className="input-field-2"
                  />
                </div>

                <div className="form-box">
                  <div className="form-field">
                    <label htmlFor="dateofbirth">Date of birth</label>
                    <input
                      type="text"
                      placeholder="02 Feb 1990"
                      className="input-field"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName">State of residence</label>
                    <input
                      type="text"
                      placeholder="Lagos"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="form-box">
                  <div className="form-field">
                    <label htmlFor="dateofbirth">Bank name</label>
                    <input
                      type="text"
                      placeholder="02 Feb 1990"
                      className="input-field"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName">Bank number</label>
                    <input
                      type="text"
                      placeholder="Lagos"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="address">Address</label>

                  <input
                    type="text"
                    placeholder="34 Sunville Estate, Macathony Street,  Ikeja"
                    className="input-field-2"
                  />
                </div>
              </form>
            )}{" "}
          </div>
        </div>

        {recon ? (
          <div className="box-2">
            <p className="box-2-title">fulfilment details</p>
            <div className="box-2-board">
              <span className="border-span">
                <p>Repayment amount</p>
                <h2 className="main">
                  ₦304,600<span className="faint"> /Month</span>{" "}
                </h2>
              </span>
              <span>
                <p>Value of car</p>

                <h2 className="main">₦6,300,950</h2>
              </span>
            </div>
            <div className="box-2-board">
              <span className="border-span">
                <p>Repayment duration</p>
                <h2 className="faint">6 Months</h2>
              </span>
              <span>
                <p>Repayment ends</p>

                <h2 className="faint">03 Dec 2022</h2>
              </span>
            </div>
            <div className="box-2-board">
              <span className="border-span">
                <p>Transaction date</p>
                <h2 className="faint">Jan 6, 2022 @ 08:45</h2>
              </span>
              <span>
                <p>Status</p>

                <h2 className="pill">Active</h2>
              </span>
            </div>

            <p className="upcoming">Upcoming payment</p>

            <div className="flex-grid">
              <div className="flex-box-2">
                <div className="flex-box-inner">
                  <img src={customerLogo} alt="" />
                  <div>
                    <p className="payment">1/4 Payment</p>
                    <p className="date">21 Jul, 2022</p>
                  </div>

                  <div className="overdue">Overdue</div>
                </div>

                <p className="currency">NGN 34,600</p>
              </div>
              <div className="flex-box-2">
                <div className="flex-box-inner">
                  <img src={customerLogo} alt="" />
                  <div>
                    <p className="payment">1/4 Payment</p>
                    <p className="date">21 Jul, 2022</p>
                  </div>

                  <div className="pending">Pending</div>
                </div>

                <p className="currency">NGN 34,600</p>
              </div>
            </div>
            <p className="upcoming">Completed payment</p>

            <div className="flex-grid">
              <div className="flex-box-2">
                <div className="flex-box-inner">
                  <img src={customerLogo} alt="" />
                  <div>
                    <p className="payment">1/6 Payment </p>
                    <p className="date">21 Jul, 2022</p>
                  </div>

                  <div className="paid">Paid</div>
                </div>

                <p className="currency">NGN 34,600</p>
              </div>
              <div className="flex-box-2">
                <div className="flex-box-inner">
                  <img src={customerLogo} alt="" />
                  <div>
                    <p className="payment">2/6 Payment</p>
                    <p className="date">21 Jul, 2022</p>
                  </div>

                  <div className="paid">Paid</div>
                </div>

                <p className="currency">NGN 34,600</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="box-2">
            <p className="box-2-title">Transaction history</p>

            <div className="box-2-board">
              <span>
                <p>Amount loaned(NGN)</p>
                <h2>404,051</h2>
              </span>
              <span>
                <p>Amount paid(NGN)</p>

                <h2>120,000</h2>
              </span>
            </div>

            <div>
              <p className="payment-heading">Pending payment</p>

              <div className="flex-grid">
                <div className="flex-box-2">
                  <div className="flex-box-inner">
                    <img src={customerLogo} alt="" />
                    <div>
                      <p className="payment">1/4 Payment</p>
                      <p className="date">21 Jul, 2022</p>
                    </div>

                    <div className="overdue">Overdue</div>
                  </div>

                  <p className="currency">NGN 34,600</p>
                </div>
                <div className="flex-box-2">
                  <div className="flex-box-inner">
                    <img src={customerLogo} alt="" />
                    <div>
                      <p className="payment">1/4 Payment</p>
                      <p className="date">21 Jul, 2022</p>
                    </div>

                    <div className="overdue">Overdue</div>
                  </div>

                  <p className="currency">NGN 34,600</p>
                </div>
                <div className="flex-box-2">
                  <div className="flex-box-inner">
                    <img src={customerLogo} alt="" />
                    <div>
                      <p className="payment">1/4 Payment</p>
                      <p className="date">21 Jul, 2022</p>
                    </div>

                    <div className="overdue">Overdue</div>
                  </div>

                  <p className="currency">NGN 34,600</p>
                </div>
                <div className="flex-box-2">
                  <div className="flex-box-inner">
                    <img src={customerLogo} alt="" />
                    <div>
                      <p className="payment">1/4 Payment</p>
                      <p className="date">21 Jul, 2022</p>
                    </div>

                    <div className="overdue">Overdue</div>
                  </div>

                  <p className="currency">NGN 34,600</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerProfileCard;
