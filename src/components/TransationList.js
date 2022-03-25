import React from "react";

const TransationList = () => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        <li class="minus">
          Cash <span>-$400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};

export default TransationList;
