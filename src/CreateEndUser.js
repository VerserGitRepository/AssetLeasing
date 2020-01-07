import React, { Component } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { Container, Row, Col } from "reactstrap";

class CreateEndUser extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(
      "https://versergateway.com.au/VerserAssetLeasingServices/CreateEndUsers/create",
      {
        method: "POST",
        cache: "no-cache",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }
    )
      .then(resp => resp.json())
      .then(function(response) {
        console.info("fetch()", response);
        return response;
      });
  }

  render() {
    return (
      <div className="card">
        <h6 align="center">Create End User</h6>
        <form
          id="submit_job"
          action="#"
          method="post"
          href="#nav-home"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <fieldset className="box">
            <Container className="justify-content-md-center">
              {" "}
              <Row>
                {" "}
                {/* in the below column, add->  xs="3" for columns width */}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      First Name:
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required="required"
                      autoFocus="autofocus"
                      className="form-control"
                    />
                  </p>
                </Col>{" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Last Name:
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>{" "}
            </Container>
            <Container className="justify-content-md-center">
              {" "}
              <Row>
                {" "}
                <Col>
                  {" "}
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Employee No:
                    </label>
                    <input
                      name="employeeNo"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>{" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Department:
                    </label>
                    <input
                      name="department"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>{" "}
            </Container>
            <Container className="justify-content-md-center">
              {" "}
              <Row>
                {" "}
                <Col>
                  {" "}
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Cost Code:
                    </label>
                    <input
                      name="costCode"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>{" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      End User Status:
                    </label>
                    <input
                      name="endUserStatus"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>{" "}
            </Container>
            <Container className="justify-content-md-center">
              {" "}
              <Row>
                {" "}
                <Col>
                  {" "}
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Commencement Date:
                    </label>
                    <input
                      name="commencementDate"
                      type="date"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>{" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Termination Date:
                    </label>
                    <input
                      name="terminationDate"
                      type="date"
                      required="required"
                      className="form-control"
                    />
                  </p>{" "}
                </Col>
              </Row>{" "}
            </Container>
            <Container className="justify-content-md-center">
              {" "}
              <Row>
                {" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Last Commission Date:
                    </label>
                    <input
                      name="LastCommissionDate"
                      type="date"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>{" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      User Name:
                    </label>
                    <input
                      type="text"
                      name="userName"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>{" "}
            </Container>
            {/* <Container>
              {" "}
              <Row>
                {" "}
                <Col>
                  {" "}
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Created By:
                    </label>
                    <input
                      id="firstNameInput"
                      name="createdBy"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>{" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Created:
                    </label>
                    <input
                      type="date"
                      name="created"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>{" "}
            </Container> */}

            {/* <Container>
              {" "}
              <Row>
                {" "}
                <Col>
                  {" "}
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Modified By:
                    </label>
                    <input
                      type="text"
                      name="modifiedBy"
                      className="form-control"
                    />
                  </p>
                </Col>{" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Modified:
                    </label>
                    <input
                      id="firstNameInput"
                      name="modified"
                      type="date"
                      required="required"
                      className="form-control"
                    />
                  </p>{" "}
                </Col>
              </Row>{" "}
            </Container> */}

            <Container className="justify-content-md-center">
              {" "}
              <Row>
                {" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      End User Company:
                    </label>
                    <input
                      id="firstNameInput"
                      name="endUser_Company"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      End User Site:
                    </label>
                    <input
                      type="text"
                      name="endUser_Site"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>
              <p>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
                <button className="btn btn-primary" type="reset">
                  Reset
                </button>
              </p>
            </Container>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CreateEndUser;
