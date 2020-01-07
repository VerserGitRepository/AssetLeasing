import React, { Component } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import SplitterLayout from "react-splitter-layout";
// import axios from "axios";
import { Container, Row, Col } from "reactstrap";
class CreateCompany extends React.Component {
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
    //  const data=JSON.stringify(this.state) //new FormData(event.target);
    alert(JSON.stringify(this.state));
    //  var PostData=JSON.stringify(this.state);
    //http://localhost:57390/company/create
    //  mode:"no-cors",
    //https://versergateway.com.au/VerserAssetLeasingServices/Company/Create
    fetch(
      "https://versergateway.com.au/VerserAssetLeasingServices/Company/Create",
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
      // <div>
      //   <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
      //     <TabList>
      //       <Tab autoFocus="autofocus">Create Company</Tab>
      //       <Tab>Catalogue</Tab>
      //     </TabList>
      //     <TabPanel>
      <div className="card">
        <h6 align="center">Create Company</h6>
        {/* <section className="companydetails"> */}
        {/* id="nav-home-tab"  */}
        <form
          id="submit_job"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <fieldset className="box">
            <Container className="justify-content-md-center">
              <Row>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Company Name:
                    </label>
                    <input
                      id="firstNameInput"
                      name="CompanyName"
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
                      Address Line 1:
                    </label>
                    <input
                      id="firstNameInput"
                      name="AddressLine1"
                      type="text"
                      required="required"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>{" "}
            </Container>
            <Container className="justify-content-md-center">
              <Row>
                {" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Address Line 2:
                    </label>
                    <input
                      id="firstNameInput"
                      type="text"
                      name="AddressLine2"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      Suburb:
                    </label>
                    <input type="text" name="Suburb" className="form-control" />
                  </p>
                </Col>
              </Row>{" "}
            </Container>
            <Container className="justify-content-md-center">
              <Row>
                {" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="firstNameInput">
                      State:
                    </label>
                    <input
                      id="firstNameInput"
                      name="State"
                      type="text"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="streetInput">
                      Postcode:
                    </label>
                    <input
                      id="streetInput"
                      name="Postcode"
                      type="text"
                      className="form-control"
                    />
                  </p>
                </Col>
              </Row>{" "}
            </Container>
            <Container className="justify-content-md-center">
              <Row>
                {" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="numberInput">
                      Phone:
                    </label>
                    <input
                      id="numberInput"
                      name="Phone"
                      type="text"
                      className="form-control"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="zipInput">
                      Email:
                    </label>
                    <input
                      id="zipInput"
                      type="email"
                      className="form-control"
                      name="email"
                    />
                  </p>
                </Col>
              </Row>{" "}
            </Container>
            <Container className="justify-content-md-center">
              <Row>
                {" "}
                <Col>
                  <p>
                    <label className="form-group" htmlFor="zipInput">
                      Service Start Date
                    </label>
                    <input
                      id="zipInput"
                      type="date"
                      className="form-control"
                      required="required"
                      name="ServiceStartDate"
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <label className="form-group" htmlFor="zipInput">
                      Service End Date
                    </label>
                    <input
                      id="zipInput"
                      type="date"
                      className="form-control"
                      required="required"
                      name="ServiceEndDate"
                    />
                  </p>
                </Col>
              </Row>{" "}
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

      //  </TabPanel>
      // /* <TabPanel>
      //   <SplitterLayout>
      //     <SplitterLayout secondaryInitialSize={250}>
      //       <SplitterLayout vertical secondaryInitialSize={750}>
      //         <div>
      //           <section className="companydetails">
      //             <form
      //               id="nav-home-tab"
      //               action="#"
      //               method="post"
      //               href="#nav-home"
      //               onSubmit={this.handleSubmit}
      //             >
      //               <fieldset className="box">
      //                 <p>
      //                   <label className="textlabel" htmlFor="countryInput">
      //                     Device Category:
      //                   </label>
      //                   <select>
      //                     <option value="volvo">Handset</option>
      //                     <option value="saab">Tablet</option>
      //                     <option value="opel">USB Data</option>
      //                     <option value="opel">Accessory</option>
      //                     <option value="opel">SIM</option>
      //                     <option value="opel">Emerging Devices</option>
      //                     <option value="audi">Testing Category</option>
      //                   </select>
      //                 </p>
      //                 <p>
      //                   <label className="textlabel" htmlFor="countryInput">
      //                     OEM:
      //                   </label>
      //                   <select>
      //                     <option value="volvo">Apple</option>
      //                     <option value="saab">Samsung</option>
      //                     <option value="opel">HTC</option>
      //                     <option value="opel">Telstra</option>
      //                     <option value="opel">Acer</option>
      //                     <option value="opel">Blackberry</option>
      //                     <option value="audi">LG</option>
      //                     <option value="opel">SONY</option>
      //                     <option value="opel">Nokia</option>
      //                     <option value="opel">Sharp</option>
      //                     <option value="audi">Siemens</option>
      //                   </select>
      //                 </p>
      //                 <p>
      //                   <label className="textlabel" htmlFor="countryInput">
      //                     Form Factor:
      //                   </label>
      //                   <select>
      //                     <option value="volvo">Bar</option>
      //                     <option value="saab">Card</option>
      //                     <option value="opel">Fixed Gateway</option>
      //                     <option value="opel">Flip</option>
      //                     <option value="opel">Laptop</option>
      //                     <option value="opel">Qwerty</option>
      //                     <option value="audi">Slide</option>
      //                     <option value="opel">Tablet</option>
      //                     <option value="opel">Touch</option>
      //                     <option value="opel">USB</option>
      //                     <option value="audi">Basic Phone</option>
      //                   </select>
      //                 </p>
      //               </fieldset>
      //             </form>
      //           </section>
      //         </div>
      //         <SplitterLayout>
      //           <div>
      //             <h4>Unallocated Inventory Items</h4>
      //           </div>
      //         </SplitterLayout>
      //       </SplitterLayout>
      //     </SplitterLayout>
      //     <SplitterLayout primaryIndex={1} secondaryInitialSize={250}>
      //       <div>
      //         <h4>Catalogue Items</h4>
      //       </div>
      //     </SplitterLayout>
      //   </SplitterLayout>
      // </TabPanel>

      //   </Tabs>
      // </div>
    );
  }
}

export default CreateCompany;
