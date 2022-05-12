import React, { useState } from "react";
import {
  fetchAllActivities,
  updateActivity,
  fetchMyRoutines,
  getPublicRoutines,
  updateRoutineActivity,
} from "../api";

const UpdateRoutineActivity = ({
  token,
  routine,
  activity,
  setActivities,
  setRoutines,
}) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [userRoutines, setUserRoutines] = useState([]);
  const [activityId, setActivityId] = useState(0);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [updateDuration, setUpdateDuration] = useState("");
  const [updateCount, setUpdateCount] = useState("");
  const [activityRoutine, setActivityRoutine] = useState("");

  const handleUpdatingCountDuration = async (e) => {
    e.preventDefault();
    const response = await updateActivity(
      token,
      activity.id,
      name,
      description
    );

    const result = await updateRoutineActivity(
      activity.routineActivityId,
      token,
      updateCount,
      updateDuration
    );
    console.log("UPDATECOUNT/DURATION", activity.routineActivityId);

    if (result.id) {
      setCount("");
      setDuration("");
      setSuccess(true);
    } else {
      setSuccess(false);
    }

    console.log("STARTING COUNT/DURATION UPDATE", activity.routineActivityId);
    const newActs = await fetchAllActivities();
    const newUserRous = await fetchMyRoutines();
    const newRous = await getPublicRoutines();
    setActivities(newActs);
    setRoutines(newRous);
    setUserRoutines(newUserRous);
  };

  return (
    <div>
      <h1>Update the Activity</h1>

      <form onSubmit={handleUpdatingCountDuration}>
        <input
          value={updateCount}
          type="text"
          placeholder="New Count"
          onChange={(e) => {
            setUpdateCount(e.target.value);
          }}
        ></input>
        <input
          value={updateDuration}
          type="text"
          placeholder="New Duration"
          onChange={(e) => {
            setUpdateDuration(e.target.value);
          }}
        ></input>
        <button type="submit">Update Count and Duration</button>
      </form>
    </div>
  );
};

export default UpdateRoutineActivity;