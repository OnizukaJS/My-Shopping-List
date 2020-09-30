import React, { Fragment, useState, useEffect, useContext } from "react";
import { UserProfileContext } from "../../lib/UserProfileContext";
import { Link } from "react-router-dom";
import "../../styles/App.css";

const Checkout = () => {
  const [isValid, setValid] = useState(false);
  //useContext is a redux-hook which allows you to access values from this context from anywhere
  const value = useContext(UserProfileContext);
  const {
    firstName,
    lastName,
    email,
    address,
    zipCode,
    city,
    setUserProfileContext,
  } = value;

  const validate = () => {
    let errors = [];
    const inputs = document.querySelectorAll(".form-control");
    inputs.forEach((input) => {
      //If there is no value we push the input to our array
      !input.value ? errors.push(input) : errors.length && errors.pop();
    });
    console.log(errors);
    //If there is no error we use the local state
    setValid(!errors.length);
  };

  useEffect(() => {
    validate();
  });

  return (
    <Fragment>
      <div className="col-sm-6 offset-3">
        <h2>Checkout</h2>
        <br />
        <form>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                property=""
                name="firstName"
                defaultValue={firstName}
                onChange={(e) => {
                  setUserProfileContext({ [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                property=""
                name="lastName"
                defaultValue={lastName}
                onChange={(e) => {
                  setUserProfileContext({ [e.target.name]: e.target.value });
                }}
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email address"
              property=""
              name="email"
              defaultValue={email}
              onChange={(e) => {
                setUserProfileContext({ [e.target.name]: e.target.value });
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Address"
              property=""
              name="address"
              defaultValue={address}
              onChange={(e) => {
                setUserProfileContext({ [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Postal Code"
                property=""
                name="zipCode"
                defaultValue={zipCode}
                onChange={(e) => {
                  setUserProfileContext({ [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                property=""
                name="city"
                defaultValue={city}
                onChange={(e) => {
                  setUserProfileContext({ [e.target.name]: e.target.value });
                }}
              />
            </div>
          </div>
          <br />

          <Link
            to="/confirm"
            className={`white btn btn-light btn-lg btn-block bg-crimson checkout ${
              !isValid && "disabled"
            } `}
          >
            Confirm
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

export default Checkout;
