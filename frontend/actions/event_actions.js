import * as eventUtil from "../util/event_util";

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveEvent = event => {
  return {
    type: RECEIVE_EVENT,
    event
  };
};

export const removeEvent = eventId => {
  return {
    type: REMOVE_EVENT,
    eventId
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_EVENT_ERRORS
  };
};

export const fetchEvents = () => dispatch =>
  eventUtil.fetchEvents().then(events => dispatch(receiveAllEvents(events)));

export const fetchEvent = id => dispatch => {
  return eventUtil.fetchEvent(id).then(event => {
    return dispatch(receiveEvent(event));
  });
};

export const createEvent = event => dispatch =>
  eventUtil.createEvent(event).then(
    event => dispatch(receiveEvent(event)),
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    }
  );

export const updateEvent = event => dispatch =>
  eventUtil.updateEvent(event).then(event => dispatch(receiveEvent(event)));

export const deleteEvent = eventId => dispatch =>
  eventUtil.deleteEvent(eventId).then(event => dispatch(removeEvent(eventId)));
