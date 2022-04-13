import React, { useState, useEffect } from "react";
import { fetchMyRoutines } from "../api";
import { CreateUserRoutine } from "./index";

const Profile = ({ username, token }) => {
  const [routines, setRoutines] = useState([]);

  // useEffect(() => {
  //   if (username.username) {
  //     const showRoutines = async () => {
  //       const response = await fetchMyRoutines(username.username, token);
  //       setRoutines(response);
  //     };
  //     showRoutines();
  //   }
  // }, [username, token]);
  return (
    <div>
      <h1>PROFILEEEE</h1>
      <CreateUserRoutine />
    </div>
  );
};

export default Profile;
