import React, { Component } from "react";

class Login extends Component {
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
      "https://customers.verser.com.au/JMSLoginManager/Login/AuthenticateUser",
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
      // <section className="form-elegant">
      
        <div className="card m-2">
          <h4>Login</h4>
          <form
            id="submit_job"
            method="post"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          >
            <fieldset className="box" style={{ margin: "1%" }}>
              <p>
                <label htmlFor="Username">Username</label>
                <input id="Username" type="text" className="form-control" style={{ margin: "1px" }} />
              </p>
              <p>
                <label htmlFor="Password">Password</label>
                <input id="Password" type="password" className="form-control" style={{ margin: "1px" }} />
              </p>
              <button className="btn btn-primary">Login</button>
            </fieldset>
          </form>
        </div>
    );
  }
}

export default Login;
