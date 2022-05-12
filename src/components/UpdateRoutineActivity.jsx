import React, { useState } from "react";
import {
  addActivityToRoutine,
  fetchAllActivities,
  updateCountDuration,
  updateActivity,
  deleteRoutineActivity,
  fetchMyRoutines,
  getPublicRoutines,
  updateRoutineActivity,
} from "../api";

const UpdateRoutineActivity = ({ token, routine }) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [userRoutines, setUserRoutines] = useState([]);
  //   const [activities, setActivities] = useState([]);
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
    console.log("STARTING COUNT/DURATION UPDATE", count);
    // const response = await updateActivity(token, activityId, name, description);

    // const result = await updateRoutineActivity(
    //   activities.routineActivityId,
    //   token,
    //   updateCount,
    //   updateDuration
    // );
    // console.log("ATTEMPTING TO UPDATE", result);
    // const newActs = await fetchAllActivities();
    // const newUserRous = await fetchMyRoutines();
    // const newRous = await getPublicRoutines();
    // setActivities(newActs);
    // // setRoutines(newRous);
    // setUserRoutines(newUserRous);
  };

  return (
    <div>
      <h1>Update the Activity</h1>

      <form onSubmit={handleUpdatingCountDuration}>
        <select
          value={activityRoutine}
          onChange={(e) => {
            setActivityRoutine(e.target.value);
          }}
        >
          
          {routine.activities.length > 0
            ? routine.activities.map((activity, idx) => {
                return (
                  <option
                    key={`activity_to_update: ${idx}`}
                    value={activity.routineActivityId}
                  >
                    {activity.name}
                  </option>
                );
              })
            : null}
        </select>

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
