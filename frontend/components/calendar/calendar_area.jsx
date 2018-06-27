import moment from "moment";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import DayContainer from "./day_container";

const DAYS = {
  January: 31,
  Feburary: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
};

class CalendarArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.currentDate,
      month: null
    };
    this.days = DAYS;
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
  }

  componentDidMount() {
    this.setState({ month: this.state.date.month() });
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
    this.setState({ date: date, month: date.month() });
  }

  prevMonth() {
    let date = this.state.date;
    date.add(-1, "M");
    this.setState({ date, month: date.month() });
  }

  renderMonth() {
    return <span>{this.state.date.format("MMMM")}</span>;
  }

  renderDays() {
    let daysOfTheWeek = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
    let numberOfDays = this.days[Object.keys(this.days)[this.state.month]];
    let firstDate = this.state.date.date(1);
    let firstDay = daysOfTheWeek[firstDate.day()];
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<Day />);
    }
    for (let i = 1; i < numberOfDays; i++) {
      days.push(<Day />);
    }
    return days;
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
        <div>{this.renderDays()}</div>
      </div>
    );
  }
}

export default CalendarArea;
