//not implementing Add function.

import React, { Component } from "react";
import "react-tabs/style/react-tabs.css";
import axios from "axios";

const apiEndpoint =
  "https://versergateway.com.au/VerserAssetLeasingServices/Contracts/ContractsList";

class Random extends React.Component {
  state = {
    contractlists: []
  };

  async componentDidMount() {
    const { data: contractlists } = await axios.get(apiEndpoint);
    this.setState({ contractlists });
  }

  handleAdd = async () => {
    const obj = {
      contract_Plan: "4",
      contract_EndUser: "4",
      contract_Company: "1",
      created: "2014-03-27T02:30:59.7353111+00:00",
      modified: "2019-02-11T04:51:17.6378674+00:00"
    };
    const { data: post } = await axios.post(apiEndpoint, obj);

    const contractlists = [post, ...this.state.contractlists];
    this.setState({ contractlists });
  };

  //   handleChange(event) {
  //     this.setState({ [event.target.name]: event.target.value });
  //   }

  // handleSubmit(event) {
  //     event.preventDefault();
  //     //  const data=JSON.stringify(this.state) //new FormData(event.target);
  //     alert(JSON.stringify(this.state));
  //     //  var PostData=JSON.stringify(this.state);
  //     //http://localhost:57390/company/create
  //     //  mode:"no-cors",
  //     //https://versergateway.com.au/VerserAssetLeasingServices/Company/Create
  //     fetch("https://versergateway.com.au/VerserAssetLeasingServices/Company/Create",
  //         {
  //             method: 'POST',
  //             cache: 'no-cache',
  //             headers: {
  //                 'Accept': 'application/json',
  //                 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  //                 'Content-Type': 'application/json'

  //             },
  //             body: JSON.stringify(this.state)
  //         })
  //         .then((resp) => resp.json())
  //         .then(function (response) {
  //             console.info('fetch()', response);
  //             return response;
  //         });
  // }  commented this section bacause using axios.

  //   handleSubmit = async () => {
  //     const obj = {
  //       companyName: "a",
  //       addressLine1: "b",
  //       addressLine2: "c",
  //       suburb: "d",
  //       state: "e",
  //       postcode: "f",
  //       phone: "g",
  //       email: "h",
  //       web: "i",
  //       login: "j",
  //       createdBy: "k",
  //       serviceStartDate: "l",
  //       serviceEndDate: "m",
  //       created: "n"
  //     };
  //     const { data: company } = await axios.post(
  //       "https://versergateway.com.au/VerserAssetLeasingServices/Company/CompanyList",
  //       obj
  //     );

  //     const companys = [
  //       company,
  //       ...this.UNSAFE_componentWillMount.state.companys
  //     ];
  //     this.setState({ companys });
  //   }; // work on this section i.e. handleSubmit{}, as POST is not working for axios.

  render() {
    var { contractlists } = this.state;
    return (
      <React.Fragment>
        {/* <div className="App"> */}

        {/* <h3> Colours </h3> */}

        <h4>Sample Page for Testing Purpose</h4>
        <button className="btn btn-secondary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>contract_Plan</th>
              <th>contract_EndUser</th>
              <th>contract_Company</th>
              <th>created</th>
              <th>modified</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {contractlists.map(contractlists => (
              <tr key={contractlists.id}>
                <td> {contractlists.contract_Plan}</td>
                <td> {contractlists.contract_EndUser}</td>
                <td> {contractlists.contract_Company}</td>
                <td> {contractlists.created}</td>
                <td> {contractlists.modified}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Random;
