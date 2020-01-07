//this page is disabled

import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../src/services/userService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  doSubmit = async () => {
    //call the server
    //console.log("Submitted");
    try {
      await userService.register(this.state.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <section className="form-elegant">
        {/* <div className="card"> */}
          <div className="card-body mx-4">
            <h4>Register</h4>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </form>
          </div>        
        {/* </div> */}
      </section>
    );
  }
}

export default LoginForm;
