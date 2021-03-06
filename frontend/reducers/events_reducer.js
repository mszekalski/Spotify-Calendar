import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT
} from "../actions/event_actions";
import merge from "lodash/merge";

const eventsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return merge({}, action.events);
    case RECEIVE_EVENT:
      return merge({}, oldState, { [action.event.id]: action.event });
    case REMOVE_EVENT:
      let newState = merge({}, oldState);
      delete newState[action.eventId];
      return newState;
    default:
      return oldState;
  }
};

export default eventsReducer;
