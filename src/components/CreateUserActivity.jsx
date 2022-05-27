import React, { useState, useEffect } from "react";
import {
  addActivityToRoutine,
  fetchAllActivities,
  updateActivity,
  fetchMyRoutines,
  getPublicRoutines,
  updateRoutineActivity,
} from "../api";
import { DeleteActivity } from "./";

const CreateUserActivity = ({
  routine,
  token,
  activity,
  routines,
  setRoutines,
  username,
}) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  // const [userRoutines, setUserRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [activityId, setActivityId] = useState(0);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [updateDuration, setUpdateDuration] = useState("");
  // const [updateCount, setUpdateCount] = useState("");

  useEffect(() => {
    async function getActivities() {
      const allActivities = await fetchAllActivities();
      setActivities(allActivities);
    }

    getActivities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addActivityToRoutine(
        token,
        activityId,
        routine.id,
        count,
        duration
      );

      const allRoutines = await fetchMyRoutines(username, token);
      setSuccess(true);
      setSubmitted(true);
      setRoutines(allRoutines);
    } catch (error) {
      console.error(error);
      setSuccess(false);
    } finally {
      setCount("");
      setDuration("");
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

  return (
    <div>
      <h1>Add any existing activity to your routine</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <select value={activityId} onChange={handleAddingActivities}>
            <option value="default">Choose an Activity</option>
            {activities.length > 0
              ? activities.map((activity, idx) => {
                  return (
                    <>
                      <option
                        key={`activity_to_add: ${idx}`}
                        value={activity.id}
                      >
                        {activity.name}
                      </option>
                      <DeleteActivity />
                    </>
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
