import {render, screen, cleanup} from "@testing-library/react";
import Main from "../Main";
import "@testing-library/jest-dom";

afterEach(()=> cleanup());

test("should render the Main component", ()=>{
    render(<Main location="london" term="restaurant" />);
    const mainElement = screen.getByTestId("main");
    expect(mainElement).toBeInTheDocument();
});

