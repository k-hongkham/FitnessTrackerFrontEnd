import React from "react";
import { createActivity, fetchAllActivities } from "../api";
import { useEffect, useState } from "react";

const Activities = ({ token }) => {
  const [activities, setActivities] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getActivities = async () => {
      const response = await fetchAllActivities();
      setActivities(response);
    };
    getActivities();
  }, []);

  const handleCreateActivity = (e) => {
    e.preventDefault();
    if (name === "" || description === "") {
      alert("ALREADY EXISTS");
      return;
    }
    if (activities.filter((el) => el.name === name).length > 0) {
      alert("ALREADY EXISTS");
      return;
    } else {
      const getActivityDetails = async (e) => {
        const activityDetails = await createActivity(name, description, token);
        const newActivityArr = [activityDetails, ...activities];

        setActivities(newActivityArr);
      };
      getActivityDetails();
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <h1>Activities</h1>
      <form onSubmit={handleCreateActivity}>
        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={handleName}
        ></input>

        <input
          value={description}
          type="text"
          placeholder="goal"
          onChange={handleDescription}
        ></input>

        <button type="submit">Create Activity</button>
        {activities.map((activity, idx) => {
          return (
            <div className="activity_data" key={`allActivities: ${idx}`}>
              <h2>Name: {activity.name}</h2>
              <h3>Description: {activity.description}</h3>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Activities;
