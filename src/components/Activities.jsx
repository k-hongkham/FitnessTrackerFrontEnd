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
    <div className="row g-3">
      <h1>LIST OF AVAILABLE ACTIVITIES</h1>
      <form onSubmit={handleCreateActivity}>
        <div className="col-sm-6">
          <label for="activityName" className="visually-hidden">
            Activity Name
          </label>
          <input
            className="form-control"
            value={name}
            type="text"
            placeholder="name"
            onChange={handleName}
          ></input>
        </div>
        <div></div>
        <div className="col-sm-6">
          <label for="activityDescription" className="visually-hidden">
            Activity Description
          </label>
          <input
            className="form-control"
            value={description}
            type="text"
            placeholder="goal"
            onChange={handleDescription}
          ></input>
        </div>
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
