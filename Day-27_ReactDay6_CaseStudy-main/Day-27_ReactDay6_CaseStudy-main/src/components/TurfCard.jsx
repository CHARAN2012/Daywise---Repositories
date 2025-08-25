import React from "react";

const TurfCard = ({ turf, onAddToCart, onEdit, onDelete, showActions = false }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{turf.title}</h5>
        <p className="card-text mb-1">
          <strong>Location:</strong> {turf.location}
        </p>
        <p className="card-text mb-1">
          <strong>Price/hour:</strong> ₹{turf.price}
        </p>
        <p className="card-text">{turf.description}</p>

        <div className="mt-auto">
          {onAddToCart && (
            <button
              className="btn btn-success w-100 mb-2"
              onClick={() => onAddToCart(turf)}
            >
              Add to Cart
            </button>
          )}

          {showActions && (
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-primary"
                onClick={() => onEdit(turf.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(turf.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TurfCard;
