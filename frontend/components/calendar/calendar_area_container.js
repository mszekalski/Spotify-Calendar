import { connect } from "react-redux";
import CalendarArea from "./calendar_area";
import {
  fetchEvent,
  receiveEvent,
  fetchAllEvents
} from "../../actions/event_actions";
import { values } from "lodash";
import moment from "moment";

const mapStateToProps = state => {
  const currentDate = moment();
  return {
    currentDate: currentDate
  };
};

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
)(CalendarArea);