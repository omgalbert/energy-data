import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { Td } from "../../components";

class MeterReadingsRow extends Component {
  render() {
    const { item } = this.props;
    return (
      <tr key={item.readingDate}>
        <Td>{moment(item.readingDate).format("DD-MM-Y")}</Td>
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
