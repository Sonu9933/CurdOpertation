import {Component} from 'react';
import renderer from "react-test-renderer";
import {act } from "@testing-library/react";

test("Add button click", () => {
    const onClick = jest.fn();
    const component = renderer.create(<Component />);
    const button = component.querySelector("button");

    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onClick).toHaveBeenCalledTimes(1);
});