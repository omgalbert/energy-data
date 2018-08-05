import React from "react";
import { shallow } from "enzyme";

import Th from "../Th";

describe("Component Th - <Th></Th>", () => {
  it("should render the text", () => {
    const value = "Date";
    const component = shallow(<Th>{value}</Th>);
    expect(component.contains(value)).toBe(true);
  });
});
