import {render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import CustomModal from "../CustomModal";
import "@testing-library/jest-dom";

afterEach(()=> cleanup());

test("should render CustomModal component", ()=>{
    const data= {
        name:"test",
        imageUrl:"http://placeholder.com/20x20.png",
        rating:4,
        price: "$$",
        review_count:23,
        is_closed: false,
        phone:"+1234",
        categories:[{title:"abc", tag:"abc"}],
        location:{address1:"1", address2:"2", address3:"3"}
    };
    render(<CustomModal isOpen={true} data={data} closeModalHandler={() => {}} />);
    const modalElement = screen.getByTestId("customModal");
    expect(modalElement).toBeInTheDocument();
    expect(modalElement).toHaveTextContent("Close modal");
    expect(modalElement).toHaveTextContent("test");
    expect(modalElement).toHaveTextContent("+1234");
    expect(modalElement).toHaveTextContent("23");
    expect(modalElement).toHaveTextContent("abc");
    expect(modalElement).toHaveTextContent("Locations");
    expect(modalElement).toHaveTextContent("Address");
    expect(modalElement).toHaveTextContent("1");
    expect(modalElement).toHaveTextContent("2");
    expect(modalElement).toHaveTextContent("3");
    expect(modalElement).toHaveTextContent("Open");
});

test("matches snapshot", () => {
    const data= {
        name:"test",
        imageUrl:"http://placeholder.com/20x20.png",
        rating:4,
        price: "$$",
        review_count:23,
        is_closed: false,
        phone:"+1234",
        categories:[{title:"abc", tag:"abc"}],
        location:{address1:"1", address2:"2", address3:"3"}
    };
    const tree = renderer.create(<CustomModal isOpen={true} data={data} closeModalHandler={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
});
