import React, { useState } from "react";
import { updateUserRoutine, addActivityToRoutine } from "../api";

const EditSingleRoutine = ({ routine, routines, setRoutines, token }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatingUserRous = async (e) => {
      const response = await updateUserRoutine(
        name,
        goal,
        isPublic,
        routine.id,
        token
      );

      const newRoutineArr = [...routines];
      const filteredNewRoutineArr = newRoutineArr.filter((el) => {
        if (el.id !== response.id) {
          return true;
        } else {
          return false;
        }
      });

      setRoutines([...filteredNewRoutineArr, response]);
    };
    updatingUserRous();
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleGoal = (e) => {
    setGoal(e.target.value);
  };

  const handleIsPublic = (e) => {
    setIsPublic(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={handleName}
        />
        <input
          value={goal}
          type="text"
          placeholder="Goal"
          onChange={handleGoal}
        />
        <span>
          Is Public{" "}
          <input value={isPublic} type="checkbox" onChange={handleIsPublic} />
        </span>

        <button type="submit">Update Routine</button>
      </form>
    </div>
  );
};

export default EditSingleRoutine;
