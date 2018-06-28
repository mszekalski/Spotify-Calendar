import moment from "moment";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onClickChange(this.props.date);
  }

  renderEvents() {
    let date = this.props.date.format("YYYY-MM-DD");
    const events = this.props.events.filter(event => {
      return event.start_date === date;
    });

    events.sort((a, b) => {
      let aStart = moment(a.start_time, "YYYY-MM-DD HH:mm").format("HHmm");
      let bStart = moment(b.start_time, "YYYY-MM-DD HH:mm").format("HHmm");

      return parseInt(aStart) - parseInt(bStart);
    });

    return events.map(event => {
      let start = moment(event.start_time, "YYYY-MM-DD HH:mm").format("h:mm a");
      let end = moment(event.end_time, "YYYY-MM-DD HH:mm").format("h:mm a");
      return (
        <li key={event.id} className="event-list-item">
          <div className="event-content-div">
            <div className="event-duration">
              {start} -
              {end}
            </div>
            <div className="event-description">{event.description}</div>
            <button
              className="delete-button"
              onClick={e => {
                e.stopPropagation();
                this.props.deleteEvent(event.id);
              }}
            >
              X
            </button>
          </div>
        </li>
      );
    });
  }

  render() {
    if (this.props.month === "null") {
      return <div className="filler-date" />;
    } else {
      return (
        <div className="real-dates" onClick={this.handleChange}>
          {this.props.number}
          <div className="events-list-div">
            <ul className="events-list">{this.renderEvents()}</ul>
          </div>
        </div>
      );
    }
  }
}

export default Day;
