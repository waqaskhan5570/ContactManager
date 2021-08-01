import React, { Component } from "react";
import "./addContact.css";
import { Link } from "react-router-dom";

class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are required");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="body">
        <div class="screen">
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>ADD</span>
                <span>CONTACT</span>
              </div>
            </div>
            <div class="screen-body-item">
              <form class="contact-form" onSubmit={this.addContact}>
                <div class="form-fields">
                  <input
                    class="contact-form-input"
                    placeholder="NAME"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </div>
                <div class="form-fields">
                  <input
                    class="contact-form-input"
                    placeholder="EMAIL"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>

                <div class="contact-form button">
                  <button class="form-button" onClick={this.add}>
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
