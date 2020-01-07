import React from "react";
import "react-tabs/style/react-tabs.css";
// This is a sample for POST method. Onle refer this, DO NOT make any changes to this page.
//This page is disabled in the main application as "NewContract.js" is having POST method for this page.

class CreateNewContract extends Component {
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
        <h1>Create New Contract </h1>
        <form
          id="submit_job"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <Container>
            <fieldset className="box">
              <div className="form-group">
                <label htmlFor="firstNameInput">Asset ID:</label>
                <input
                  id="firstNameInput"
                  name="AssetID"
                  type="text"
                  required="required"
                  autoFocus="autofocus"
                  className="form-control"
                />
              </div>
              <label>Start Date: </label>
              <input type="date" name="StartDate" />

              <br />
              <label>End Date: </label>
              <input type="date" name="EndDate" />

              <br />
              <label>Service No: </label>
              <input type="text" name="ServiceNo" />

              <br />
              <label>
                Contract Company:
                <input type="text" name="Contract_Company" />
              </label>
              <br />
              <label>
                Contract EndUser:
                <input type="text" name="Contract_EndUser" />
              </label>
              <br />
              <label>
                Contract Plan:
                <input type="text" name="Contract_Plan" />
              </label>
              <br />
              <br />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </fieldset>
          </Container>
        </form>
      </div>
    );
  }
}
export default CreateNewContract;
