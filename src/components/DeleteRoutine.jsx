import React from "react";
import { deleteUserRoutine, fetchMyRoutines } from "../api";

const DeleteRoutine = ({ routine, routines, setRoutines, token }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    const deletingRoutine = async (e) => {
      const response = await deleteUserRoutine(routine.id, token);
      const newArray = [...routines];
      const filteredRemainingRoutines = newArray.filter((el) => {
        if (el.id !== routine.id) {
          return true;
        } else {
          return false;
        }
      });

      setRoutines([...filteredRemainingRoutines]);
    };
    deletingRoutine();
    fetchMyRoutines();
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <button value={routine.id} type="submit">
          Delete Routine
        </button>
      </form>
    </div>
  );
};

export default DeleteRoutine;
