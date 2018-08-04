import React, { Component } from "react";
import PropTypes from "prop-types";

import MeterReadingsItem from "./MeterReadingsItem";

class MeterReadingsList extends Component {
  render() {
    const { list } = this.props;

    return (
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Reading</th>
            <th>Unit</th>
          </tr>
          {list.map(reading => (
            <MeterReadingsItem key={reading.readingDate} item={reading} />
          ))}
        </tbody>
      </table>
    );
  }
}

MeterReadingsList.propTypes = {
  list: PropTypes.array.isRequired
};

export default MeterReadingsList;
