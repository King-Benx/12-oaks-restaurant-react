import {render, screen, cleanup} from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

afterEach(()=> cleanup());

test("should render the App component", ()=>{
    render(<App />);
    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();
});

