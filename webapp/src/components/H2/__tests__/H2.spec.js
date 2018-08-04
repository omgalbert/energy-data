import { shallow } from "enzyme";

import H2 from "../H2";

describe("Component title H2 - <H2></H2>", () => {
  it("should render the text", () => {
    const value = "This is a title";
    const component = shallow(<H2>{value}</H2>);
    expect(component.contains(value)).toBe(true);
  });
});
