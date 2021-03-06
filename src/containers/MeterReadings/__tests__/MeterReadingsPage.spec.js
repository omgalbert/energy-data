import React from "react";
import { shallow } from "enzyme";

import MeterReadingsPage from "../MeterReadingsPage";

describe("Page MeterReadingsPage", () => {
  it("should render MeterReadings Component", () => {
    global.fetch = jest.fn(() => new Promise(resolve => resolve()));
    const meterReadings = [];
    const component = shallow(
      <MeterReadingsPage meterReadings={meterReadings} />
    );
    expect(component.find("MeterReadings").length).toEqual(1);
  });
});
