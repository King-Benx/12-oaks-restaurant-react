import { useEffect, useState } from "react";
import Card from "../molecules/Card";
import Loader from "../atoms/Loader";
import CustomModal from "../atoms/CustomModal";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main({ location, term }) {
  const [state, setState] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const getRestaurants = async (location = "london", term = "restaurant", signal) => {
    setState(prevState => ({
      ...prevState,
      loading: true,
    }));
    await fetch(
      `${process.env.REACT_APP_API}/api/restaurants?location=${location}&term=${term}`, {signal:signal}
    ).then(async res => {
      if (res.status === 200) {
        const data = await res.json();
        setState(prevState => ({
          ...prevState,
          loading: false,
          restaurants: data,
        }));
      }
      if (res.status === 400 || res.status === 500) {
        toast.error("Invalid input!, Try again");
        setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    });
  };

    getRestaurants(location, term, controller.signal);
    return () => controller.abort();
  }, [location, term]);

  const clickListener = id => {
    setState(prevState=>({
      ...prevState,
      modal: {
        isOpen: true,
        data: state.restaurants.find(it => it.id === id),
      },
    }));
  };

  const closeModalHandler = () => {
    setState(prevState=>({
      ...prevState,
      modal: null,
    }));
  };

  return (
    <div
      id="contentSection"
      className="flex flex-row flex-wrap gap-4 justify-center px-xs-12 mb-10"
      data-testid="main"
    >
      {state.loading && <Loader />}
      {!state.loading &&
        state.restaurants &&
        state?.restaurants.map(restaurant => (
          <Card
            {...restaurant}
            clickListener={clickListener}
            key={restaurant.id}
          />
        ))}
      {state.modal && (
        <CustomModal
          isOpen={state?.modal.isOpen}
          data={state?.modal.data}
          closeModalHandler={closeModalHandler}
        />
      )}
      <ToastContainer />
    </div>
  );
}

Main.propTypes = {
  location: PropTypes.string,
  term: PropTypes.string,
};

export default Main;
