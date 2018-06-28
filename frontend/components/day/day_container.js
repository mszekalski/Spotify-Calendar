import { connect } from "react-redux";
import Day from "./day";
import {
  fetchEvent,
  receiveEvent,
  fetchAllEvents
} from "../../actions/event_actions";
import { values } from "lodash";
import moment from "moment";

const mapStateToProps = state => {
  return {
    events: Object.values(state.events)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day);
