import moment from "moment";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import EventFormContainer from "../day/day_container";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="event-create-form">
        <input type="date" />
        <input type="time" value="12:00" />
        <input type="date" />
        <input type="time" value="13:00" />
        <input type="text" placeholder="Description" />
        <button type="submit">Create Event</button>
      </div>
    );
  }
}
export default EventForm;
