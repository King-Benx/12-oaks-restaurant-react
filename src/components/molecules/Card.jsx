import PropTypes from "prop-types";
import Rating from "../atoms/Rating";

function Card({ image_url, name, id, rating, review_count, price, clickListener }) {
  const cardClick=() =>clickListener(id);
  return (
    <div
      className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-70 cursor-pointer"
      onClick={()=>cardClick()}
      onKeyDown={()=>cardClick()}
     role="presentation"
    >
      <img
        className="rounded-t-lg h-80 w-80 object-cover"
        src={image_url}
        alt=""
      />
      <div className="p-4">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {name}
        </div>
        <div className="flex justify-between">
        <Rating rating={rating} />
        <div>{price}</div>
        </div>
        <span className="text-xs">
          <b>Reviews: </b> {review_count}
        </span>
      </div>
    </div>
  );
}

Card.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review_count: PropTypes.number.isRequired,
  price:PropTypes.string,
  clickListener: PropTypes.func.isRequired,
};

export default Card;
