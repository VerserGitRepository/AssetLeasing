//this page is disabled


import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { firebaseApp } from "./firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: {
        message: ""
      }
    };
  }

  signIn() {
    console.log("this.state", this.state);
    const { username, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch(error => {
        // console.log("error", error);
        this.setState({ error });
      });
  }

  render() {
    return (
      <div className="card">
        <h4>Sign In Test</h4>
        <fieldset className="box" style={{ margin: "1%" }}>
          <Container className="justify-content-md-center">
            <p>
              <label className="form-group" htmlFor="firstNameInput">
                Username:
              </label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter your Username"
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
              />
            </p>
            <p>
              <label className="form-group" htmlFor="firstNameInput">
                Password:
              </label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter your Password"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </p>
            <p>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.signIn()}
              >
                Sign In
              </button>
            </p>
          </Container>
        </fieldset>
        <div>{this.state.error.message}</div>
      </div>
    );
  }
}

export default SignIn;
