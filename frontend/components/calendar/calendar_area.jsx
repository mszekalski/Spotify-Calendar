import moment from "moment";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import DayContainer from "../day/day_container";
import EventFormContainer from "../event_form/event_form_container";

class CalendarArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
      month: null
    };

    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  componentDidMount() {
    this.setState({ month: this.state.date.month() });

    this.props.fetchEvents();
  }

  renderDaysHeader() {
    return (
      <div className="week-names">
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
    let date = this.state.date.clone();
    date.add(1, "M");
    this.setState({ date, month: date.month() });
  }

  prevMonth() {
    let date = this.state.date.clone();
    date.add(-1, "M");
    this.setState({ date, month: date.month() });
  }

  renderMonth() {
    return <span>{this.state.date.format("MMMM, YYYY")}</span>;
  }

  onDateChange(date) {
    this.setState({ date });
  }

  renderDays() {
    let numberOfDays = this.state.date.daysInMonth();
    let firstDate = this.state.date.clone().date(1);

    const days = [];

    for (let i = 0; i < firstDate.day(); i++) {
      days.push(<DayContainer month="null" key={32 + i} />);
    }
    for (let i = 1; i <= numberOfDays; i++) {
      let date = this.state.date.clone().date(i);
      days.push(
        <DayContainer
          onClickChange={this.onDateChange}
          month={this.state.month}
          key={i}
          number={i}
          date={date}
        />
      );
    }

    return days;
  }

  render() {
    return (
      <div className="calendar-container">
        <div className="month-header">
          <div className="month-header-inner">
            <button onClick={this.prevMonth}>
              <i className="fa fa-angle-left" />
            </button>

            {this.renderMonth()}
            <button onClick={this.nextMonth}>
              <i className="fa fa-angle-right" />
            </button>
          </div>
        </div>
        {this.renderDaysHeader()}

        <div className="days-container-inner">{this.renderDays()}</div>
        <EventFormContainer date={this.state.date} />
      </div>
    );
  }
}

export default CalendarArea;
