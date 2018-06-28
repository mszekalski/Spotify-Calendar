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

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render() {
    return (
      <div className="event-create-form">
        <div className="start-date-container">
          {this.props.date.format("MM/DD/YYYY")}
        </div>
        <input
          type="time"
          value={this.state.start_time}
          onChange={this.update("start_time")}
        />
        <div className="end-date-container">
          {this.props.date.format("M/D/YYYY")}
        </div>
        <input
          type="time"
          value={this.state.end_time}
          onChange={this.update("end_time")}
        />
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

export default EventForm;
