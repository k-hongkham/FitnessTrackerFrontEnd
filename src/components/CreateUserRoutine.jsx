import React, { useState } from "react";
import { createRoutine } from "../api";

const CreateUserRoutine = ({ token, setToken }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const routineDetails = {
      name,
      goal,
    };

    const creatingRoutine = async () => {
      await createRoutine(routineDetails, localStorage.getItem("token"));
    };
    creatingRoutine();
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleGoal = (e) => {
    setGoal(e.target.value);
  };

  return (
    <div>
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
