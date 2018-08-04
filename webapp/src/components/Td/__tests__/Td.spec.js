import React from "react";
import { shallow } from "enzyme";

import Td from "../Td";

describe("Component Td - <Td></Td>", () => {
  it("should render the text", () => {
    const value = "Date";
    const component = shallow(<Td>{value}</Td>);
    expect(component.contains(value)).toBe(true);
  });
});
