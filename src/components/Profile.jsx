import React, { userState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { CreateUserRoutine } from "./index";

const Profile = ({
  token,
  setToken,
  profile,
  setProfile,
  deletingPosts,
  postings,
  routines,
  setRoutines,
}) => {
  return (
    <div>
      <Route element={CreateUserRoutine} />
    </div>
  );
};

export default Profile;
