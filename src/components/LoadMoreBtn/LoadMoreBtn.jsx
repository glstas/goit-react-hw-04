import React from "react";

const LoadMoreBtn = ({ onClick, disabled }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        LoadMore
      </button>
    </div>
  );
};

export default LoadMoreBtn;
