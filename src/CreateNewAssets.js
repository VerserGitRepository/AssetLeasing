import React, { Component } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
class CreateNewAssets extends Component {
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
      "https://versergateway.com.au/VerserAssetLeasingServices/assets/CreateNewAsset",
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
        <h6 align="center">Create New Assets </h6>

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
                      Asset ID:
                    </label>
                    <input
                      id="firstNameInput"
                      name="AssetID"
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
                      Asset Company:
                    </label>
                    <input
                      id="firstNameInput"
                      name="Asset_Company"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Asset Contract:
                    </label>
                    <input
                      id="firstNameInput"
                      name="Asset_Contract"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      IMEI:
                    </label>
                    <input
                      id="firstNameInput"
                      name="IMEI"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Serial No:
                    </label>
                    <input
                      id="firstNameInput"
                      name="SerialNo"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      SIM No:
                    </label>
                    <input
                      id="firstNameInput"
                      name="SIMNo"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      SPMD:
                    </label>
                    <input
                      id="firstNameInput"
                      name="SPMD"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      First Commission Date:
                    </label>
                    <input
                      id="firstNameInput"
                      name="FirstCommissionDate"
                      type="date"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Last Commission Date:
                    </label>
                    <input
                      id="firstNameInput"
                      name="LastCommissionDate"
                      type="date"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Buy-Back Price:
                    </label>
                    <input
                      type="text"
                      name="BuyBackPrice"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Purchase Order No:
                    </label>
                    <input
                      id="firstNameInput"
                      name="PurchaseOrderNo"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Purchase Date:
                    </label>
                    <input
                      type="date"
                      name="PurchaseDate"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Condition:
                    </label>

                    <input
                      type="text"
                      name="Condition"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Aquisition Date:
                    </label>
                    <input
                      id="firstNameInput"
                      name="AquisitionDate"
                      type="date"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      End User:
                    </label>
                    <input
                      id="firstNameInput"
                      name="Asset_EndUser"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Inventory Item:
                    </label>
                    <input
                      type="text"
                      name="Asset_InventoryItem"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Lifecycle Status:
                    </label>
                    <input
                      type="text"
                      name="Asset_LifecycleStatus"
                      className="form-control"
                    />
                  </p>
                </Col>

                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      OS Version:
                    </label>
                    <input
                      type="text"
                      name="Asset_OSVersion"
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
              {/* </Col>
              </Row> */}
            </Container>
          </fieldset>

          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    );
  }
}

export default CreateNewAssets;
