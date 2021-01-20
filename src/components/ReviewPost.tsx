import React, { Fragment, useState } from "react";

type Props = {
  username: string;
  review: string;
  rating: number;
};

function ReviewPost(props: Props) {
  const [updatedRating, setUpdatedRating] = useState(props.rating);
  function addRating() {
    setUpdatedRating(updatedRating + 1);
  }
  return (
    <>
      <p>User Name: {props.username}</p>
      <p>Review: {props.review}</p>
      <p>Rating: {updatedRating}</p>
      <button onClick={addRating}>Add Rating</button>
    </>
  );
}
export default ReviewPost;
