import PropTypes from "prop-types";
import { useState } from "react";

function Search({ onSubmitHandler }) {
  const [state, setState] = useState({location:"", term:""});
  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler(state);
};
  return (
    <div className="container mx-auto bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 my-10 py-10 rounded-lg">
      <form onSubmit={(e) => onSubmit(e)} className="flex justify-center">
        <div className="w-full grid gap-6 mb-6 md:grid-cols-3 px-6">
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Location"
              required
              value={state.location}
              onChange={e =>
                setState(prevState=>({
                  ...prevState,
                  location: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Term"
              required
              value={state.term}
              onChange={e =>
                setState(prevState=>({
                  ...prevState,
                  term: e.target.value,
                }))
              }
            />
          </div>

          <button
            type="submit"
            className="w-10 h-10 p-2.5 text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm text-center"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Search Icon</span>
          </button>
        </div>
      </form>
    </div>
  );
}

Search.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

export default Search;
