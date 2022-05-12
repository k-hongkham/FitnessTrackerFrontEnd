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

const AddActivityToRoutine = ({ routine, activity }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("what is this?", activityId);
    const response = await addActivityToRoutine(
      activity.id,
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

  return (
    <div>
      <h1>ADDING ACTIVITIES</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <select value={activityId} onChange={handleAddingActivities}>
            <option value="default">Choose an Activity</option>
            {routine.activities && routine.activities.length > 0
              ? routine.activities.map((activity, idx) => {
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
    </div>
  );
};

export default AddActivityToRoutine;
