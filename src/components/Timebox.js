import React from "react";

const Timebox = ({
  title,
  totalTimeInMinutes,
  onDelete,
  onEdit,
  isEditable
}) => (
  <>
    <div className="Timebox">
      <h3>
        {title} - {totalTimeInMinutes} min.
      </h3>

      {isEditable || (
        <>
          <button className="del" onClick={onDelete}>usuń</button>
          <button className="edit" onClick={onEdit}>edycja</button>
        </>
      )}
    </div>
  </>
);

export default Timebox;
