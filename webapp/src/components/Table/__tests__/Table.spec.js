import React from "react";
import { shallow } from "enzyme";

import Table from "../Table";

describe("Component Table - <Table></Table>", () => {
  it("should render the table", () => {
    const element = <tbody />;
    const component = shallow(<Table>{element}</Table>);
    expect(component.contains(element)).toBe(true);
  });
});
