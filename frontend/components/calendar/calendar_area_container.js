import { connect } from "react-redux";
import CalendarArea from "./calendar_area";
import {
  fetchEvent,
  receiveEvent,
  fetchEvents
} from "../../actions/event_actions";
import { values } from "lodash";
import moment from "moment";

const mapStateToProps = state => {
  const currentDate = moment();
  return {
    currentDate: currentDate,
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEvent: id => dispatch(fetchEvent(id)),
    receiveEvent: event => dispatch(receiveEvent(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarArea);
