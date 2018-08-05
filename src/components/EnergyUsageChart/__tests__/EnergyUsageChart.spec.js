import React from "react";
import { shallow } from "enzyme";

import { colors } from "../../../utils";
import EnergyUsageChart from "../EnergyUsageChart";

describe("Component EnergyUsageChart - <EnergyUsageChart></EnergyUsageChart> . ", () => {
  it("should render BarChart", () => {
    const energyUsageData = [];
    const component = shallow(<EnergyUsageChart data={energyUsageData} />);
    expect(component.find("BarChart").length).toEqual(1);
  });

  it("should have XAxis with attr", () => {
    const energyUsageData = [];
    const component = shallow(<EnergyUsageChart data={energyUsageData} />);
    expect(component.find("XAxis").length).toEqual(1);
    expect(component.find("XAxis").prop("dataKey")).toEqual("date");
  });

  it("should have YAxis with attr", () => {
    const energyUsageData = [];
    const component = shallow(<EnergyUsageChart data={energyUsageData} />);
    expect(component.find("YAxis").length).toEqual(1);
    expect(component.find("YAxis").prop("dataKey")).toEqual("energyUsage");
  });

  it("should have YAxis with attr", () => {
    const energyUsageData = [];
    const component = shallow(<EnergyUsageChart data={energyUsageData} />);
    expect(component.find("YAxis").length).toEqual(1);
    expect(component.find("YAxis").prop("dataKey")).toEqual("energyUsage");
  });

  it("should have CartesianGrid horizontal false", () => {
    const energyUsageData = [];
    const component = shallow(<EnergyUsageChart data={energyUsageData} />);
    expect(component.find("CartesianGrid").length).toEqual(1);
    expect(component.find("CartesianGrid").prop("horizontal")).toEqual(false);
  });

  it("should have tooltip", () => {
    const energyUsageData = [];
    const component = shallow(<EnergyUsageChart data={energyUsageData} />);
    expect(component.find("Tooltip").length).toEqual(1);
  });

  it("should have Bar with attr", () => {
    const energyUsageData = [];
    const component = shallow(<EnergyUsageChart data={energyUsageData} />);
    expect(component.find("Bar").length).toEqual(1);
    expect(component.find("Bar").prop("dataKey")).toEqual("energyUsage");
    expect(component.find("Bar").prop("fill")).toEqual(colors.greenHaze);
    expect(component.find("Bar").prop("isAnimationActive")).toEqual(false);
  });
});
