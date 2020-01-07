import React, { Component } from "react";
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

// import $ from "jquery"; 

// Create New Company

class Submitjob extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Form has been submitted: ' + this.state.value);
    event.preventDefault();
  }

  // constructor(props) {
  //     super(props);

  //     this.toggle = this.toggle.bind(this);
  //     this.state = {
  //         isOpen: false
  //     };
  // }
  // toggle() {
  //     this.setState({
  //         isOpen: !this.state.isOpen
  //     });
  // }

  render() {
    return (
      <div>

        <Nav>

          {/* <NavLink href="#">Search</NavLink> */}
          {/* <NavLink href="#">Master Data</NavLink> */}
          {/* <NavLink href="#">Administration</NavLink> */}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Tasks
                </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem >
                Create New Assets
                  </DropdownItem>
              <DropdownItem>
                Create New Company
                  </DropdownItem>
              <DropdownItem>
                Create New Contract
                  </DropdownItem>
              <DropdownItem>
                Create New End User
                  </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Lists
                </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>
                Company List
                  </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Search
                </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>
                Search Assets
                  </DropdownItem>
              <DropdownItem>
                Search Contracts
                  </DropdownItem>
              <DropdownItem>
                Search End Users
                  </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Master Data
                </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>
                Carriers
                  </DropdownItem>
              <DropdownItem>
                Colours
                  </DropdownItem>
              <DropdownItem>
                Device Categories
                  </DropdownItem>
              <DropdownItem>
                Form Factors
                  </DropdownItem>
              <DropdownItem>
                Inventory Items
                  </DropdownItem>
              <DropdownItem>
                Lifecycle Status
                  </DropdownItem>
              <DropdownItem>
                OEMs
                  </DropdownItem>
              <DropdownItem>
                Operating Systems
                  </DropdownItem>
              <DropdownItem>
                Plans
                  </DropdownItem>
              <DropdownItem>
                Reset
                  </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Administration
                </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Roles
                  </DropdownItem>
              <DropdownItem>
                Users
                  </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* <input type="search" className="searchbox" placeholder="Search" ref={input => this.search = input} onChange={this.handleInputChange} /> */}
        </Nav>

        <nav>
          <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
              role="tab" aria-controls="nav-home" aria-selected="true">Company Details</a>

            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
              role="tab" aria-controls="nav-profile" aria-selected="false">Assets</a>

            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact"
              role="tab" aria-controls="nav-contact" aria-selected="false">End USers</a>

            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact1"
              role="tab" aria-controls="nav-contact" aria-selected="false">Catalogue</a>

          </div>
        </nav>

        <div>
          <section className="companydetails">

            <form id="nav-home-tab" action="#" method="post" href="#nav-home" onSubmit={this.handleSubmit}>

              <fieldset className="box">
                <p>
                  <label className="textlabel" htmlFor="firstNameInput">Company Name:</label>
                  <input id="firstNameInput" name="FirstName" type="text" required="required" autoFocus="autofocus" className="textinput" />
                </p>
                <p>
                  <label className="textlabel" htmlFor="firstNameInput">Service Start Date:</label>
                  <input type="date" placeholder="false" />
                </p>
                <p>
                  <label className="textlabel" htmlFor="firstNameInput">Service End Date:</label>
                  <input type="date" placeholder="false" />
                </p>
                <p>
                  <label className="textlabel" htmlFor="emailInput">Login:</label>
                  <input id="emailInput" name="Email" type="email" className="textinput" required="required" />
                </p>
                <p>
                  <label className="textlabel" htmlFor="streetInput">Address Line 1:</label>
                  <input id="streetInput" name="Street" type="text" className="textinput" />
                </p>
                <p>
                  <label className="textlabel" htmlFor="numberInput">Address Line 2:</label>
                  <input id="numberInput" name="Number" type="text" className="textinput" />
                </p>
                <p>
                  <label className="textlabel" htmlFor="cityInput">Suburb:</label>
                  <input id="cityInput" name="City" type="text" className="textinput" required="required" />
                </p>
                <p>
                  <label className="textlabel" htmlFor="countryInput">State:</label>
                  <select>
                    <option value="volvo">NSW</option>
                    <option value="saab">ACT</option>
                    <option value="opel">QLD</option>
                    <option value="opel">SA</option>
                    <option value="opel">TAS</option>
                    <option value="opel">VIC</option>
                    <option value="audi">WA</option>
                  </select>
                </p>
                <p>
                  <label className="textlabel" htmlFor="zipInput">Postcode</label>
                  <input id="zipInput" name="Zip" type="text" className="textinput" required="required" />
                </p>
                <p>
                  <input type="submit" className="submitbutton" value="Submit" />
                </p>
              </fieldset>
            </form>
          </section>
          
        </div>
        
      </div>
    );
  }
}
export default Submitjob;