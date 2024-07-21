import React from "react";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>
        LoadMore
      </button>
    </div>
  );
};

export default LoadMoreBtn;
