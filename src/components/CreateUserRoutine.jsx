import React, { useState } from "react";
import { createRoutine } from "../api";

const CreateUserRoutine = ({ token, routines, setRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const getRoutineDetails = async (e) => {
      const routineDetails = await createRoutine(name, goal, isPublic, token);

      const newArr = [routineDetails, ...routines];

      setRoutines(newArr);
    };
    getRoutineDetails();
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleGoal = (e) => {
    setGoal(e.target.value);
  };

  return (
    <div>
      <h1>CREATING ROUTINES</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={handleName}
        ></input>

        <input
          value={goal}
          type="text"
          placeholder="goal"
          onChange={handleGoal}
        ></input>

        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
};

export default CreateUserRoutine;
