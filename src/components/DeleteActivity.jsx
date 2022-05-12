import React from "react";
import { deleteRoutineActivity } from "../api";

const DeleteActivity = (activity, token) => {
  const handleDeleteActivity = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteRoutineActivity(
        activity.routineActivityId,
        token
      );
    } catch (error) {
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
