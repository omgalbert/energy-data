import React from "react";
import { shallow } from "enzyme";

import MeterReadingsRow from "../MeterReadingsRow";

describe("MeterReadingsRow component", () => {
  it("should render tr Component", () => {
    const item = {
      cumulative: 17600,
      readingDate: "2017-03-31T00:00:00.000Z",
      unit: "kWh"
    };
    const component = shallow(<MeterReadingsRow item={item} />);
    expect(component.find("tr").length).toEqual(1);
  });
});
