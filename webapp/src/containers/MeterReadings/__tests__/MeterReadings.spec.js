import React from "react";
import { shallow } from "enzyme";

import MeterReadings from "../MeterReadings";

describe("MeterReadings Component", () => {
  it("should have div", () => {
    const meterReadings = [];
    const component = shallow(<MeterReadings meterReadings={meterReadings} />);
    expect(component.find("div").length).toEqual(1);
  });

  it("should have EnergyUsageChart Component", () => {
    const meterReadings = [];
    const component = shallow(<MeterReadings meterReadings={meterReadings} />);
    expect(component.find("EnergyUsageChart").length).toEqual(1);
  });

  it("should have MeterReadingsList Component", () => {
    const meterReadings = [];
    const component = shallow(<MeterReadings meterReadings={meterReadings} />);
    expect(component.find("MeterReadingsList").length).toEqual(1);
  });
});
