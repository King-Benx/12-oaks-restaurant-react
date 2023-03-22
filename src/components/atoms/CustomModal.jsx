import PropTypes from "prop-types";
import Rating from "./Rating";
import { GiRotaryPhone } from "react-icons/gi";
import { FcClock } from "react-icons/fc";

function CustomModal({ isOpen, data, closeModalHandler }) {
  const {
    name,
    image_url,
    rating,
    price,
    review_count,
    phone,
    is_closed,
    categories,
    location,
  } = data;
  const sanitizedCategories = categories.map(it => it.title);
  const closeModal = () => closeModalHandler();
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed backdrop-blur-sm bg-white/30 top-0 left-0 right-0 z-50 ${
        isOpen ? "visible" : "hidden"
      } w-full p-4 overflow-x-hidden overflow-y-auto  h-[calc(100%-1rem)] md:h-full`}
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="fixed md:w-1/2 top-20 right-0 left-0 mx-auto bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {name}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => closeModal()}
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
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <img className="h-80 w-full object-cover" src={image_url} alt="" />

          <div className="p-6 space-y-3">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {name}
            </div>
            <div className="flex justify-between">
              {phone.length > 0 && (
                <div className="flex justify-start items-center gap-2 leading-relaxed text-gray-500 dark:text-gray-400">
                  <GiRotaryPhone size={20} /> {phone}
                </div>
              )}
              <div className="flex justify-start items-center gap-2 leading-relaxed text-gray-500 dark:text-gray-400">
                <FcClock size={20} /> {is_closed ? "Closed" : "Open"}
              </div>
            </div>
            <div className="flex justify-between">
              <Rating rating={rating} />
              <div>{price}</div>
            </div>
            <span className="text-md">
              <b>Reviews: </b> {review_count}
            </span>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Category:{" "}
              <span className="text-orange-900 text-sm">
                {sanitizedCategories.join(", ")}{" "}
              </span>
            </p>
            <div className="border-t border-gray-200 text-center py-4">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Locations
                      </th>
                      <th scope="col" className="px-6 py-3">
                       Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4">Address </td>
                      <td className="px-6 py-4">{location.address1}</td>
                    </tr>
                    {((location.address2 !==null) && (location?.address2.length >0)) && <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4">Address </td>
                      <td className="px-6 py-4">{location.address2}</td>
                    </tr>}
                    {((location.address3 !==null) && (location?.address3.length>0)) && <tr className="bg-white dark:bg-gray-800">
                      <td className="px-6 py-4">Address </td>
                      <td className="px-6 py-4">{location.address3}</td>
                    </tr>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
};

export default CustomModal;
