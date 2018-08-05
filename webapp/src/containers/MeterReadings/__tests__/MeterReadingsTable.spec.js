import React from "react";
import { mount } from "enzyme";

import MeterReadingsTable from "../MeterReadingsTable";

describe("MeterReadingsTable component", () => {
  it("should render tbody Component", () => {
    const list = [];
    const component = mount(<MeterReadingsTable list={list} />);
    expect(component.find("tbody").length).toEqual(1);
  });
});
