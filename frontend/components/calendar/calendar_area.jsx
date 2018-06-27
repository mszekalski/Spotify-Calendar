import moment from "moment";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class CalendarArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.currentDate
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
  }

  renderDaysHeader() {
    return (
      <div className="week names">
        <span className="day">Sun</span>
        <span className="day">Mon</span>
        <span className="day">Tue</span>
        <span className="day">Wed</span>
        <span className="day">Thu</span>
        <span className="day">Fri</span>
        <span className="day">Sat</span>
      </div>
    );
  }

  nextMonth() {
    let date = this.state.date;
    date.add(1, "M");
    this.setState({ date: date });
  }

  prevMonth() {
    let date = this.state.date;
    date.add(-1, "M");
    this.setState({ date: date });
  }

  renderMonth() {
    return <span>{this.state.date.format("MMMM")}</span>;
  }

  render() {
    return (
      <div className="calendar-container">
        <button onClick={this.prevMonth}>
          <i className="fa fa-angle-left" />
        </button>

        {this.renderMonth()}
        <button onClick={this.nextMonth}>
          <i className="fa fa-angle-right" />
        </button>

        {this.renderDaysHeader()}
        {this.renderWeeks()}
      </div>
    );
  }
}

export default CalendarArea;
