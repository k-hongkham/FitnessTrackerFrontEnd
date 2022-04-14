import React, { useState } from "react";
import { deleteUserRoutine } from "../api";

const DeleteRoutine = ({ routine, routines, setRoutines, token }) => {
  const deletingRoutine = async (e) => {
    const result = await deleteUserRoutine(routine.id, token);
    const newArray = [...routines];
    const filteredRemainingRoutines = newArray.filter((el) => {
      if (el.id !== routine.id) {
        return true;
      } else {
        return false;
      }
    });

    console.log("filteredRemainingRoutines", filteredRemainingRoutines);

    setRoutines(filteredRemainingRoutines);
  };

  return (
    <div>
      <form>
        <button
          value={routine.id}
          type="submit"
          onClick={(e) => {
            deletingRoutine(e);
          }}
        >
          Delete Routine
        </button>
      </form>
    </div>
  );
};

export default DeleteRoutine;
