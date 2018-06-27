import moment from "moment";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Day extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.month === null) {
      return <div className="filler-date">I'm not a real date</div>;
    } else {
      return <div className="real-dates">{this.props.number}</div>;
    }
  }
}

export default Day;
