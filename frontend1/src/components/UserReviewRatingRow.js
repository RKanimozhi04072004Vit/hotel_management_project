

import React from "react";
import Axios from "axios";

function UserReviewRatingRow(props) {
  const { _id, name, email, HotalRating, HotalReview } = props.obj;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(HotalRating);
    const hasHalfStar = HotalRating % 1 !== 0;

    // Full stars
    for (let i = 1; i <= fullStars; i++) {
      stars.push(
        <span key={i} style={{ fontSize: "24px", color: "#FFD700" }}>
          &#9733;
        </span>
      );
    }

    // Half star if applicable
    if (hasHalfStar) {
      stars.push(
        <span
          key="half"
          style={{ fontSize: "24px", color: "#FFD700" }}
        >
          &#9734;&#65039;{/* half-star character */}
        </span>
      );
    }

    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 1; i <= emptyStars; i++) {
      stars.push(
        <span
          key={`empty-${i}`}
          style={{ fontSize: "24px", color: "#ccc" }}
        >
          &#9734;
        </span>
      );
    }

    return stars;
  };

  return (
    <div
      style={{
        border: "1px solid #d496a7",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px",
        width: "80%",
        backgroundColor: "#020A0E",
        color: "white",
       
      }}
      
    >
      <h4>{name}</h4>
      <p>Email: {email}</p>
      <p>Hotel Rating: {renderStars()}</p>
      <p >Hotel Review: {HotalReview}</p>
     
    </div>
  );
}

export default UserReviewRatingRow;


