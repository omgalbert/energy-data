import React, { Component } from "react";
import PropTypes from "prop-types";

import MeterReadingsTable from "./MeterReadingsTable";
import { EnergyUsageChart } from "../../components";
import { H2 } from "../../components";
import { getEnergyUsageData } from "../../utils";

class MeterReadings extends Component {
  render() {
    const { meterReadings } = this.props;
    const energyUsageData = getEnergyUsageData(meterReadings);

    return (
      <div>
        <H2>Energy Usage</H2>
        <EnergyUsageChart data={energyUsageData} />

        <H2>Meter Readings</H2>
        <MeterReadingsTable list={meterReadings} />
      </div>
    );
  }
}

MeterReadings.propTypes = {
  meterReadings: PropTypes.array.isRequired
};

export default MeterReadings;
