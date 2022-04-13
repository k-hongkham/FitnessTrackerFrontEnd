import React from "react";
import { useEffect, useState } from "react";
import { fetchAllRoutines } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const getRoutines = async () => {
      const response = await fetchAllRoutines();
      setRoutines(response);
    };
    getRoutines();
  }, []);

  return (
    <div id="routines_container">
      <h1>ROUTINES</h1>
      {routines.map((routine, idx) => {
        return (
          <div className="routine_data" key={routine.activity}>
            <h2>Name: {routine.name}</h2>
            <h3>Goal: {routine.goal}</h3>
            <h5>Creator: {routine.creatorName} </h5>
            <div className="routine_activities">
              {routine.activities.map((activity, idx) => (
                <div key={activity.id}>
                  <h4>Activity Name: {activity.name}</h4>
                  <ul>
                    <li>Description: {activity.description}</li>
                    <li>Count: {activity.count} </li>
                    <li>Duration: {activity.duration}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Routines;
