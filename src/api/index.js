// You can choose to import all your functions, and re-export them here

const base_url = "https://fitnesstrac-kr.herokuapp.com/api";

export const fetchRegisterUser = async (username, password) => {
  try {
    const response = await fetch(`${base_url}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchLogin = async (username, password) => {
  try {
    const response = await fetch(`${base_url}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserProfile = async (token) => {
  try {
    const response = await fetch(`${base_url}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllRoutines = async () => {
  try {
    const response = await fetch(`${base_url}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllActivities = async () => {
  try {
    const response = await fetch(`${base_url}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createRoutine = async (name, goal, isPublic, token) => {
  try {
    const response = await fetch(`${base_url}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMyRoutines = async (username, token) => {
  try {
    const response = await fetch(`${base_url}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUserRoutine = async (
  name,
  goal,
  isPublic,
  routineId,
  token
) => {
  try {
    const response = await fetch(`${base_url}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUserRoutine = async (routineId, token) => {
  try {
    const response = await fetch(`${base_url}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addActivityToRoutine = async (
  activityId,
  routineId,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `${base_url}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activityId,
          count,
          duration,
        }),
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateCountDuration = async (
  routineActivityId,
  count,
  duration,
  token
) => {
  try {
    const response = await fetch(
      `${base_url}/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count,
          duration,
        }),
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteActivity = async (routineActivityId, token) => {
  try {
    const response = await fetch(
      `${base_url}/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createActivity = async (name, description, token) => {
  try {
    const response = await fetch(`${base_url}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateActivity = async (token, activityId, name, description) => {
  try {
    const response = await fetch(`${base_url}/activities/${activityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateRoutineActivity = async (
  routineActivityId,
  token,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `${base_url}/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count,
          duration,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteRoutineActivity = async (routineActivityId, token) => {
  try {
    const response = await fetch(
      `${base_url}/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getPublicRoutines = async () => {
  try {
    const response = await fetch(`${base_url}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
