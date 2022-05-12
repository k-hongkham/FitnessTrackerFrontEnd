import React, { useState, useEffect } from "react";
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

const CreateUserActivity = ({ routine, token, activity }) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [userRoutines, setUserRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [activityId, setActivityId] = useState(0);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [updateDuration, setUpdateDuration] = useState("");
  const [updateCount, setUpdateCount] = useState("");
  const [activityRoutine, setActivityRoutine] = useState(0);

  useEffect(() => {
    async function getActivities() {
      const allActivities = await fetchAllActivities();
      setActivities(allActivities);
    }

    getActivities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addActivityToRoutine(
      activityId,
      routine.id,
      count,
      duration
    );
    console.log("what activity?", activityId);
    console.log("what routine?", routine.id);

    setSubmitted(true);

    if (response.id) {
      setCount("");
      setDuration("");
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleAddingActivities = (e) => {
    setActivityId(e.target.value);
  };

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

    if (result.id) {
      setCount("");
      setDuration("");
      setSuccess(true);
    } else {
      setSuccess(false);
    }

    const newActs = await fetchAllActivities();
    const newUserRous = await fetchMyRoutines();
    const newRous = await getPublicRoutines();
    setActivities(newActs);
    // setRoutines(newRous);
    setUserRoutines(newUserRous);
  };

  return (
    <div>
      <h1>ADDING ACTIVITIES</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <select value={activityId} onChange={handleAddingActivities}>
            <option value="default">Choose an Activity</option>
            {activities.length > 0
              ? activities.map((activity, idx) => {
                  return (
                    <option key={`activity_to_add: ${idx}`} value={activity.id}>
                      {activity.name}
                    </option>
                  );
                })
              : null}
          </select>
          <input
            value={count}
            type="text"
            placeholder="Count"
            onChange={handleCount}
          ></input>
          <input
            value={duration}
            type="text"
            placeholder="Duration"
            onChange={handleDuration}
          ></input>
          <button type="submit">Add Activity</button>
        </form>
      </div>

      {submitted ? (
        <>
          {success ? (
            <p>Successfully Added Activity</p>
          ) : (
            <p>Problem Adding Activity, add count, and duration</p>
          )}
        </>
      ) : null}
    </div>
  );
};

export default CreateUserActivity;
