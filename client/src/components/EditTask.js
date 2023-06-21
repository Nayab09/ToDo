import React, { useState } from "react";

const EditTask = () => {
  return (
    <>
      <button style={{ backgroundColor: "steelblue" }} className="btn">
        Edit
      </button>
    </>
  );
};
EditTask.defaultProps = {
  color: "steelblue",
};

export default EditTask;
