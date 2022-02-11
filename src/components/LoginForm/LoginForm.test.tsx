import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import LoginForm from "./LoginForm";

describe("SearchBar tests", () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<LoginForm />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
