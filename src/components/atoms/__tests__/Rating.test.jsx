import {render, screen, cleanup } from "@testing-library/react";
import Rating from "../Rating";
import "@testing-library/jest-dom";

afterEach(()=> cleanup());

test("should render Rating component", ()=>{
    render(<Rating rating={4}/>);
    const ratingElement = screen.getByTestId("rating");
    expect(ratingElement).toBeInTheDocument();
    expect(ratingElement).toHaveTextContent("First star");
    expect(ratingElement).toHaveTextContent("Second star");
    expect(ratingElement).toHaveTextContent("Third star");
    expect(ratingElement).toHaveTextContent("Fourth star");
    expect(ratingElement).toHaveTextContent("Fifth star");
    expect(ratingElement).toHaveTextContent("out of 5");
});