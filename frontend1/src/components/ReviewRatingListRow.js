

import React from "react";
import Axios from "axios";
import Swal from "sweetalert2";

function ReviewRatingListRow(props) {
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
                <span key="half" style={{ fontSize: "24px", color: "#FFD700" }}>
                    &#9734;&#65039;{/* half-star character */}
                </span>
            );
        }

        // Empty stars
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 1; i <= emptyStars; i++) {
            stars.push(
                <span key={`empty-${i}`} style={{ fontSize: "24px", color: "#ccc" }}>
                    &#9734;
                </span>
            );
        }

        return stars;
    };

    const handleClick = () => {
        Axios.delete(`http://localhost:4000/ReviewRatingRoute/delete-rating/${_id}`)
            .then((res) => {
                if (res.status === 200) {
                    // alert("Record deleted successfully");
                     
Swal.fire({
    icon:"success",
    title:"Record Deleted",
    text:"The record has been deleted successfully",
    customClass:{
        container:"my-swal",
        title:"my-title",
        popup:"my-popup",
    },
}).then(()=>{
    window.location.reload();
});
                    // window.location.reload();
                } else {
                    return Promise.reject();
                }
            })
            // .catch((err) => alert(err));
            .catch((err)=>{
                Swal.fire({
                    icon:"success",
                    title:"Record Deleted",
                    text:"The record has been deleted successfully",
                    customClass:{
                        container:"my-swal",
                        title:"my-title",
                        popup:"my-popup",
                    },
                })
            })
    
    };

    return (
        <tr>
            <td style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>{name}</td>
            <td style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>{email}</td>
            <td style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>
                {renderStars()}
            </td>
            <td style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>{HotalReview}</td>
            <td style={{ backgroundColor: "#FFFFFF", color: "#000000" }}>
                <button onClick={handleClick} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

export default ReviewRatingListRow;

