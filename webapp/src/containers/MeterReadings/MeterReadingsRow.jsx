import React, { Component } from "react";
import PropTypes from "prop-types";

import { Td } from "../../components";

class MeterReadingsRow extends Component {
  render() {
    const { item } = this.props;
    return (
      <tr key={item.readingDate}>
        <Td>{item.readingDate}</Td>
        <Td>{item.cumulative}</Td>
        <Td>{item.unit}</Td>
      </tr>
    );
  }
}

MeterReadingsRow.propTypes = {
  item: PropTypes.object.isRequired
};

export default MeterReadingsRow;
