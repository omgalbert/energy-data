import React, { Component } from "react";
import PropTypes from "prop-types";

class MeterReadingsItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <tr key={item.readingDate}>
        <td>{item.readingDate}</td>
        <td>{item.cumulative}</td>
        <td>{item.unit}</td>
      </tr>
    );
  }
}

MeterReadingsItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default MeterReadingsItem;
