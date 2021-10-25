import React, { useState, useEffect } from "react";

import CanvasCard from "../CanvasCard/CanvasCard";

const Canvas = ({ card, addElementToRow }) => {
  console.log("Card from canvas", card);

  const createRow = () => {
    return card?.map((item, index) => (
      <CanvasCard
        key={item.id}
        rowId={index}
        number={item.column}
        addElementToRow={addElementToRow}
        item={item}
      />
    ));
  };
  return <div>{createRow()}</div>;
};

export default Canvas;
