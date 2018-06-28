import { connect } from "react-redux";
import EventForm from "./event_form";
import {
  fetchEvent,
  receiveEvent,
  fetchAllEvents,
  createEvent
} from "../../actions/event_actions";
import { values } from "lodash";
import moment from "moment";

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllEvents: () => dispatch(fetchAllEvents()),
    fetchEvent: id => dispatch(fetchEvent(id)),
    receiveEvent: event => dispatch(receiveEvent(event)),
    createEvent: event => dispatch(createEvent(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
