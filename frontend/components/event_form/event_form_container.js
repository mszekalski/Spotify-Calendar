import { connect } from "react-redux";
import EventForm from "./event_form";
import {
  fetchEvent,
  receiveEvent,
  fetchAllEvents
} from "../../actions/event_actions";
import { values } from "lodash";
import moment from "moment";

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllEvents: () => dispatch(fetchAllEvents()),
    fetchEvent: id => dispatch(fetchEvent(id)),
    receiveEvent: channel => dispatch(receiveEvent(channel))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
