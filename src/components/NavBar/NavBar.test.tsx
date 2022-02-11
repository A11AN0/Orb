import React from "react";
import Navbar from "./NavBar";
import { shallow, ShallowWrapper } from "enzyme";

describe("Navbar tests", () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Navbar />);
  });

  it("The Navbar should render", () => {
    expect(component).toBeTruthy();
  });
});
