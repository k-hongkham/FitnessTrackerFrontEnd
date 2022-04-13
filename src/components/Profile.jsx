import React, { userState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <CreateUserRoutine></CreateUserRoutine>
    </div>
  );
};

export default Profile;
