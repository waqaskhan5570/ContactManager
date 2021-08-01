import React from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import user from "../images/user.png";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="contact-card-container">
      <div className="contactItem">
        <img src={user} alt="User" className="userImage" />
        <div className="content">
          <Link
            to={{
              pathname: `contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <div className="name">{name}</div>
          </Link>
          <div className="email">{email}</div>

          <i className="trash" onClick={() => props.clickHandler(id)}>
            <BsFillTrashFill style={{ height: "20px", width: "40px" }} />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
