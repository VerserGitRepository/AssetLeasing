//created for test purpose, showing entered data in the state for console,
// need to fix how to attache POST method to this code.
//"joi-npm" is not installed, if installed in the future, remove comments for > schema ={...};
//import Joi from "joi-browser";

import React, { Component } from "react";

class CreateCompanyTest extends Component {
  state = {
    company: {
      companyName: "",
      AddressLine1: "",
      AddressLine2: "",
      Suburb: "",
      State: "",
      Postcode: "",
      Phone: "",
      CreatedBy: "",
      Email: "",
      ServiceStartDate: "",
      ServiceEndDate: ""
    }
  };

  //   schema = {
  //     username: Joi.string()
  //       .required()
  //       .email()
  //       .label("Username"),
  //     password: Joi.string()
  //       .required()
  //       .min(5)
  //       .label("Password")
  //   };

  validate = () => {
    const errors = {};

    const { company } = this.state;

    if (company.companyName.trim() === "")
      errors.companyName = "companyName is required";

    if (company.AddressLine1.trim() === "")
      errors.AddressLine1 = "AddressLine1 is required";

    if (company.AddressLine2.trim() === "")
      errors.AddressLine2 = "AddressLine2 is required";

    if (company.Suburb.trim() === "") errors.Suburb = "Suburb is required";

    if (company.State.trim() === "") errors.State = "State is required";

    if (company.Postcode.trim() === "")
      errors.Postcode = "Postcode is required";

    if (company.Phone.trim() === "") errors.Phone = "Phone is required";

    if (company.CreatedBy.trim() === "")
      errors.CreatedBy = "CreatedBy value is required";

    if (company.Email.trim() === "") errors.Email = "Email is required";

    if (company.ServiceStartDate.trim() === "")
      errors.ServiceStartDate = "ServiceStartDate is required";

    if (company.ServiceEndDate.trim() === "")
      errors.ServiceEndDate = "ServiceEndDate is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;

    //call the server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const company = { ...this.state.company };
    company[input.name] = input.value;
    this.setState({ company });
  };

  render() {
    const { company } = this.state;

    return (
      <section className="form-elegant">
        <div className="card">
          <div className="card-body mx-4">
            <h4>Create Company Sample Form </h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                  value={company.companyName}
                  onChange={this.handleChange}
                  id="companyName"
                  name="companyName"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Address Line1</label>
                <input
                  value={company.AddressLine1}
                  onChange={this.handleChange}
                  id="AddressLine1"
                  name="AddressLine1"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Address Line2</label>
                <input
                  value={company.AddressLine2}
                  onChange={this.handleChange}
                  id="AddressLine2"
                  name="AddressLine2"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Suburb</label>
                <input
                  value={company.Suburb}
                  onChange={this.handleChange}
                  id="Suburb"
                  name="Suburb"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">State</label>
                <input
                  value={company.State}
                  onChange={this.handleChange}
                  id="State"
                  name="State"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Postcode</label>
                <input
                  value={company.Postcode}
                  onChange={this.handleChange}
                  id="Postcode"
                  name="Postcode"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Phone</label>
                <input
                  value={company.Phone}
                  onChange={this.handleChange}
                  id="Phone"
                  name="Phone"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Created By</label>
                <input
                  value={company.CreatedBy}
                  onChange={this.handleChange}
                  id="CreatedBy"
                  name="CreatedBy"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Email</label>
                <input
                  value={company.Email}
                  onChange={this.handleChange}
                  id="Email"
                  name="Email"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Service Start Date</label>
                <input
                  value={company.ServiceStartDate}
                  onChange={this.handleChange}
                  id="ServiceStartDate"
                  name="ServiceStartDate"
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Service End Date</label>
                <input
                  value={company.ServiceEndDate}
                  onChange={this.handleChange}
                  id="ServiceEndDate"
                  name="ServiceEndDate"
                  type="date"
                  className="form-control"
                />
              </div>
              <button disabled={this.validate()} className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default CreateCompanyTest;
