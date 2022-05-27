import React from "react";
import { deleteRoutineActivity, fetchMyRoutines } from "../api";

const DeleteActivity = ({ activity, token, username, setRoutines }) => {
  const handleDeleteActivity = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteRoutineActivity(
        activity.routineActivityId,
        token
      );

      const allRoutines = await fetchMyRoutines(username, token);

      setRoutines(allRoutines);
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  return (
    <div>
      <button onClick={handleDeleteActivity}>Delete Activity</button>
    </div>
  );
};

export default DeleteActivity;
