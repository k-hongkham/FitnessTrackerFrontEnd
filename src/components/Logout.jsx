import React from "react";

const Logout = ({ setIsLoggedIn, setToken }) => {
  const logoutUser = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken(localStorage.removeitem("token"));
  };

  return (
    <form
      onSubmit={() => {
        logoutUser();
      }}
    >
      <button type="submit" className="btn btn-outline-danger btn-sm">
        Logout
      </button>
    </form>
  );
};

export default Logout;
