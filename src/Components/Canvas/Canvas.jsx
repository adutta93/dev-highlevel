import React from "react";

import CanvasCard from "../CanvasCard/CanvasCard";

const Canvas = ({ card, addElementToRow }) => {
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
