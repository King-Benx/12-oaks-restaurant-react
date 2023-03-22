import {render, screen, cleanup} from "@testing-library/react";
import Card from "../Card";
import "@testing-library/jest-dom";

afterEach(()=> cleanup());

test("should render the Card component", ()=>{
    render(<Card image_url="http//placeholder.io" name="test" id="1" rating={4} review_count={1} price='$$' clickListener={()=> jest.fn()} />);
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent("test");
    expect(cardElement).toHaveTextContent("4");
    expect(cardElement).toHaveTextContent("$$");
});

