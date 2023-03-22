import {render, screen, fireEvent, cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";
import Search from "../Search";
import "@testing-library/jest-dom";

afterEach(()=> cleanup());

test("should render the Search component", ()=>{
    render(<Search onSubmitHandler={()=>{}}/>);
    const locationInput = screen.getByLabelText("location");
    const termInput = screen.getByLabelText("term");
    const buttonSubmit = screen.getByLabelText("submit");
    const searchElement = screen.getByTestId("search");
    fireEvent.change(locationInput,{target:{value:"london"}});
    fireEvent.change(termInput,{target:{value:"restaurant"}});
    fireEvent.click(buttonSubmit);
    expect(searchElement).toBeInTheDocument();
    expect(searchElement).toHaveTextContent("Search Icon");
    expect(locationInput.value).toBe("london");
    expect(termInput.value).toBe("restaurant");
});

test("matches snapshot", () => {
    const tree = renderer.create(<Search onSubmitHandler={()=>{}}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
