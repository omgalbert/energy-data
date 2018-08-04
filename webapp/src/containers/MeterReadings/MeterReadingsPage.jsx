import React, { Component } from "react";

import MeterReadings from "./MeterReadings";
import meterReadingsData from "../../data/meterReadingsSample.json";
import { getMeterReadingApi } from "../../api/meterReading";

class MeterReadingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meterReadings: []
    };
  }

  componentDidMount() {
    getMeterReadingApi().then(meterReadings => {
      this.setState({ meterReadings });
    });
  }

  render() {
    const { meterReadings } = this.state;

    return <MeterReadings meterReadings={meterReadings} />;
  }
}

export default MeterReadingsPage;
