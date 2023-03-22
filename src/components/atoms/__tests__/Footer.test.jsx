import {render, screen, cleanup } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

afterEach(()=> cleanup());

test("should render Footer component", ()=>{
    render(<Footer/>);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent("Copyright © 12-oaks-restaurants-2023");
});