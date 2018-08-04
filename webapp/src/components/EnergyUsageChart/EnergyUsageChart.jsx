import React, { Component } from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

import { colors } from "../../utils";

class EnergyUsageChart extends Component {
  render() {
    const { data } = this.props;
    return (
      <BarChart width={1400} height={400} data={data}>
        <XAxis dataKey="date" />
        <YAxis dataKey="energyUsage" />
        <CartesianGrid horizontal={false} />
        <Tooltip />
        <Bar
          dataKey="energyUsage"
          fill={colors.greenHaze}
          isAnimationActive={false}
        />
      </BarChart>
    );
  }
}

EnergyUsageChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default EnergyUsageChart;
