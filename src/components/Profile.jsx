import React, { useState, useEffect } from "react";
import { fetchMyRoutines, fetchUserProfile, updateUserRoutine } from "../api";
import { CreateUserRoutine } from "./index";

const Profile = ({ username, token }) => {
  const [routines, setRoutines] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    if (username) {
      const showRoutines = async () => {
        const response = await fetchMyRoutines(username, token);
        console.log("response", response);

        setRoutines(response);
      };
      showRoutines();
    }
  }, [username, token]);

  const editRoutines = async () => {
    const response = await updateUserRoutine(
      name,
      goal,
      isPublic,
      routineId,
      token
    );
  };

  return (
    <div>
      <h1>PROFILEEEE</h1>
      <CreateUserRoutine token={token} />

      {routines.map((routine, idx) => {
        return (
          <div className="my_routines" key={`allUserRoutines: ${idx}`}>
            <h2>Name: {routine.name}</h2>
            <h3>Goal: {routine.goal}</h3>
            <div className="my_routine_activities">
              {routine.activities.map((activity, idx) => (
                <div key={`allUserActivities: ${idx}`}>
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

export default Profile;
