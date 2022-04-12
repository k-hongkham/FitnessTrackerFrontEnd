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
    <div>
      <h1>ROUTINES</h1>
      {routines.map((routine, idx) => {
        return (
          <div className="routine_data">
            <h3>Name: {routine.name}</h3>
            <h2>Goal: {routine.goal}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Routines;
