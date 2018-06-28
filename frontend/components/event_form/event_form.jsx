import moment from "moment";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    let newEvent = {
      descritpion: "",
      start_date: this.props.date.toDate(),
      end_date: this.props.date.toDate(),
      start_time: "",
      end_time: ""
    };
    this.state = newEvent;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      start_date: newProps.date.toDate(),
      end_date: newProps.date.toDate()
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onClickChange();
    this.props.createEvent(this.state).then(() => {
      this.setState({
        start_time: "",
        end_time: "",
        descritpion: ""
      });
    });
  }

  render() {
    if (this.props.hidden === true) {
      return null;
    } else {
      return (
        <div className="event-create-form">
          Start Date:
          <b />
          {this.props.date.format("M/D/YYYY")}
          <b />
          Start Time:
          <b />
          <input
            type="time"
            value={this.state.start_time}
            onChange={this.update("start_time")}
          />
          <b />
          End Date:
          <div className="end-date-container">
            {this.props.date.format("M/D/YYYY")}
          </div>
          <b />
          End Time:
          <input
            type="time"
            value={this.state.end_time}
            onChange={this.update("end_time")}
          />
          <b />
          Description:
          <input
            type="text"
            placeholder="Description"
            value={this.state.description || ""}
            onChange={this.update("description")}
          />
          <button className="submit-button" onClick={this.handleSubmit}>
            Create Event
          </button>
        </div>
      );
    }
  }
}

export default EventForm;
