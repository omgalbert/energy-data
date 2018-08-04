import React, { Component } from "react";
import PropTypes from "prop-types";

import { Tr } from "../../components";
import { Td } from "../../components";

class MeterReadingsRow extends Component {
  render() {
    const { item } = this.props;
    return (
      <Tr key={item.readingDate}>
        <Td>{item.readingDate}</Td>
        <Td>{item.cumulative}</Td>
        <Td>{item.unit}</Td>
      </Tr>
    );
  }
}

MeterReadingsRow.propTypes = {
  item: PropTypes.object.isRequired
};

export default MeterReadingsRow;
