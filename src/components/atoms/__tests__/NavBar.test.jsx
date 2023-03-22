import {render, screen, cleanup } from "@testing-library/react";
import NavBar from "../NavBar";
import "@testing-library/jest-dom";

afterEach(()=> cleanup());

test("should render NavBar component", ()=>{
    render(<NavBar/>);
    const navElement = screen.getByTestId("navbar");
    expect(navElement).toBeInTheDocument();
    expect(navElement).toHaveTextContent("12-oaks Restuarants");
    expect(navElement).toHaveTextContent("Menu");
});