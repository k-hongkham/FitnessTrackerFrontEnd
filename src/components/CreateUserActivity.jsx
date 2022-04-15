import React, { useState } from "react";
import { addActivityToRoutine, fetchMyRoutines } from "../api";
import Activities from "./Activities";

const CreateUserActivity = ({ routine, token }) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [acts, setActs] = useState([]);
  const [activities, allActivities] = useState("");
  const [addingActs, setAddingActs] = useState({
    id: "",
    name: "",
    count: "",
    duration: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await addActivityToRoutine(
      routine.id,
      activities.id,
      count,
      duration,
      token
    );
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleAddingActs = (e) => {
    setAddingActs({ ...addingActs, id: e.target.value });
  };

  return (
    <div>
      <h1>ADDING ACTIVITIES</h1>

      <form onSubmit={handleSubmit}>
        <select value={addingActs.id} onChange={handleAddingActs}>
          <option value="default">Choose an Activity</option>
          {acts
            ? acts.map((activity, idx) => {
                return (
                  <div>
                    <option key={`activity_to_add: ${idx}`} value={activity}>
                      {`${activity.name}`}
                    </option>
                  </div>
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
  );
};

export default CreateUserActivity;
