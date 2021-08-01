import React from "react";
import UserImg from "../images/contactcardimg.png";
import "./ContactDetail.css";
import { Link } from "react-router-dom";
function ContactDetail(props) {
  const { name, email } = props.location.state.contact;
  return (
    <div>
      <div className="card">
        <img src={UserImg} alt="User" className="userImg" />
        <div className="detail-container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{email}</p>
        </div>
      </div>
      <Link to="/">
        <button>Back to Contacts</button>
      </Link>
    </div>
  );
}

export default ContactDetail;
