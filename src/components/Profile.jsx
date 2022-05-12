import React, { useState, useEffect } from "react";
import { fetchMyRoutines } from "../api";
import {
  CreateUserRoutine,
  EditSingleRoutine,
  DeleteRoutine,
  CreateUserActivity,
  UpdateRoutineActivity,
  DeleteActivity,
} from "./index";

const Profile = ({ username, token }) => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (username) {
      const showRoutines = async () => {
        const response = await fetchMyRoutines(username, token);
        setRoutines(response);
      };
      showRoutines();
    }
  }, [username, token, setRoutines]);

  return (
    <div id="profile">
      <h1>WELCOME TO YOUR PROFILE {username}!</h1>
      <CreateUserRoutine
        token={token}
        routines={routines}
        setRoutines={setRoutines}
      />

      {routines.length
        ? routines.map((routine, idx) => {
            return (
              <div className="my_routines" key={`allUserRoutines: ${idx}`}>
                <h2>Name: {routine.name}</h2>
                <h3>Goal: {routine.goal}</h3>
                <CreateUserActivity
                  routine={routine}
                  setRoutines={setRoutines}
                  token={token}
                />
                <div className="my_routine_activities">
                  {routine.activities && routine.activities.length
                    ? routine.activities.map((activity, idx) => (
                        <div key={`allUserActivities: ${idx}`}>
                          <h4>Activity Name: {activity.name}</h4>
                          <ul>
                            <li>Description: {activity.description}</li>
                            <li>Count: {activity.count} </li>
                            <li>Duration: {activity.duration}</li>
                          </ul>
                          <UpdateRoutineActivity
                            activity={activity}
                            routine={routine}
                            token={token}
                            setActivities={setActivities}
                            setRoutines={setRoutines}
                          />

                          <DeleteActivity
                            activity={activity}
                            token={token}
                            routine={routine}
                          />
                        </div>
                      ))
                    : null}
                </div>

                <EditSingleRoutine
                  routine={routine}
                  routines={routines}
                  setRoutines={setRoutines}
                  token={token}
                />
                <DeleteRoutine
                  routine={routine}
                  routines={routines}
                  setRoutines={setRoutines}
                  token={token}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Profile;
