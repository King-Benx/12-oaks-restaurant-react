import {render, screen, cleanup} from "@testing-library/react";
import Home from "../Home";
import "@testing-library/jest-dom";

afterEach(()=> cleanup());

test("should render the Home component", ()=>{
    render(<Home/>);
    const homeElement = screen.getByTestId("home");
    expect(homeElement).toBeInTheDocument();
});

