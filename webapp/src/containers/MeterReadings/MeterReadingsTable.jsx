import React, { Component } from "react";
import PropTypes from "prop-types";

import MeterReadingsRow from "./MeterReadingsRow";
import { Table } from "../../components";
import { Th } from "../../components";

class MeterReadingsTable extends Component {
  render() {
    const { list } = this.props;

    return (
      <Table>
        <tbody>
          <tr>
            <Th>Date</Th>
            <Th>Reading</Th>
            <Th>Unit</Th>
          </tr>
          {list.map(reading => (
            <MeterReadingsRow key={reading.readingDate} item={reading} />
          ))}
        </tbody>
      </Table>
    );
  }
}

MeterReadingsTable.propTypes = {
  list: PropTypes.array.isRequired
};

export default MeterReadingsTable;
