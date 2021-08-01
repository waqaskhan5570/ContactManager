import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import "./contactList.css";
function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  let renderContacts = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="contact-list">
      <h1>Contacts List</h1>
      <Link to="/add">
        <button className="addContact">Add Contact</button>
      </Link>
      {renderContacts}
    </div>
  );
}

export default ContactList;
