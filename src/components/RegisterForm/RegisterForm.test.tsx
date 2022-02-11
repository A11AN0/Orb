import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import RegisterForm from "./RegisterForm";

describe("SearchBar tests", () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<RegisterForm />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
