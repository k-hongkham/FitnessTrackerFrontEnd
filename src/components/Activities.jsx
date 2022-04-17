import React from "react";
import { fetchAllActivities } from "../api";
import { useEffect, useState } from "react";

const Activities = ({ token }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      const response = await fetchAllActivities();
      setActivities(response);
    };
    getActivities();
  }, []);

  return (
    <div>
      <h1>Activities</h1>
      {activities.map((activity, idx) => {
        return (
          <div className="routine_data">
            <h2>Name: {activity.name}</h2>
            <h3>Description: {activity.description}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
