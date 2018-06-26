export const fetchEvents = () =>
  $.ajax({
    method: "GET",
    url: "events"
  });

export const fetchEvent = id =>
  $.ajax({
    method: "GET",
    url: `events/${id}`
  });

export const createEvent = event =>
  $.ajax({
    url: "events",
    method: "POST",
    data: { event }
  });

export const updateEvent = event =>
  $.ajax({
    url: `events/${event.id}`,
    method: "PUT",
    data: { event }
  });

export const deleteEvent = id =>
  $.ajax({
    url: `events/${id}`,
    method: "DELETE"
  });
