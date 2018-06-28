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
    if (this.props.month === "null") {
      return <div className="filler-date" />;
    } else {
      let date = this.props.date.format("YYYY-MM-DD");
      const events = this.props.events.filter(event => {
        return event.start_date === date;
      });

      return <div className="real-dates">{this.props.number}</div>;
    }
  }
}

export default Day;
