import React from "react";

class CalendarArea extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDaysHeader() {
    return (
      <div className="week names">
        <span className="day">Sun</span>
        <span className="day">Mon</span>
        <span className="day">Tue</span>
        <span className="day">Wed</span>
        <span className="day">Thu</span>
        <span className="day">Fri</span>
        <span className="day">Sat</span>
      </div>
    );
  }

  render() {
    return <div className="calendar-container">{this.renderDaysHeader()}</div>;
  }
}

export default CalendarArea;

// renderMonth() {
//   return <span>{this.state.month.format("MMMM, YYYY")}</span>;
//   }
