import React from "react";
import { shallow } from "enzyme";

import Tr from "../Tr";

describe("Component Tr - <Tr></Tr>", () => {
  it("should render The text", () => {
    const value = "Date";
    const component = shallow(<Tr>{value}</Tr>);
    expect(component.contains(value)).toBe(true);
  });
});
