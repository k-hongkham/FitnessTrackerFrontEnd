import React, { useState, useEffect } from "react";
import {
  addActivityToRoutine,
  fetchAllActivities,
  updateCountDuration,
  updateActivity,
  deleteRoutineActivity,
  fetchMyRoutines,
  getPublicRoutines,
} from "../api";

const CreateUserActivity = ({ routine, setRoutines, token }) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [activities, setActivities] = useState([]);
  const [activityId, setActivityId] = useState(0);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");

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
    const result = await updateActivity(
      token,
      activities.id,
      name,
      description
    );
    const response = await updateCountDuration(
      activities.routineActivityId,
      count,
      duration,
      token
    );
    const updatedActivity = await fetchAllActivities();
    const updatedRoutines = await fetchMyRoutines(username, token);
    const renderRoutines = await getPublicRoutines();
    setActivities(updateActivity);
    setRoutines(updatedRoutines);
  };

  return (
    <div>
      <h1>ADDING ACTIVITIES</h1>

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
          <form onSubmit={handleUpdatingCountDuration}>
            <button type="submit">Update Count and Duration</button>
          </form>
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
        <form onSubmit={handleUpdatingCountDuration}>
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
          <button type="submit">Update Count and Duration</button>
        </form>
      </form>

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
