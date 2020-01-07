import React, { Component } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
// import React from 'react';
import SplitterLayout from "react-splitter-layout";
import OperatingSystemsList from "./OperatingSystemsList";

class OperatingSystems extends Component {
  render() {
    return (
      <SplitterLayout primaryIndex={1} secondaryInitialSize={350}>
        <div className="card">
          <h6>Operating Systems</h6>
          <br />
          <form
            id="nav-home-tab"
            action="#"
            method="post"
            href="#nav-home"
            onSubmit={this.handleSubmit}
          >
            <fieldset className="box">
              <p>
                <label className="textlabel" htmlFor="countryInput">
                  Operating System:
                </label>
                <select>
                  <option value="Android">Android</option>
                  <option value="Native">Native</option>
                  <option value="Symbian">Symbian</option>
                  <option value="WindowsMobile">Windows Mobile</option>
                  <option value="AppleiOS">Apple iOS</option>
                  <option value="BlackberryOS">Blackberry OS</option>
                </select>
              </p>
            </fieldset>
          </form>
        </div>
        <div>
        {/* following component is only created for testing purpose, soon it will be replaced by GET method for OPerating systems. */}
          <OperatingSystemsList /> 
        </div>
      </SplitterLayout>
    );
  }
}

export default OperatingSystems;
