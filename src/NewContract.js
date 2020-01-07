//This is the page for CreateNewAssets

// import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import "react-tabs/style/react-tabs.css";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";

class NewContract extends Component {
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
      "https://versergateway.com.au/VerserAssetLeasingServices/NewContract/CreateNewContract",
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
        <h6 align="center">Create New Contract </h6>
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
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Contract Company:
                    </label>
                    <input
                      name="Contract_Company"
                      type="text"
                      required="required"
                      autoFocus="autofocus"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Service No:
                    </label>
                    <input
                      name="ServiceNo"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>
            </Container>
            <Container className="justify-content-md-center">
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Contract End User:
                    </label>
                    <input
                      name="Contract_EndUser"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Contract Plan:
                    </label>
                    <input
                      name="Contract_Plan"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>
            </Container>
            <Container className="justify-content-md-center">
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Start Date:
                    </label>
                    <input
                      name="StartDate"
                      type="date"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      End Date:
                    </label>
                    <input
                      name="EndDate"
                      type="date"
                      required="required"
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

export default NewContract;
