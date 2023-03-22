import {render, screen, cleanup } from "@testing-library/react";
import Loader from "../Loader";
import "@testing-library/jest-dom";

afterEach(()=> cleanup());

test("should render Loader component", ()=>{
    render(<Loader/>);
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveTextContent("Loading...");
});