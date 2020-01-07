import React, { Component } from 'react';
import SplitterLayout from "react-splitter-layout";

class Catalogue extends Component {
    render() { 
        return ( 
            <div>
            <SplitterLayout>
              <SplitterLayout secondaryInitialSize={250}>
                <SplitterLayout vertical secondaryInitialSize={800}>
                  
                    {/* <section className="companydetails"> */}
                    <div className="card">
                    <h6>Catalogue</h6>
                    <br/>
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
                              Device Category:
                            </label>
                            <select>
                              <option value="Handset">Handset</option>
                              <option value="Tablet">Tablet</option>
                              <option value="USBData">USB Data</option>
                              <option value="Accessory">Accessory</option>
                              <option value="SIM">SIM</option>
                              <option value="EmergingDevices">Emerging Devices</option>
                              <option value="TestingCategory">Testing Category</option>
                            </select>
                          </p>
                          <p>
                            <label className="textlabel" htmlFor="countryInput">
                              OEM:
                            </label>
                            <select>
                              <option value="Apple">Apple</option>
                              <option value="Samsung">Samsung</option>
                              <option value="HTC">HTC</option>
                              <option value="Telstra">Telstra</option>
                              <option value="Acer">Acer</option>
                              <option value="Blackberry">Blackberry</option>
                              <option value="LG">LG</option>
                              <option value="SONY">SONY</option>
                              <option value="Nokia">Nokia</option>
                              <option value="Sharp">Sharp</option>
                              <option value="Siemens">Siemens</option>
                            </select>
                          </p>
                          <p>
                            <label className="textlabel" htmlFor="countryInput">
                              Form Factor:
                            </label>
                            <select>
                              <option value="Bar">Bar</option>
                              <option value="Card">Card</option>
                              <option value="FixedGateway">Fixed Gateway</option>
                              <option value="Flip">Flip</option>
                              <option value="Laptop">Laptop</option>
                              <option value="Qwerty">Qwerty</option>
                              <option value="Slide">Slide</option>
                              <option value="Tablet">Tablet</option>
                              <option value="Touch">Touch</option>
                              <option value="USB">USB</option>
                              <option value="BasicPhone">Basic Phone</option>
                            </select>
                          </p>
                        </fieldset>
                      </form>
                      </div>
                    {/* </section> */}
                  
                  <SplitterLayout>
                    <div>
                      <h4>Unallocated Inventory Items</h4>
                    </div>
                  </SplitterLayout>
                </SplitterLayout>
              </SplitterLayout>
              <SplitterLayout primaryIndex={1} secondaryInitialSize={250}>
                <div>
                  <h4>Catalogue Items</h4>
                </div>
              </SplitterLayout>
            </SplitterLayout>
          </div>
         );
    }
}
 
export default Catalogue;